import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { generateOrder } from "../../services/generateOrder";
import { ItemCart } from "../ItemCart/ItemCart";

import Swal from "sweetalert2";

import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Loader } from "../Loader/Loader"; 

export const Cart = () => {
  const { totalAmount, cart, clearCart, totalPrice } = useCartContext();
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    totalPrice();
  });

  const handleBuy = () => {
    setLoading(true);
    const total = totalAmount;

    Swal.fire({
      title: "Login Form",
      html: ` 
        <input type="text" id="login" class="swal2-input" placeholder="Name">
        <input type="tel" id="tel" class="swal2-input" placeholder="Phone Number">
        <input type="email" id="email" class="swal2-input" placeholder="Email">
        `,
      confirmButtonText: 'Send',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value;
        const email = Swal.getPopup().querySelector('#email').value; 
        const tel = Swal.getPopup().querySelector('#tel').value;
        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$/;
        const regexEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; 
        const regexTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        if (!login || !email || !tel) Swal.showValidationMessage(`Please enter complete all the fields`);
        if (!regexName.test(login)) Swal.showValidationMessage(`You have to enter a valid name`);
        if (!regexEmail.test(email)) Swal.showValidationMessage(`You have to enter a valid email`);
        if (!regexTel.test(tel)) Swal.showValidationMessage(`Please enter a valid phone number`);
          
       
        return { login: login, email: email, tel: tel}
      },
    }).then((result) => {
      const order = generateOrder(
        result.value.login,
        result.value.email,
        result.value.tel,
        cart,
        total
      );

      // Add a new document with a generated id.
      const docRef = addDoc(collection(db, "orders"), order);
      
      
      // Update product stock
      cart.forEach(async (productOnCart) => {
        // Primero accedemos a la referencia del producto
        const productRef = doc(db, "products", productOnCart.id);
        // Llamamos al snapshot, llamando a firebase
        const productSnap = await getDoc(productRef);
        // En snapshot.data() nos devuelve la información del documento a actualizar
        await updateDoc(productRef, {
          stock: productSnap.data().stock - productOnCart.quantity, 
        });
        console.log(docRef);
      });
      setLoading(false);
      clearCart()
      Swal.fire(`
        Name: ${result.value.login}
        Email: ${result.value.email}
        Phone: ${result.value.tel}
      `.trim())
    }).catch(e => {
      Swal.fire('Error', e)
      setLoading(false);
    })
    
  };

  return cart.length === 0 ? (
    <div className="empty">
      <h2>
        There are no prodcuts on the cart...
      </h2>
      <div className="btn-back">
        <Link className="back" to="/catalog">
          {" "}
          Go to catalog
        </Link>
      </div>
    </div>
  ) : (
    <div className={`cart-container`}>
      {cart.map((item) => (
        <ItemCart key={item.id} product={item} />
      ))}

      <div className="total">
        <h2 className="cart-total">Total: ${totalAmount}</h2>
        <button onClick={clearCart} className="clear-cart">
          Clear cart
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <button onClick={handleBuy} className="finish-prurchase">
          Finish Purchase
        </button>
      )}
    </div>
  );
};
