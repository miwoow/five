import { instantiate, Prefab, Node } from "cc"
import { chess } from "./chess"

export class player {
    mycolor: string

    chessPrefab: Prefab = null

    constructor(color:string, chessPrefab: Prefab) {
        this.mycolor = color
        this.chessPrefab = chessPrefab
    }

    getChess(xi:number, yi:number):Node {
        let ch = instantiate(this.chessPrefab);
        
        let chessScript = ch.getComponent(chess);
        
        chessScript.setColorPos(this.mycolor, xi*40, yi*40);
        return ch;
    }

    think(allChess:chess[][]):[xi:number, yi:number] {
        return [0, 0];
    }
    
}


