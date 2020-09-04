
// You should implement your task here.

module.exports = function towelSort(matrix) {
    var arr = [];
    if (!matrix) return [];
    for (var i = 0; i < matrix.length; i++) {
        arr.push(...((i % 2 == 0) ? matrix[i] : matrix[i].reverse()))
    }
    return arr;
}
