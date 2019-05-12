import Player from './classes/player';
import Enemy from './classes/enemy';

const ctx = document.getElementById('ctx').getContext('2d');
ctx.font = '30px Arial';

const HEIGHT = 500;
const WIDTH = 500;

const message = 'Bouncing';

const player = new Player({
    x: 50,
    spdX: 30,
    y: 40,
    spdY: 5,
    name: 'P'
});

const enemyList = [
    {
        x: 40,
        spdX: 20,
        y: 100,
        spdY: 10,
        name: 'E'
    },
    {
        x: 300,
        spdX: -20,
        y: 150,
        spdY: 9,
        name: 'e'
    },
    {
        x: 20,
        spdX: -5,
        y: 20,
        spdY: -2,
        name: 'B'
    }
];

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