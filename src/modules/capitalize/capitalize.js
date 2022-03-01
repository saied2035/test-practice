const capitalize = (string) => {
  if (typeof string !== 'string' || !string.length) return 'add a string';
  const [fristChar, ...rest] = string;
  return fristChar.toUpperCase() + rest.join('');
};
export default capitalize;