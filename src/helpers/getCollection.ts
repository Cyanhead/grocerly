import { collection, getDocs } from 'firebase/firestore';
import { db } from '../context/Firebase';

/**
 * Retrieves all documents in the given collection and returns them as an array of plain objects.
 *
 * @param collectionName The name of the collection to retrieve.
 *
 * @returns A promise that resolves to an array of objects, each containing the data of a document in the given collection.
 */
export async function getCollection<T>(
  collectionName: string
): Promise<Array<T>> {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
  })) as Array<T>;
}
