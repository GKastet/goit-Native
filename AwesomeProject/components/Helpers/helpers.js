import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config";

export const writeDataToFirestore = async (fotoObj, collectionName) => {
  // console.log('fotoObj', fotoObj);
  const {
    fotoUri,
    fotoName,
    fotoLocationAddress,
    fotoCountry,
    fotoCoords,
    fotoLikes,
    fotoCommentsNumber,
    userUid,
  } = fotoObj;
  try {
    const docRef = await addDoc(collection(db, `${collectionName}`), {
      fotoUri,
      fotoName,
      fotoLocationAddress,
      fotoCountry,
      fotoCoords,
      fotoLikes,
      fotoCommentsNumber,
      userUid,
    });
    console.log("Document written with ID: ", docRef.id);
    // await updateDataInFirestoreId('foto', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const writeDataToFirestoreComments = async (commentsToStore, collectionName) => {
  //console.log('commentsToStore', commentsToStore);
  const { fotoId, comment } = commentsToStore;
  try {
    const docRef = await addDoc(collection(db, `${collectionName}`), {
      comment,
      fotoId,
    });
    console.log("Document written with ID: ", docRef.id);
    // await updateDataInFirestoreId('foto', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getDataFromFirestore = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, `${collectionName}`));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateDataInFirestoreId = async (collectionName, docId) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, {
      updateId: docId,
    });
    console.log("document updated");
  } catch (error) {
    console.log(error);
  }
};

export const updateDataInFirestoreLikes = async (updateLikes) => {
  const { collectionName, docId, totalLikes } = updateLikes;
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, {
      fotoLikes: totalLikes,
    });
    console.log("document updated");
  } catch (error) {
    console.log(error);
  }
};
