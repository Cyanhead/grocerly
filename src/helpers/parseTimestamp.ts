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
 * Parses a Firestore Timestamp into a formatted date string.
 *
 * @param timestamp - The Firestore Timestamp to be parsed.
 * @param config - Optional formatting options for the date string.
 *   - year: Specifies the representation of the year. Default is 'numeric'.
 *   - month: Specifies the representation of the month. Default is 'long'.
 *   - day: Specifies the representation of the day. Default is 'numeric'.
 *   - locale: The locale to use for formatting. Default is 'en-US'.
 *   - hour, minute, second, hour12: Additional Intl.DateTimeFormat options.
 *
 * @returns The formatted date string, or null if the timestamp is invalid.
 */
export function parseTimestamp(
  timestamp: Timestamp,
  config?: FormatOptions
): string | null {
  if (!isValidTimestamp(timestamp)) {
    console.warn(
      `parseTimestamp was called with an invalid timestamp: ${timestamp}`
    );
    return null;
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
}
