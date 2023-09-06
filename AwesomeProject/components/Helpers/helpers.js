import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../config';

export const writeDataToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        email: 'email@email.com',
        born: 1815
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
        throw e;
    }
};

// export const getDataFromFirestore = async () => {
//     try {
//       const snapshot = await getDocs(collection(db, 'users'));
// 			// Перевіряємо у консолі отримані дані
//       snapshot.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));
// 			// Повертаємо масив обʼєктів у довільній формі
// 			return snapshot.map((doc) => ({ id: doc.id, data: doc.data() }))
//     } catch (error) {
//       console.log(error);
// 			throw error;
//     }
//   };

  export const getDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      
      // Convert the query snapshot to an array of objects
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
      
      // Log the data
      data.forEach((item) => console.log(`${item.id} =>`, item.data));
      
      // Return the array of objects
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };