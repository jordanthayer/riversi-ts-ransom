export interface Position {
    row : number;
    col : number;
}

// cardinals
export var north = function (start : Position) : Position {
    return { row : start.row - 1, col : start.col }
}

export var south = function (start : Position) : Position {
    return { row : start.row + 1, col : start.col }
}

export var east = function (start : Position) : Position {
    return { row : start.row, col : start.col - 1 }
}

export var west = function (start : Position) : Position {
    return { row : start.row, col : start.col + 1 }
}

// ordinals
export var northeast = function(start : Position) : Position {
    return { row : start.row - 1, col : start.col - 1 }
}

export var northwest = function(start : Position) : Position {
    return { row : start.row - 1, col : start.col + 1 }
}

export var southeast = function(start : Position) : Position {
    return { row : start.row + 1, col : start.col - 1 }
}

export var southwest = function(start : Position) : Position {
    return { row : start.row + 1, col : start.col + 1 }
}
