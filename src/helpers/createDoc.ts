// TODO: use everywhere necessary

import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
} from 'firebase/firestore';
import { db } from '../context/Firebase';

/**
 * Creates a new document in the specified Firestore collection and returns the
 * id of the newly created document as well as a reference to the document.
 *
 * @param collectionName - The name of the Firestore collection to create the
 *   document in
 * @returns A tuple containing the id of the newly created document and a
 *   reference to the document
 */
export async function createDocAndReturnIdAndDocRef(
  collectionName: string
): Promise<[string, DocumentReference<DocumentData, DocumentData>]> {
  const itemsDocRef = collection(db, collectionName);
  const docRef = await addDoc(itemsDocRef, {});

  const docId = `${docRef.id}`;
  console.log(`Document written with ID: ${docId}`);

  return [docId, docRef];
}
