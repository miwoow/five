import { _decorator, Component, Graphics, CCString, CCInteger, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('chess')
export class chess extends Component {

    @property(CCString)
    public mcolor: string = "#000000";

    @property(CCInteger)
    public px: number;

    @property(CCInteger)
    public py: number;

    onload() {
        const g = this.getComponent(Graphics);
        // g.lineWidth = 10;
        // g.fillColor.fromHEX(this.mcolor);
        g.fillColor.fromHEX(this.mcolor); 
    }
    
    start() {
        // const g = this.getComponent(Graphics);
        // g.circle(0, 0, 20);
        // g.stroke();
        // g.fill();
    }

    setColorPos(ncolor: string, x: number, y: number) {
        this.mcolor = ncolor;
        const g = this.getComponent(Graphics);
        g.fillColor.fromHEX(this.mcolor); 
        g.circle(0, 0, 20);
        g.stroke();
        g.fill();
        this.px = x;
        this.py = y;
        this.node.setPosition(v3(x, y, 0));
    }

    update(deltaTime: number) {
    }
}


