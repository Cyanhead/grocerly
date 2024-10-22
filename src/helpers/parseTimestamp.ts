import { Timestamp } from 'firebase/firestore';

function isValidTimestamp(timestamp: Timestamp) {
  return timestamp instanceof Timestamp;
}

type FormatOptions = {
  year?: Intl.DateTimeFormatOptions['year'];
  month?: Intl.DateTimeFormatOptions['month'];
  day?: Intl.DateTimeFormatOptions['day'];
  locale?: Intl.LocalesArgument;
  hour?: Intl.DateTimeFormatOptions['hour'];
  minute?: Intl.DateTimeFormatOptions['minute'];
  second?: Intl.DateTimeFormatOptions['second'];
  hour12?: Intl.DateTimeFormatOptions['hour12'];
};

/**
 * Returns a human-readable string representation of a Timestamp object,
 * or 'invalid date' if the object is not a valid Timestamp.
 *
 * @param timestamp - The Timestamp object to be converted
 * @param config - An object containing formatting options
 * @returns A human-readable string version of the timestamp
 */
export const parseTimestamp = (
  timestamp: Timestamp,
  config?: FormatOptions
): string => {
  if (!isValidTimestamp(timestamp)) {
    console.warn(
      `parseTimestamp was called with an invalid timestamp: ${timestamp}`
    );
    return '{invalid date}';
  }

  const {
    year = 'numeric',
    month = 'long',
    day = 'numeric',
    locale = 'en-US',
    ...rest
  } = config ?? {};

  const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    year,
    month,
    day,
    ...(config ? rest : {}),
  };

  return new Intl.DateTimeFormat(locale, dateTimeFormatOptions).format(
    timestamp.toDate()
  );
};
