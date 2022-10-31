import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

// Add a new document with a generated id.
const automaticSave = async () => {
  try {
    const res = await fetch('./mocks/products.json')
    const productStoSvae = await res.json();

    productStoSvae.forEach(async (product) => {
      const docRef = await addDoc(collection(db, "products"), {
        category: product.category,
        description_title: product.description_title,
        description: product.description,
        name: product.name,
        stock: product.stock,
        price: product.price,
        pictureUrl: product.pictureUrl
      });
      console.log("Document written with ID: ", docRef.id);
      
    });
  } catch (error) {
    console.log(error);
  }
}

export default automaticSave;
