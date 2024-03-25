function unroll(squareArray) {
  let result = []

  if (squareArray.length === 0) return;

  result.push(...squareArray.shift());
  result.push(...squareArray.map(elem => elem.pop()));
  result.push(...squareArray.pop().reverse());
  result.push(...squareArray.map(elem => elem.shift()).reverse());
  unroll(squareArray);
  return result;
}
module.exports = unroll;
