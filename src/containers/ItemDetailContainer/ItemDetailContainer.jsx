import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Loader } from "../../components/Loader/Loader";
 
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  // Gestionar la obtencion de la data del detalle
  useEffect(() => { 
      (async () => {
        try {
            //Genera la referencia al documento
            const docRef = doc(db, "products", productId);
          
            //Realizamos la petición o el llamado a Firebase
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) { 
              setProductDetail({id: docSnap.id, ...docSnap.data()});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            setLoading(false)
        } catch (err) {
          console.log(err);
        }
      })(); 
  }, [productId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail product={productDetail} />
      )}
    </>
  );
};

export default ItemDetailContainer;
