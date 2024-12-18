import { collection, getDocs } from 'firebase/firestore';
import { db } from '../context/Firebase';

/**
 * Retrieves all documents from a specified collection in the Firestore database.
 *
 * @param {string} collectionName - The name of the collection to fetch documents from.
 * @returns {Promise<Array<T>>} A promise that resolves to an array of documents in the collection.
 */
export async function getCollection<T>(
  collectionName: string
): Promise<Array<T>> {
  const querySnapshot = await getDocs(collection(db, collectionName));

  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
  })) as Array<T>;
}
