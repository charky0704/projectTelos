const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const player = {
    x: 100,
    y: 400,
    width: 40,
    height: 40,
    speed: 5,
    jumpPower: -12,
    velocityY: 0,
    onGround: false
};

const gravity = 0.6;

const ground = {
    x: 0,
    y: 480,
    width: canvas.width,
    height: 60
};

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;

    // Spaceでジャンプ
   if (event.code === "Space" && player.onGround) {
        player.velocityY = player.jumpPower;
        player.onGround = false;
    }
    if ((event.code === "Space" || event.key === "w") && player.onGround) {
    player.velocityY = player.jumpPower;
    player.onGround = false;
}
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function update() {
    // 左右移動
    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

    // 重力
    player.velocityY += gravity;
    player.y += player.velocityY;

    // 地面との当たり判定
    if (player.y + player.height >= ground.y) {
        player.y = ground.y - player.height;
        player.velocityY = 0;
        player.onGround = true;
    }

    // 画面の外に出ないようにする
    if (player.x < 0) {
        player.x = 0;
    }

    if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width;
    }
}

function draw() {
    // 背景
    ctx.fillStyle = "#050510";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 地面
    ctx.fillStyle = "#202040";
    ctx.fillRect(
        ground.x,
        ground.y,
        ground.width,
        ground.height
    );

    // プレイヤー
    ctx.fillStyle = "#00ffff";
    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}

function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();
