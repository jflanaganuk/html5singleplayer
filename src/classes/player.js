import Entity from './entity';

export default class Player extends Entity {
    constructor({x, spdX, y, spdY, name, hp}){
        super(x, spdX, y, spdY, name);
        this.x = x;
        this.spdX = spdX;
        this.y = y;
        this.spdY = spdY;
        this.name = name;
        this.hp = hp;
    }

    getHp(){
        return this.hp;
    }

    setHp(input){
        this.hp = input;
    }

    update(ctx) {
        this.draw(ctx);
        ctx.fillText(`${this.hp} hp`,0,30);
    }
}