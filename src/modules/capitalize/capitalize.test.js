import capitalize from './capitalize.js';

describe('capitalize', () => {
  it('validate string', () => {
    // Arrange
    const test = '';
    // Act
    const result = capitalize(test);
    // Aessrt
    expect(typeof result).toBe('string');
  });
  it('validate empty', () => {
    // Arrange
    const test = '';
    // Act
    const result = capitalize(test);
    // Aessrt
    expect(result).toBe('add a string');
  });
  it("don't pass string", () => {
    // Arrange
    const test = 5;
    // Act
    const result = capitalize(test);
    // Aessrt
    expect(result).toBe('add a string');
  });
  it(' make it capitalized', () => {
    // Arrange
    const test = 'text';
    // Act
    const result = capitalize(test);
    // Aessrt
    expect(result).toBe('Text');
  });
});