import * as Player from "./player";
import * as Position from "./position";

export enum MoveResponse {
    Legal = 0,
    Illegal_Turn_Order,
    Illegal_Off_Board,
    Illegal_Occupied,
}

// 8 elements, as a normal reversi board is 8x8 [JTT 15-11-16]
let BLANK_ARRAY : Array<Player.Player> = [ Player.Player.None, Player.Player.None,
                                           Player.Player.None, Player.Player.None,
                                           Player.Player.None, Player.Player.None,
                                           Player.Player.None, Player.Player.None ]


export class Board {
    private pieces : Array<Array<Player.Player>> = [[]];
    private toPlay : Player.Player = Player.Player.None;


    constructor(firstPlayer : Player.Player){
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

    private legalP(pos : Position.Position, player : Player.Player){

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
        if (current == Player.Player.White || current == Player.Player.Black){
            return MoveResponse.Illegal_Occupied;
        }

        // now we know nothing insane is happening.  We have to decide if we're adjacent
        // to a piece from the same player. [JTT 15-11-16]

        return MoveResponse.Legal;
    }

    public move(pos : Position.Position, player : Player.Player){
        let legal = this.legalP(pos, player);
        if(legal == MoveResponse.Legal){
            this.pieces[pos.col][pos.row] = player;
            this.toPlay = Player.nextPlayer(player);
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
                case Player.Player.None:
                    console.log(' ');
                    break;
                case Player.Player.White:
                    console.log('X');
                    break;
                case Player.Player.Black:
                    console.log('O');
                    break;
                }
            }
            console.log('\n');
        }
    }
}
