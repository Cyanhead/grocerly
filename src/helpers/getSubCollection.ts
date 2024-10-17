import { collection, getDocs } from 'firebase/firestore';
import { db } from '../context/Firebase';

/**
 * Gets a subcollection from the Firestore database.
 *
 * The path should be in the format "parentCollection/documentId/subCollection".
 *
 * @param {string} path
 * @returns {Promise<Array<T>>}
 */
export async function getSubCollection<T>(path: string): Promise<Array<T>> {
  const [parentCollection, documentId, subCollection] = path.split('/');

  const querySnapshot = await getDocs(
    collection(db, parentCollection, documentId, subCollection)
  );

  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
  })) as Array<T>;
}
