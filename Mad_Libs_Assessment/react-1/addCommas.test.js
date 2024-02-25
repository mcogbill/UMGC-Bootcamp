const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('add commas', () => {
    expect(addCommas(5)).toEqual('5');
    expect(addCommas(50000)).toEqual('50,000');
    expect(addCommas(123456)).toEqual('123,456');
    expect(addCommas(6577775)).toEqual('6,577,775');
    expect(addCommas(10000000)).toEqual('10,000,000');
  })
});
