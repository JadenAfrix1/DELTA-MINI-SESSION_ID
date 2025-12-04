/**
 * Generates a random alphanumeric ID string of specified length.
 * @param {number} num - Desired length of the ID (default: 4)
 * @returns {string} - Random ID
 */
export function makeid(num = 4) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}