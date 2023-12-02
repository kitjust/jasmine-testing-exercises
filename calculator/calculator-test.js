it('should calculate the monthly rate correctly', function() {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 8,
    rate: 5.8
  })).toEqual('130.44');
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 5
  })).toEqual('188.71')
  expect(calculateMonthlyPayment({
    amount: 9999,
    years: 9,
    rate: 12
  })).toEqual('151.83')
});

it("should return a result with 2 decimal places", function() {
  const regex = /^\d+\.\d{2}$/;
  expect(regex.test(calculateMonthlyPayment({
    amount: 10000,
    years: 5,
    rate: 5
  }))).toBe(true)
})

it("should return NaN if any of the input values are not numbers", function() {
  const actualPayment = calculateMonthlyPayment({
    amount: "not a number",
    years: 5,
    rate: 5
  })
  expect(actualPayment).toBe('NaN');
})

it("should return 0 if the amount is 0", function() {
  expect(calculateMonthlyPayment({
    amount: 0,
    years: 5,
    rate: 5
  })).toEqual('0.00')
})

it("should handle terribly high interest rates", function() {
    expect(calculateMonthlyPayment({
      amount: 1000,
      years: 40,
      rate: 99
    })).toEqual('82.50');
});