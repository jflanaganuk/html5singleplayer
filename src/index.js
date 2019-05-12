import Player from './classes/player';

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

const enemy = new Player({
    x: 40,
    spdX: 20,
    y: 100,
    spdY: 10,
    name: 'E'
});

setInterval(() => {
    ctx.clearRect(0, 0, 500, 500);
    player.update(ctx, WIDTH, HEIGHT, message);
    enemy.update(ctx, WIDTH, HEIGHT, message);
}, 40);