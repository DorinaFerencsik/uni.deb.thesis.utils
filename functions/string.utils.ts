/**
 * Converts camelCase string to snake_case
 * @param str string to be converted
 */
export const camelToSnakeCase = (str: string) => 
  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
