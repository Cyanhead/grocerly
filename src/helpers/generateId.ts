/**
 * Generates a unique identifier in the form of a string, combining the current
 * timestamp with a random string generated using the crypto API.
 *
 * @returns {string} A unique session ID in the form of a string.
 */
export function generateUniqueId(): string {
  // Get current time in milliseconds
  const timestamp = Date.now().toString(36);

  // Generate a random string using the crypto API
  const randomString = crypto
    .getRandomValues(new Uint32Array(1))[0]
    .toString(36);

  // Combine timestamp and random string to form a unique session ID
  const sessionId = `${timestamp}-${randomString}`;

  return sessionId;
}
