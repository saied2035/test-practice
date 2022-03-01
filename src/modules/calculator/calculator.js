class Calculator {
  validation(numbers) {
    this.valid = true;
    numbers.forEach((num) => {
      if (num !== Number(num)) {
        this.valid = false;
      }
    });
    return this.valid;
  }

  add(...numbers) {
    numbers = numbers.flat();
    if (!numbers.length) return 'you should pass at least a number';
    const valid = this.validation(numbers);
    return !valid
      ? 'there is not-number value'
      : numbers.reduce((prev, current) => prev + current);
  }

  subtract(...numbers) {
    numbers = numbers.flat();
    if (!numbers.length) return 'you should pass at least a number';
    const valid = this.validation(numbers);
    return !valid
      ? 'there is not-number value'
      : numbers.reduce((prev, current) => prev - current);
  }

  divide(...numbers) {
    numbers = numbers.flat();
    if (!numbers.length) return 'you should pass at least a number';
    const valid = this.validation(numbers);
    return !valid
      ? 'there is not-number value'
      : numbers.reduce((prev, current) => prev * (1 / current));
  }

  multiply(...numbers) {
    numbers = numbers.flat();
    if (!numbers.length) return 'you should pass at least a number';
    const valid = this.validation(numbers);
    return !valid
      ? 'there is not-number value'
      : numbers.reduce((prev, current) => prev * current);
  }
}

export default Calculator;