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















// Ejemplo de generación de un mapa aleatorio utilizando Cellular Automata
// (puedes encontrar implementaciones más avanzadas en la documentación de Phaser)

// Crea una matriz para representar el mapa
let map = [];
for (let y = 0; y < mapHeight; y++) {
    map[y] = [];
    for (let x = 0; x < mapWidth; x++) {
        // Genera valores aleatorios para cada celda
        map[y][x] = Math.random() < 0.5 ? 1 : 0; // 1 representa piso, 0 representa pared
    }
}

// Renderiza el mapa en la escena del juego
for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
        if (map[y][x] === 1) {
            // Renderiza un piso
            this.add.image(x * tileSize, y * tileSize, 'floor').setOrigin(0);
        } else {
            // Renderiza una pared
            this.add.image(x * tileSize, y * tileSize, 'wall').setOrigin(0);
        }
    }
}





// Crea un sprite para representar al jugador
this.player = this.physics.add.sprite(startX, startY, 'player');

// Define controles de teclado para mover al jugador
this.cursors = this.input.keyboard.createCursorKeys();

// Actualiza la posición del jugador en función de los controles de teclado
update() {
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(speed);
    } else {
        this.player.setVelocityX(0);
    }
    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(speed);
    } else {
        this.player.setVelocityY(0);
    }
}





// Crea un grupo para los enemigos
this.enemies = this.physics.add.group();

// Crea un sprite para un enemigo
let enemy = this.enemies.create(x, y, 'enemy');

// Define un comportamiento para que los enemigos persigan al jugador
update() {
    this.enemies.getChildren().forEach(enemy => {
        let angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
        this.physics.velocityFromRotation(angle, enemySpeed, enemy.body.velocity);
    });
}




// Agrega un collider entre el jugador y los enemigos
this.physics.add.collider(this.player, this.enemies, this.playerEnemyCollision, null, this);

// Define la función para manejar la colisión entre el jugador y los enemigos
playerEnemyCollision(player, enemy) {
    // Reduce la salud del jugador cuando colisiona con un enemigo
    playerHealth -= enemyDamage;
    if (playerHealth <= 0) {
        // Game over
    }
}





// Crea una barra de salud para el jugador
this.playerHealthBar = this.add.rectangle(x, y, playerHealth, 10, 0x00ff00);

// Crea un inventario para el jugador
this.inventory = [];

// Define una función para recoger objetos
collectItem(item) {
    this.inventory.push(item);
}




// Define una función para usar objetos del inventario
useItem(item) {
    // Implementa la lógica para usar el objeto
}






// Define una función para cambiar de nivel
changeLevel(level) {
    // Implementa la lógica para cargar el nuevo nivel
}






// Agrega texto para mostrar la salud del jugador
this.healthText = this.add.text(x, y, `Health: ${playerHealth}`, { fontSize: '16px', fill: '#ffffff' });



// Implementa lógica para verificar la condición de victoria
checkWinCondition() {
    if (playerHealth <= 0) {
        // Game over
    }
}

