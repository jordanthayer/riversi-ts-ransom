class BoardPos {
    constructor(public row, public col){
    }
}

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


enum Player {
    None = 0,
    White,
    Black,
}

var nextPlayer = function( current : Player ){
    if (current == Player.None)
        return Player.White
    if (current == Player.White)
        return Player.Black
    if (current == Player.Black)
        return Player.White
}

enum MoveResponse {
    Legal = 0,
    Illegal_Turn_Order,
    Illegal_Off_Board,
    Illegal_Occupied,
}

// 8 elements, as a normal reversi board is 8x8 [JTT 15-11-16]
let BLANK_ARRAY : Array<Player> = [ Player.None, Player.None, Player.None, Player.None,
                                    Player.None, Player.None, Player.None, Player.None ]


class Board {
    private pieces : Array<Array<Player>> = [[]];
    private toPlay : Player = Player.None;


    constructor(firstPlayer : Player){
        for(let i = 0; i < 8; i++){
            this.pieces.push(BLANK_ARRAY.slice());
        }
        this.toPlay = firstPlayer;
    }

    public score(){
        throw "stub implementation";
    }

    private legalP(pos : Position, player : Player){
    }

    public move(pos : Position, player : Player){
        throw "stub implementation";
    }

    public prettyPrint(outChan){
        throw "stub impelmentation";
    }
}
