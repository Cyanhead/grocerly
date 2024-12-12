// TODO: use everywhere necessary

import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  WithFieldValue,
} from 'firebase/firestore';
import { db } from '../context/Firebase';

type PassedDocumentData<T> = T;

/**
 * Creates a new document in the specified Firestore collection and returns the
 * id of the newly created document as well as a reference to the document.
 *
 * @param documentDataObject - The data to be stored in the new document
 * @param collectionName - The name of the Firestore collection to create the
 *   document in
 * @returns A tuple containing the id of the newly created document and a
 *   reference to the document
 */
export async function createDocAndReturnIdAndDocRef<T>(
  documentDataObject: PassedDocumentData<T>,
  collectionName: string
): Promise<[string, DocumentReference<DocumentData, DocumentData>]> {
  const itemsDocRef = collection(db, collectionName);
  const docRef = await addDoc(
    itemsDocRef,
    documentDataObject as WithFieldValue<DocumentData>
  );

  const docId = `${docRef.id}`;
  console.log(`Document written with ID: ${docId}`);

  return [docId, docRef];
}
