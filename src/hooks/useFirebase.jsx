import { useState, useEffect } from 'react' 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useFirebase = (categoryId) => {

  const [loading, setLoading] = useState(false);
  const [products, setProductos] = useState([]);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // Generar la query
        const q = categoryId
        // Ajustamos la query segun el param que viende desde la navegacion
          ? query(
              collection(db, "products"),
              where("category", "==", categoryId)
            )
          : query(collection(db, "products"));

        // Hacer llamado a Firebase
        const querySnapshot = await getDocs(q);
        const fireBaseProduct = [];
        // Obtener el spanshot con los datos crudos
        querySnapshot.forEach((doc) => {
          fireBaseProduct.push({ id: doc.id, ...doc.data() });
        }); 
        setProductos(fireBaseProduct);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [categoryId]);

  return [loading, products, error]
}
