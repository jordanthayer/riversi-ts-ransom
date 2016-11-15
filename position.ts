interface Position {
    row : number;
    col : number;
}

var north = function (start : Position) {
    return { row : start.row - 1, col : start.col }
}

var south = function (start : Position) {
    return { row : start.row + 1, col : start.col }
}

var east = function (start : Position) {
    return { row : start.row, col : start.col - 1 }
}

var west = function (start : Position) {
    return { row : start.row, col : start.col + 1 }
}

