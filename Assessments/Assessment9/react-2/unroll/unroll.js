function unroll(squareArray, array = []) {
    for (let i = 0; i < squareArray.length; i++) {
        array.push(squareArray[0][i])
    }
    squareArray.shift();
    for (let j = 0; j < squareArray.length; j++) {
        array.push(squareArray[j][squareArray.length])
        squareArray[j].pop()
    }

    for (let k = squareArray.length - 1; k >= 0; k--) {
        array.push(squareArray[squareArray.length - 1][k])
    }
    squareArray.pop();

    for (let l = squareArray.length - 1; l >= 0; l--) {
        array.push(squareArray[l][0])
        squareArray[l].shift()
    }

    if (squareArray.length > 0) {
        return unroll(squareArray, array)
    }
    return array
}

module.exports = unroll;
