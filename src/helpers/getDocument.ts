import { doc, getDoc } from 'firebase/firestore';
import { db } from '../context/Firebase';

/**
 * Retrieves a single document from Firestore.
 *
 * @param collectionName - The name of the collection to retrieve the document from.
 * @param documentId - The ID of the document to retrieve.
 * @returns The document if it exists, or null if it does not.
 *
 * @remarks
 * If the document does not exist, the function will print "No such document!" to the
 * console and return null.
 *
 * If an error occurs while fetching the document, the function will print the error
 * message to the console and return null.
 */
export async function getDocument<T>(
  collectionName: string,
  documentId: string
): Promise<T | undefined> {
  if (!collectionName || !documentId) {
    console.error('Invalid collection name passed to getDocument');
    return;
  }

  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as T;
    } else {
      console.info('No such document!');
      return;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    return;
  }
}
