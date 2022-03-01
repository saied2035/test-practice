import stringLength from './stringLength.js';

it('string length 1', () => {
  // arrange
  const string = '';
  // act
  const result = () => stringLength(string);
  // assert
  expect(result).toThrow('string don\'t match the conditions');
});

it('string length 2', () => {
  // arrange
  const string = 'h';
  // act
  const result = () => stringLength(string);
  // assert
  expect(result).toThrow('string don\'t match the conditions');
});

it('string length 3', () => {
  // arrange
  const string = 'hello';
  // act
  const result = stringLength(string);
  // assert
  expect(result).toBe(5);
});

it('string length 4', () => {
  // arrange
  const string = 'helloooooo';
  // act
  const result = () => stringLength(string);
  // assert
  expect(result).toThrow('string don\'t match the conditions');
});

it('string length 5', () => {
  // arrange
  const string = 'hellooooooo';
  // act
  const result = () => stringLength(string);
  // assert
  expect(result).toThrow('string don\'t match the conditions');
});