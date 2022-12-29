import { _decorator, Component, Prefab, instantiate, v3, Node, Graphics, Vec2, Script, math, Label, LabelComponent } from 'cc';
import { ai } from './ai';
import { chess } from './chess';
import { player } from './player';
const { ccclass, property } = _decorator;

const WHITE="#ffffff";
const BLACK="#000000";

@ccclass('board')
export class board extends Component {
    @property({type:Prefab})
    private chessPrefab: Prefab = null;

    @property(Node)
    private gameOverBox: Node;

    // save all chess info.
    private allChess: chess[][]=[];

    private turn: number = 0;

    private players: player[]=[];

    onload() {
    }
    
    start() {
        this.players[0] = new player(WHITE, this.chessPrefab);
        this.players[1] = new ai(BLACK, this.chessPrefab);
        this.addEventHandler()
    }

    addEventHandler() {
        this.node.on(Node.EventType.TOUCH_END, (event)=>{
            this.touchEnd(event);
        }, this);
    }

    removeEventHandler() {
        this.node.off(Node.EventType.TOUCH_END);
    }

    gameOver() {
        
        this.removeEventHandler();

        for(let i=0; i<15; i++) {
            for(let j=0; j<15; j++) {
                if (this.allChess[i] && this.allChess[i][j]) {
                    this.allChess[i][j].node.removeFromParent();
                }
            }
        }
        
        this.allChess = [];
        const gameResultLabel = this.gameOverBox.getComponent(LabelComponent);
            if (gameResultLabel) {
                gameResultLabel.string = "Win!";
            }
            this.gameOverBox.active = true;
    }

    restartBtnClick() {
        this.gameOverBox.active = false;
        this.turn = 0;
        this.addEventHandler();
    }

    touchEnd(event) {
        if (this.turn != 0) {
            return
        }
        let point = event.getUILocation();

        let start = this.node.getPosition();
        point.x = point.x - start.x;
        point.y = point.y - start.y;
        let xi = Math.round(point.x/40);
        let yi = Math.round(point.y/40);

        console.log(xi);
        console.log(yi);
        if (this.allChess[xi] && this.allChess[xi][yi]) {
            return
        }
        this.addChess(xi, yi)
        if (ai.CheckWin(this.allChess, xi, yi, WHITE)) {
            this.gameOver()
            return
        }
        this.turn = 1;
        [xi, yi] = this.players[this.turn].think(this.allChess);
        this.addChess(xi ,yi)
        if (ai.CheckWin(this.allChess, xi, yi, BLACK)) {
            this.gameOver()
            return
        }
    }

    addChess(xi: number, yi:number) {
        let ch = this.players[this.turn].getChess(xi, yi)
        this.node.addChild(ch);
        
        if (!this.allChess[xi]) {
            this.allChess[xi] = [];
        }
        let chessScript = ch.getComponent(chess);
        this.allChess[xi][yi] = chessScript;
    }

    update(deltaTime: number) {
        
    }
}


