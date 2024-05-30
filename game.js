// phaser/scenes/game-scene.js
var player;
var cursors;
var level;
var camera;

function preload ()
{
    this.load.image('player', 'assets/player.png');
    this.load.image('level', 'assets/level.png');
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();

    // Create the level
    level = this.add.tileSprite(0, 0, 2000, 1000, 'level');
    level.setOrigin(0);

    // Create the player
    player = this.physics.add.sprite(400, 300, 'player');

    // Set up camera
    camera = this.cameras.main;
    camera.setBounds(0, 0, 2000, 1000);
    camera.startFollow(player);
    camera.setZoom(1.5); // Ajustar el zoom para una vista más amplia

    // Posicionar la cámara detrás y ligeramente por encima del jugador
    camera.setFollowOffset(-200, -100);
}

function update ()
{
    // Player movement
    player.setVelocity(0);

    if (cursors.left.isDown)
    {
        player.setVelocityX(-200);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(200);
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-200);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(200);
    }
}
