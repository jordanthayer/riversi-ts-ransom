export enum Player {
    White = -1,
    None = 0,
    Black = 1,
}

export var nextPlayer = function( current : Player ){
    if (current == Player.None)
        return Player.White
    if (current == Player.White)
        return Player.Black
    if (current == Player.Black)
        return Player.White
}
