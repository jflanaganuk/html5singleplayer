export default class Entity {
    constructor({x, spdX, y, spdY, name}){
        this.x = x;
        this.spdX = spdX;
        this.y = y;
        this.spdY = spdY;
        this.name = name;
    }

    getX(){
        return this.x;
    }

    getSpdX(){
        return this.spdX;
    }

    getY(){
        return this.y;
    }

    getSpdY(){
        return this.spdY;
    }

    getName(){
        return this.name;
    }

    setX(input) {
        this.x = input;
    }

    setSpdX(input) {
        this.spdX = input;
    }

    setY(input) {
        this.y = input;
    }

    setSpdY(input) {
        this.spdY = input;
    }

    setName(input) {
        this.name = input;
    }

    update(ctx, width, height, message) {
        this.x += this.spdX;
        this.y += this.spdY;

        if (this.x < 0 || this.x > width) {
            this.spdX = -this.spdX;
        }

        if (this.y < 0 || this.y > height) {
            this.spdY = -this.spdY;
        }

        this.draw(ctx);
    }

    draw(ctx) {
       ctx.fillText(this.name, this.x, this.y); 
    }
}