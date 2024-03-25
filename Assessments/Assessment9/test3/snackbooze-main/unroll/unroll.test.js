const unroll = require("./unroll");

describe("#unroll", function () {

  it("should create new array", function () {
    expect(unroll([
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ])).toEqual(["A", "B", "C", "F", "I", "H", "G", "D", "E"]);
  });

});
