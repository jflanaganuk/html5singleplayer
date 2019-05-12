export default class Collisions {

    constructor(){
        this.collisionDistance = 30;
    }

    getDistanceBetweenEntity(entity1,entity2) {
        const vx = entity1.getX() - entity2.getX();
        const vy = entity1.getY() - entity2.getY();
        return Math.sqrt(vx*vx+vy*vy);
    }

    testCollisionEntity(entity1,entity2) {
        const distance = this.getDistanceBetweenEntity(entity1, entity2);
        return distance < this.collisionDistance;
    }
}