const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});

test('One euro should be 1.07 dollars', () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test('One dollar should be 146.26 yenes', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26168, 2);
});

test('156.5 yenes should be 0.87 libras', () => {
    expect(fromYenToPound(156.5)).toBeCloseTo(0.87);
});