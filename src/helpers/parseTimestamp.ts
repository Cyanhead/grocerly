import { Timestamp } from 'firebase/firestore';

function isValidTimestamp(timestamp: Timestamp) {
  return timestamp instanceof Timestamp;
}

/**
 * Returns a human-readable string representation of a Timestamp object,
 * or 'invalid date' if the object is not a valid Timestamp.
 *
 * @param timestamp - The Timestamp object to be converted
 * @returns A human-readable string version of the timestamp
 */
export const parseTimestamp = (timestamp: Timestamp): string => {
  if (!isValidTimestamp(timestamp)) {
    console.warn(
      `invalid timestamp passed to parseTimestamp() => ${timestamp}`
    );
    return '{invalid date}';
  }

  const date = timestamp.toDate();
  const dateString = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // hour12: false,
  }).format(date);

  return dateString;
};
