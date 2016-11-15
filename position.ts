class BoardPos {
    constructor(public row, public col){
    }
}

interface Position {
    row : number;
    col : number;
}


enum Player {
    None = 0,
    White,
    Black
}
// 8 elements, as a normal reversi board is 8x8 [JTT 15-11-16]
let BLANK_ARRAY : Array<Player> = [ Player.None, Player.None, Player.None, Player.None,
                                    Player.None, Player.None, Player.None, Player.None ]


class Board {
    pieces : Array<Array<Player>> = [[]];
    player : Player = Player.None;

    constructor(firstPlayer : Player){
        for(let i = 0; i < 8; i++){
            this.pieces.push(BLANK_ARRAY.slice());
        }
        this.player = firstPlayer;
    }
}
