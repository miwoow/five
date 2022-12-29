import { instantiate, Node } from "cc";
import { chess } from "./chess";
import { player } from "./player";

export class ai extends player {

    static CheckWin(allChess:chess[][], xi: number, yi:number, wcolor: string):boolean {
        let num = 1;
        for(let i=1; i<5;i++) {
            if (allChess[xi+i] && allChess[xi+i][yi] && allChess[xi+i][yi].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        for(let i=1; i<5;i++) {
            if (allChess[xi-i] && allChess[xi-i][yi] && allChess[xi-i][yi].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        console.log(num);
        if (num == 5) {
            return true;
        }
        num = 1;
        for(let i=1; i<5;i++) {
            if (allChess[xi] && allChess[xi][yi+i] && allChess[xi][yi+i].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        for(let i=1; i<5;i++) {
            if (allChess[xi] && allChess[xi][yi-i] && allChess[xi][yi-i].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        console.log(num);
        if (num == 5) {
            return true;
        }
        num = 1;
        for(let i=1; i<5;i++) {
            if (allChess[xi+i] && allChess[xi+i][yi+i] && allChess[xi+i][yi+i].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        for(let i=1; i<5;i++) {
            if (allChess[xi-i] && allChess[xi-i][yi-i] && allChess[xi-i][yi-i].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        console.log(num);
        if (num == 5) {
            return true;
        }
        num = 1;
        for(let i=1; i<5; i++) {
            if (allChess[xi-i] && allChess[xi-i][yi+i] && allChess[xi-i][yi+i].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        for(let i=1; i<5; i++) {
            if (allChess[xi+i] && allChess[xi+i][yi-i] && allChess[xi+i][yi-i].mcolor == wcolor) {
                num++;
                continue;
            } else {
                break;
            }
        }
        console.log(num);
        if (num == 5) {
            return true;
        }
        return false;
    }
    
    think(allChess:chess[][]):[xi:number, yi:number] {



        return [1, 2]
    }


}


