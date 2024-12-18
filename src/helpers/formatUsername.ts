import { truncateString } from './truncateString';

/**
 * Format a username for display in a limited amount of space.
 * @param {string} username The username to format.
 * @param {number} truncationLength The maximum number of characters to display.
 * @returns A formatted username string.
 */
export function formatUserName(username: string, truncationLength: number) {
  const names = username.split(' ');
  if (names.length === 1) return truncateString(username, truncationLength);

  const [firstName, lastName] = names;
  if (firstName.length > truncationLength)
    return truncateString(firstName, truncationLength);

  const lastNameInitial = lastName[0].toUpperCase();
  return `${firstName} ${lastNameInitial}.`;
}
