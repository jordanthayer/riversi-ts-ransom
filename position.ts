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
    White = -1,
    None = 0,
    Black = 1,
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
        let result = 0
        for(let x = 0; x < 8; x++){
            for(let y = 0; y < 8; y++){
                result += this.pieces[x][y];
            }
        }
        return result;
    }

    private legalP(pos : Position, player : Player){

        if(player != this.toPlay){
            return MoveResponse.Illegal_Turn_Order;
        }

        if(pos.col < 0 || pos.col >= 8){
            return MoveResponse.Illegal_Off_Board;
        }

        if(pos.row < 0 || pos.col >= 8){
            return MoveResponse.Illegal_Off_Board;
        }

        let current = this.pieces[pos.col][pos.row];
        if (current == Player.White || current == Player.Black){
            return MoveResponse.Illegal_Occupied;
        }

        return MoveResponse.Legal;
    }

    public move(pos : Position, player : Player){
        let legal = this.legalP(pos, player);
        if(legal == MoveResponse.Legal){
            this.pieces[pos.col][pos.row] = player;
            this.toPlay = nextPlayer(player);
        }
        // here is where we would flip pieces in the various directions. [JTT 15-11-16]
        throw "stub implementation"
        //return legal;
    }

    public prettyPrint(){
        for(let x = 0; x < 8; x++){
            for(let y = 0; y < 8; y++){
                let piece = this.pieces[x][y];
                switch(piece){
                case Player.None:
                    console.log(' ');
                    break;
                case Player.White:
                    console.log('X');
                    break;
                case Player.Black:
                    console.log('O');
                    break;
                }
            }
            console.log('\n');
        }
    }
}
