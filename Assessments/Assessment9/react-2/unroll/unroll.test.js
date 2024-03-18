const unroll = require("./unroll");

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

it("unroll(smallerSquare) equals ['a','b','c','f','i','h','g','d','e']", function () {
  expect(unroll(smallerSquare)).toEqual(['a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e']);
});