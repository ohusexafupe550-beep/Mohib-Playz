const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 150, width: 30, height: 30, dy: 0, jumping: false };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !player.jumping) {
        player.dy = -15;
        player.jumping = true;
    }
});

function update() {
    player.dy += 0.8; // Gravity
    player.y += player.dy;
    if (player.y > 150) { player.y = 150; player.jumping = false; }
    draw();
    requestAnimationFrame(update);
}
update();
