import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

const ROWS=15;

@ccclass('lines')
export class lines extends Component {
    start() {
        const g = this.getComponent(Graphics);
        for (let i=0; i <= ROWS; i++) {
            g.moveTo(0, i*40);
            g.lineTo(600, i*40);
            g.moveTo(i*40, 0);
            g.lineTo(i*40, 600);
        }
        g.stroke();
    }
    update(deltaTime: number) {
        
    }
}


