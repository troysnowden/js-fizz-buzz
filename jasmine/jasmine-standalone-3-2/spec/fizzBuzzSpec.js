describe('FizzBuzz', () => {
  it('will return a number', () => {
    expect(fizzBuzz()[0]).toEqual(1)
  });
  it('will return Fizz when the number is divisible by 3', () => {
    expect(fizzBuzz()[2]).toEqual("Fizz")
  });
  it('will return Buzz when the number is divisible by 5', () => {
    expect(fizzBuzz()[4]).toEqual("Buzz")
  });
  it('will return FizzBuzz when the number is divisible by 5', () => {
    expect(fizzBuzz()[14]).toEqual("FizzBuzz")
  });
  it('will count up to 100', () => {
    expect(fizzBuzz().length).toEqual(100)
  });
});