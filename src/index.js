import Player from './classes/player';
import Enemy from './classes/enemy';
import Collisions from './classes/collisions';

import PlayerList from './data/playerList.json';
import EnemyList from './data/enemyList.json';

import Input from './classes/input';

const ctx = document.getElementById('ctx').getContext('2d');
ctx.font = '30px Arial';

const HEIGHT = 500;
const WIDTH = 500;
let timeWhenGameStarted = Date.now();

const player = new Player(PlayerList);

const enemyList = EnemyList;

const enemies = enemyList.map((enemy) => {
    return new Enemy(enemy);
});

const collisions = new Collisions();

document.onmousemove = function(mouse) {
    const mouseX = mouse.clientX;
    const mouseY = mouse.clientY;

    player.setX(mouseX);
    player.setY(mouseY);
}

setInterval(() => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    enemies.map((enemy) => {
        enemy.update(ctx, WIDTH, HEIGHT);
        const isColliding = collisions.testCollisionEntity(player,enemy);
        if (isColliding) {
            const currentHp = player.getHp();
            player.setHp(currentHp - 1);
            if (player.hp <= 0) {
                const timeSurvived = Date.now() - timeWhenGameStarted;
                timeWhenGameStarted = Date.now();
                console.log(`You lost! You survived for ${timeSurvived} ms`);
                player.setHp(10);
            }
        }
    })
    player.update(ctx, WIDTH, HEIGHT);
}, 40);