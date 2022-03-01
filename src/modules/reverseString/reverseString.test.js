import reverseString from './reverseString.js';

it('is it reversed ?', () => {
  // arrange
  const string = 'soon';
  // act
  const result = reverseString(string);
  // assert
  expect(result).toBe('noos');
});
it('is it empty ?', () => {
  // arrange
  const string = '';
  // act
  const result = reverseString(string);
  // assert
  expect(result).toBe('');
});