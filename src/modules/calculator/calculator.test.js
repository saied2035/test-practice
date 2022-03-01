import Calculator from './calculator.js';

const calculator = new Calculator();

describe('validition', () => {
  it('validition string', () => {
    // Arrange
    const test = [1, 2, '3'];
    // Act
    const result = calculator.validation(test);
    // assert
    expect(result).toBe(false);
  });

  it('validition undefined', () => {
    // Arrange
    const test = [1, undefined, 3];
    // Act
    const result = calculator.validation(test);
    // assert
    expect(result).toBe(false);
  });

  it('validition null', () => {
    // Arrange
    const test = [null, 2, 3];
    // Act
    const result = calculator.validation(test);
    // assert
    expect(result).toBe(false);
  });

  it('validition numbers', () => {
    // Arrange
    const test = [1, 2, 3];
    // Act
    const result = calculator.validation(test);
    // assert
    expect(result).toBe(true);
  });
});

describe('add', () => {
  it('add string', () => {
    // Arrange
    const test = [1, 2, '3'];
    // Act
    const result1 = calculator.add(test);
    const result2 = calculator.add(1, 2, '3');
    // assert
    expect(result1).toBe('there is not-number value');
    expect(result2).toBe('there is not-number value');
  });

  it('add one number', () => {
    // Arrange
    const test = [2];
    // Act
    const result1 = calculator.add(test);
    const result2 = calculator.add(2);
    // assert
    expect(result1).toBe(2);
    expect(result2).toBe(2);
  });

  it('add numbers', () => {
    // Arrange
    const test = [1, 2, 3];
    // Act
    const result1 = calculator.add(test);
    const result2 = calculator.add(1, 2, 3);
    // assert
    expect(result1).toBe(6);
    expect(result2).toBe(6);
  });

  it('add empty', () => {
    // Arrange
    const test = [];
    // Act
    const result1 = calculator.add(test);
    const result2 = calculator.add();
    // assert
    expect(result1).toBe('you should pass at least a number');
    expect(result2).toBe('you should pass at least a number');
  });
});

describe('subtract', () => {
  it('subtract string', () => {
    // Arrange
    const test = [1, 2, '3'];
    // Act
    const result1 = calculator.subtract(test);
    const result2 = calculator.subtract(1, 2, '3');
    // assert
    expect(result1).toBe('there is not-number value');
    expect(result2).toBe('there is not-number value');
  });

  it('subtract one number', () => {
    // Arrange
    const test = [2];
    // Act
    const result1 = calculator.subtract(test);
    const result2 = calculator.subtract(2);
    // assert
    expect(result1).toBe(2);
    expect(result2).toBe(2);
  });

  it('subtract numbers', () => {
    // Arrange
    const test = [1, 2, 3];
    // Act
    const result1 = calculator.subtract(test);
    const result2 = calculator.subtract(1, 2, 3);
    // assert
    expect(result1).toBe(-4);
    expect(result2).toBe(-4);
  });

  it('subtract empty', () => {
    // Arrange
    const test = [];
    // Act
    const result1 = calculator.subtract(test);
    const result2 = calculator.subtract();
    // assert
    expect(result1).toBe('you should pass at least a number');
    expect(result2).toBe('you should pass at least a number');
  });
});

describe('divide', () => {
  it('divide string', () => {
    // Arrange
    const test = [1, 2, '3'];
    // Act
    const result1 = calculator.divide(test);
    const result2 = calculator.divide(1, 2, '3');
    // assert
    expect(result1).toBe('there is not-number value');
    expect(result2).toBe('there is not-number value');
  });

  it('divide one number', () => {
    // Arrange
    const test = [2];
    // Act
    const result1 = calculator.divide(test);
    const result2 = calculator.divide(2);
    // assert
    expect(result1).toBe(2);
    expect(result2).toBe(2);
  });

  it('divide numbers', () => {
    // Arrange
    const test = [1, 2, 3];
    // Act
    const result1 = calculator.divide(test);
    const result2 = calculator.divide(1, 2, 3);
    // assert
    expect(result1).toBe(1 / 6);
    expect(result2).toBe(1 / 6);
  });

  it('divide empty', () => {
    // Arrange
    const test = [];
    // Act
    const result1 = calculator.divide(test);
    const result2 = calculator.divide();
    // assert
    expect(result1).toBe('you should pass at least a number');
    expect(result2).toBe('you should pass at least a number');
  });
});

describe('multiply', () => {
  it('multiply string', () => {
    // Arrange
    const test = [1, 2, '3'];
    // Act
    const result1 = calculator.multiply(test);
    const result2 = calculator.multiply(1, 2, '3');
    // assert
    expect(result1).toBe('there is not-number value');
    expect(result2).toBe('there is not-number value');
  });

  it('multiply one number', () => {
    // Arrange
    const test = [2];
    // Act
    const result1 = calculator.multiply(test);
    const result2 = calculator.multiply(2);
    // assert
    expect(result1).toBe(2);
    expect(result2).toBe(2);
  });

  it('multiply numbers', () => {
    // Arrange
    const test = [1, 2, 3];
    // Act
    const result1 = calculator.multiply(test);
    const result2 = calculator.multiply(1, 2, 3);
    // assert
    expect(result1).toBe(6);
    expect(result2).toBe(6);
  });

  it('multiply empty', () => {
    // Arrange
    const test = [];
    // Act
    const result1 = calculator.multiply(test);
    const result2 = calculator.multiply();
    // assert
    expect(result1).toBe('you should pass at least a number');
    expect(result2).toBe('you should pass at least a number');
  });
});
