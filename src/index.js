import Player from './classes/player';
import Enemy from './classes/enemy';

import PlayerList from './data/playerList.json';
import EnemyList from './data/enemyList.json';

const ctx = document.getElementById('ctx').getContext('2d');
ctx.font = '30px Arial';

const HEIGHT = 500;
const WIDTH = 500;

const message = 'Bouncing';

const player = new Player(PlayerList);

const enemyList = EnemyList;

const enemies = enemyList.map((enemy) => {
    return new Enemy(enemy);
});

setInterval(() => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    player.update(ctx, WIDTH, HEIGHT, message);
    enemies.map((enemy) => {
        enemy.update(ctx, WIDTH, HEIGHT, message);
    })
}, 40);