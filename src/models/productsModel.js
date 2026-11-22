import { db } from "../data/data.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(productsCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener la colección products: ", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const productDoc = await getDoc(doc(productsCollection, id));
    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error al obtener el documento con ID ${id}: `, error);
    throw error;
  }
};

export const getProductByCategory = async (value) => {
  try {
    const q = query(productsCollection, where("categoria", "==", value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error al realizar la consulta: `, error);
    throw error;
  }
};
