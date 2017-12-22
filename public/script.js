(function() {

var game = new Phaser.Game(1000, 400, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

// shit to put into JSON
var blockCoords = [{"x":800, "y":300},{"x":1000, "y":300},{"x":1400, "y":300},{"x":1400, "y":200},{"x":1700, "y":300},
                   {"x":1900, "y":300},{"x":1900, "y":200},{"x":2100, "y":300},{"x":2600, "y":300},{"x":2600, "y":200},
                   {"x":2700, "y":300},{"x":2700, "y":200},{"x":2900, "y":300},{"x":3000, "y":300},{"x":3000, "y":200},
                   {"x":3200, "y":300},{"x":3600, "y":300},{"x":3800, "y":300},{"x":3800, "y":200},{"x":3900, "y":300},
                   {"x":4300, "y":300},{"x":4300, "y":200},{"x":4400, "y":300},{"x":4600, "y":300},{"x":4800, "y":300},
                   {"x":4800, "y":200},{"x":9600, "y":300},{"x":9600, "y":200},{"x":10000, "y":300},{"x":10100, "y":300},
                   {"x":10200, "y":300},{"x":10400, "y":100},{"x":10400, "y":0},{"x":10600, "y":300},{"x":10600, "y":200},
                   {"x":10800, "y":0},{"x":10900, "y":0},{"x":11000, "y":0},{"x":11100, "y":0},{"x":11200, "y":100},
                   {"x":11200, "y":0},{"x":11800, "y":0},{"x":11900, "y":0},{"x":12000, "y":100},{"x":12000, "y":0},
                   {"x":12100, "y":100},{"x":12100, "y":0},{"x":12300, "y":300},{"x":12600, "y":0},{"x":12700, "y":100},
                   {"x":12700, "y":0},{"x":12900, "y":300},{"x":12900, "y":200},{"x":13000, "y":300},{"x":14700, "y":300},
                   {"x":14700, "y":200},{"x":14800, "y":300},{"x":14900, "y":300},{"x":15200, "y":300},{"x":15400, "y":100},
                   {"x":15400, "y":0},{"x":16200, "y":300},{"x":16200, "y":200},{"x":5000, "y":0},{"x":17200, "y":0},
                   {"x":17300, "y":0},{"x":17400, "y":100},{"x":17400, "y":0},{"x":17600, "y":300},{"x":17600, "y":200},
                   {"x":17800, "y":100},{"x":17800, "y":0},{"x":18000, "y":300},{"x":18000, "y":200},{"x":18200, "y":100},
                   {"x":18200, "y":0},{"x":18300, "y":0},{"x":18400, "y":0},{"x":18500, "y":0},{"x":18600, "y":100},
                   {"x":18600, "y":0},{"x":19200, "y":100},{"x":19200, "y":0},{"x":19600, "y":300},{"x":19600, "y":200}];

var blockTopCoords = [{"x":500, "y":300},{"x":800, "y":200},{"x":1000, "y":200},{"x":1100, "y":300},{"x":1400, "y":100},
                      {"x":1700, "y":200},{"x":1800, "y":300},{"x":1900, "y":100},{"x":2100, "y":200},{"x":2400, "y":300},
                      {"x":2600, "y":100},{"x":2700, "y":100},{"x":2800, "y":300},{"x":2900, "y":200},{"x":3000, "y":100},
                      {"x":3100, "y":300},{"x":3200, "y":200},{"x":3300, "y":300},{"x":3500, "y":300},{"x":3600, "y":200},
                      {"x":3800, "y":100},{"x":3900, "y":200},{"x":4200, "y":300},{"x":4300, "y":100},{"x":4400, "y":200},
                      {"x":4600, "y":200},{"x":4700, "y":300},{"x":4800, "y":100},{"x":5500, "y":300},{"x":5800, "y":300},
                      {"x":5900, "y":300},{"x":9600, "y":100},{"x":9700, "y":300},{"x":10600, "y":100},{"x":10700, "y":300},
                      {"x":10800, "y":300},{"x":10000, "y":200},{"x":10100, "y":200},{"x":10200, "y":200},{"x":10900, "y":300},
                      {"x":11000, "y":300},{"x":11400, "y":300},{"x":11500, "y":300},{"x":11600, "y":300},{"x":11700, "y":300},
                      {"x":11800, "y":300},{"x":12300, "y":200},{"x":12500, "y":300},{"x":12900, "y":100},{"x":13000, "y":200},
                      {"x":13200, "y":300},{"x":14500, "y":300},{"x":14700, "y":100},{"x":14800, "y":200},{"x":14900, "y":200},
                      {"x":15000, "y":300},{"x":15200, "y":200},{"x":15600, "y":300},{"x":15700, "y":300},{"x":15800, "y":300},
                      {"x":15900, "y":300},{"x":16000, "y":300},{"x":16100, "y":300},{"x":16200, "y":100},{"x":16600, "y":300},
                      {"x":16900, "y":300},{"x":17100, "y":300},{"x":6500, "y":300},{"x":6700, "y":300},{"x":6900, "y":300},
                      {"x":17200, "y":300},{"x":17600, "y":100},{"x":18000, "y":100},{"x":18400, "y":300},{"x":19500, "y":300},
                      {"x":19600, "y":100}]

var blockBotCoords = [{"x":10000, "y":0},{"x":10100, "y":0},{"x":10200, "y":0},{"x":10300, "y":0},{"x":10400, "y":200},
                      {"x":10800, "y":100},{"x":10900, "y":100},{"x":11000, "y":100},{"x":11100, "y":100},{"x":11200, "y":200},
                      {"x":11800, "y":100},{"x":11900, "y":100},{"x":12000, "y":200},{"x":12100, "y":200},{"x":12600, "y":100},
                      {"x":12700, "y":200},{"x":14900, "y":0},{"x":15000, "y":0},{"x":15200, "y":0},{"x":15400, "y":200},
                      {"x":1200, "y":0},{"x":5000, "y":100},{"x":2400, "y":0},{"x":3400, "y":0},{"x":4000, "y":0},{"x":4600, "y":0},
                      {"x":17200, "y":100},{"x":17300, "y":100},{"x":17400, "y":200},{"x":18200, "y":200},{"x":18300, "y":100},
                      {"x":18400, "y":100},{"x":18500, "y":100},{"x":18600, "y":200},{"x":17800, "y":200},{"x":19200, "y":200}]

var singleBlockCoords = [{"x":11400, "y":100},{"x":11500, "y":100},{"x":11600, "y":100},{"x":11700, "y":100},{"x":15600, "y":100},
                         {"x":15700, "y":100},{"x":15800, "y":100},{"x":15900, "y":100},{"x":16000, "y":100},{"x":16100, "y":100},
                         {"x":18700, "y":200},{"x":18800, "y":200},{"x":18900, "y":200},{"x":19000, "y":200},
                         {"x":19100, "y":200},{"x":19300, "y":200},{"x":19500, "y":100}]

var staticMissileCoords = [{"x":600, "y":300},{"x":800, "y":100},{"x":900, "y":300},{"x":1100, "y":200},{"x":1400, "y":0},
                           {"x":1700, "y":100},{"x":2900, "y":100},{"x":3200, "y":100},{"x":3900, "y":100},{"x":4000, "y":300},
                           {"x":4300, "y":0},{"x":5400, "y":300},{"x":5700, "y":300},{"x":6000, "y":300},{"x":7000, "y":300},
                           {"x":12200, "y":300},{"x":16400, "y":300},{"x":16500, "y":300},{"x":16700, "y":300}];

var missileCoords = [{"x":1600, "y":300},{"x":1800, "y":200},{"x":2100, "y":100},{"x":2200, "y":300},{"x":2300, "y":300},
                     {"x":2500, "y":300},{"x":2800, "y":200},{"x":3300, "y":200},{"x":3600, "y":100},{"x":3700, "y":300},
                     {"x":4100, "y":300},{"x":4500, "y":300},{"x":9700, "y":200},{"x":12400, "y":300},{"x":12500, "y":200},
                     {"x":13100, "y":300},{"x":13200, "y":200},{"x":14500, "y":200},{"x":14600, "y":300},{"x":15100, "y":300},
                     {"x":15300, "y":300},{"x":16300, "y":300},{"x":16600, "y":200},{"x":17700, "y":300},{"x":18100, "y":300},
                     {"x":19700, "y":300}];

var ufoCoords = [{"x":7400, "y":200},{"x":7600, "y":100},{"x":7800, "y":300},{"x":8000, "y":0},{"x":8200, "y":300},{"x":8400, "y":100},
                 {"x":8600, "y":0},{"x":8800, "y":300},{"x":9000, "y":100},{"x":9200, "y":300},{"x":9400, "y":0},{"x":7200, "y":0},
                 {"x":7900, "y":100},{"x":9300, "y":200},{"x":9500, "y":300},{"x":13700, "y":200},{"x":13900, "y":100},{"x":14100, "y":300},
                 {"x":14200, "y":200},{"x":14200, "y":0}];

var tankCoords = [{"x":1200, "y":300},{"x":1500, "y":300},{"x":1900, "y":0},{"x":2000, "y":300},{"x":2400, "y":200},{"x":2600, "y":0},
                  {"x":2700, "y":0},{"x":3100, "y":200},{"x":3400, "y":300},{"x":3800, "y":0},{"x":4200, "y":200},{"x":4400, "y":100},
                  {"x":4700, "y":200},{"x":4900, "y":300},{"x":5200, "y":300},{"x":5600, "y":300},{"x":6300, "y":300},{"x":6800, "y":300},
                  {"x":9800, "y":300},{"x":9900, "y":300},{"x":10500, "y":300},{"x":10600, "y":0},{"x":10800, "y":200},{"x":10900, "y":200},
                  {"x":11000, "y":200},{"x":11100, "y":300},{"x":11300, "y":300},{"x":11500, "y":200},{"x":11500, "y":0},{"x":11600, "y":200},
                  {"x":11600, "y":0},{"x":11700, "y":0},{"x":11900, "y":300},{"x":12300, "y":100},{"x":12700, "y":300},{"x":12900, "y":0},
                  {"x":13000, "y":100},{"x":13300, "y":300},{"x":14400, "y":300},{"x":14700, "y":0},{"x":14900, "y":100},{"x":15200, "y":100},
                  {"x":15500, "y":300},{"x":15900, "y":0},{"x":16000, "y":200},{"x":16100, "y":200},{"x":16200, "y":0},{"x":16800, "y":300},
                  {"x":16900, "y":200},{"x":17300, "y":300},{"x":17500, "y":300},{"x":17600, "y":0},{"x":17800, "y":300},{"x":18000, "y":0},
                  {"x":18200, "y":300},{"x":18400, "y":200},{"x":18600, "y":300},{"x":19300, "y":100},{"x":19500, "y":200},{"x":19600, "y":0}];

var starCoords = [{"x":5700, "y":100},{"x":5800, "y":200},{"x":5800, "y":0},{"x":5900, "y":200},{"x":5900, "y":100},
                  {"x":6000, "y":0},{"x":6100, "y":100},{"x":6100, "y":0},{"x":6300, "y":200},{"x":6400, "y":200},{"x":6500, "y":100},
                  {"x":6600, "y":0},{"x":6700, "y":200},{"x":6800, "y":200},{"x":6800, "y":0},{"x":6900, "y":200},{"x":7000, "y":100},
                  {"x":7100, "y":200},{"x":7200, "y":100}];

var shieldCoords = [
                        {"x":20300, "y":300},{"x":20300, "y":200},{"x":20300, "y":100},{"x":20300, "y":0},
                        {"x":20400, "y":300},{"x":20400, "y":200},{"x":20400, "y":100},{"x":20400, "y":0},
                        {"x":20500, "y":300},{"x":20500, "y":200},{"x":20500, "y":100},{"x":20500, "y":0},
                        {"x":20600, "y":300},{"x":20600, "y":200},{"x":20600, "y":100},{"x":20600, "y":0},
                        {"x":20700, "y":300},{"x":20700, "y":200},{"x":20700, "y":100},{"x":20700, "y":0},
                        {"x":20300, "y":300},{"x":20300, "y":200},{"x":20300, "y":100},{"x":20300, "y":0}
                    ];

var blasterCoords = [{"x":21100, "y":100},{"x":21200, "y":100},{"x":21200, "y":200},{"x":21300, "y":200},{"x":21400, "y":200},
                     {"x":21400, "y":0},{"x":21500, "y":0},{"x":21600, "y":300},{"x":21600, "y":100},{"x":21600, "y":0},
                     {"x":21700, "y":300},{"x":21800, "y":300},{"x":21900, "y":300},{"x":21900, "y":200},{"x":22000, "y":200},
                     {"x":22000, "y":0},{"x":22100, "y":0},{"x":22200, "y":200},{"x":22200, "y":100},{"x":22200, "y":0},
                     {"x":22300, "y":200},{"x":22500, "y":300},{"x":22500, "y":200},{"x":22500, "y":100},{"x":22600, "y":200},
                     {"x":22700, "y":300},{"x":22800, "y":100},{"x":22800, "y":0},{"x":22900, "y":200},{"x":23000, "y":200},
                     {"x":23100, "y":200},{"x":23300, "y":300},{"x":23300, "y":200},{"x":23300, "y":0},{"x":23400, "y":0},
                     {"x":23500, "y":100},{"x":23600, "y":200},{"x":23700, "y":200},{"x":23900, "y":300},{"x":24000, "y":200},
                     {"x":24100, "y":100},{"x":24300, "y":200},{"x":24300, "y":100},{"x":24300, "y":0},{"x":24500, "y":300},
                     {"x":24500, "y":200},{"x":24500, "y":100},{"x":24600, "y":200},{"x":24700, "y":0},{"x":24800, "y":300},
                     {"x":24800, "y":200},{"x":24900, "y":0},{"x":25000, "y":200},{"x":25000, "y":100},{"x":25000, "y":0}];
//////

function preload() {
    game.load.image('block', './assets/trash.png');
    game.load.image('blockT', './assets/trashtop.png');
    game.load.image('blockB', './assets/trashbot.png');
    game.load.image('blockS', './assets/trashsingle.png');
    game.load.spritesheet('ship', './assets/sprites/ship_sprites.png', 100, 100);
    game.load.image('shipwall', './assets/hitbox.png');
    game.load.image('bullet', './assets/blank.png');
    game.load.image('bulletSprite', './assets/bullet2.png');
    game.load.image('floor', './assets/trashfloor.png');
    game.load.image('staticMissile', './assets/chrisy.png');
    game.load.image('missile', './assets/chrisy.png');
    game.load.image('ufo', './assets/nicky.png');
    game.load.spritesheet('boss', './assets/sprites/jarjar.png', 200, 400);
    game.load.image('tank', './assets/ship2.png');
    game.load.image('star', './assets/star2.png');
    game.load.image('shield', './assets/shield2.png');
    game.load.image('bossWep', './assets/howwuude.png');
}

// variables
var bossHealth = 25;
var firing = false;
var playing = false;
var ship;
var boss;
var bossman;
var shipwall;
var shields;
var stars;
var tanks;
var weapon;
var weapon2;
var blasters;
var floortiles;
var ufos;
var bulletSprite;
var fireButton;
var staticMissiles;
var blocks;
var move = false;
//////

function create() {
    game.stage.backgroundColor = '#BC3DF4'
    // physics

    game.physics.startSystem(Phaser.Physics.ARCADE);
    //////

    // score
    //////

    // map and decorative

    // - floortiles
    floortiles = game.add.group();
    for (var i = 0; i < 210; i++) {
        floortiles.create(i * 100, 300, 'floor');
    }
    //////

    // blocks and foes

    // - boss
    boss = game.add.group();
    boss.enableBody = true;
    bossman = boss.create(20800, 0, 'boss');
    bossman.animations.add('jarjar', [0,1], 4, true);
    ////

    // - boss shields
    shields = game.add.group();
    shields.enableBody = true;
    shieldCoords.forEach(function(coord) {
        var shield = shields.create(coord.x, coord.y, 'shield');
    });
    ////

    // - boss wep
    blasters = game.add.group();
    blasterCoords.forEach(function(coord) {
        var blaster = blasters.create(coord.x, coord.y, 'bossWep');
    })
    blasters.children.forEach(function(child) {
        game.physics.arcade.enable(child);
    })
    ////

    // - blocks
    blocks = game.add.group();
    blocks.enableBody = true;
    blockCoords.forEach(function(coord) {
        var block = blocks.create(coord.x, coord.y, 'block');
    })

    blocksT = game.add.group();
    blocksT.enableBody = true;
    blockTopCoords.forEach(function(coord) {
        var block = blocks.create(coord.x, coord.y, 'blockT');
    })

    blocksB = game.add.group();
    blocksB.enableBody = true;
    blockBotCoords.forEach(function(coord) {
        var block = blocks.create(coord.x, coord.y, 'blockB');
    })

    blocksS = game.add.group();
    blocksS.enableBody = true;
    singleBlockCoords.forEach(function(coord) {
        var block = blocks.create(coord.x, coord.y, 'blockS');
    })
    ////

    // - stars
    stars = game.add.group();
    stars.enableBody = true;
    starCoords.forEach(function(coord) {
        var star = stars.create(coord.x, coord.y, 'star');
    })
    ////

    // - oil tanks
    tanks = game.add.group();
    tanks.enableBody = true;
    tankCoords.forEach(function(coord) {
        var tank = tanks.create(coord.x, coord.y, 'tank');
    });
    // tanks.callAll('animations.add', 'animations', 'minion', [0,1], 10, true);
    ////

    // - missile (non moving)
    staticMissiles = game.add.group();
    staticMissiles.enableBody = true;
    staticMissileCoords.forEach(function(coord) {
        var staticMissile = staticMissiles.create(coord.x, coord.y, 'staticMissile');
    });
    ////

    // - missile (moving)
    missiles = game.add.group();
    missiles.enableBody = true;
    missileCoords.forEach(function(coord) {
        var missile = missiles.create(coord.x, coord.y, 'missile');
    });
    missiles.children.forEach(function(child) {
        game.physics.arcade.enable(child);
        child.launchCode = Math.floor(Math.random() * 4) + 1;
    });
    ////

    // - flyer
    ufos = game.add.group();
    ufos.enableBody = true;
    ufoCoords.forEach(function(coord) {
        var ufo = ufos.create(coord.x, coord.y, 'ufo');
    });
    ufos.children.forEach(function(child) {
        child.ufoMov = Math.floor(Math.random() * 2) + 1;
    })
    //////

    // ship

    ship = game.add.sprite(0, 0, 'ship');
    ship.animations.add('fly', [0,1,2,3], 8, true)
    shipwall = game.add.sprite(0, 0, 'shipwall');
    shipwall.enableBody = true;
    ship.enableBody = true;
    game.physics.arcade.enable(ship);
    game.physics.arcade.enable(shipwall);
    //////

    // weapons

    // - horizontal
    weapon = game.add.weapon(1, 'bullet');
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    weapon.bulletDistance = 8000;
    weapon.fireAngle = 0;
    weapon.bulletSpeed = 1000;
    weapon.bulletLifespan = 1050;
    weapon.trackSprite(shipwall, 100, 50);
    // - horizontal sprite
    bulletSprite = game.add.sprite(-100, 0, 'bulletSprite')
    ////

    // - vertical
    weapon2 = game.add.weapon(1, 'bullet');
    weapon2.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    weapon2.fireAngle = 90;
    weapon2.bulletSpeed = 350;
    weapon2.bulletLifespan = 900;
    weapon2.trackSprite(shipwall, 100, 50);
    // - vertical sprite
    bulletSprite2 = game.add.sprite(-100, 0, 'bulletSprite')
    ////
    //////

    // cursor controls

    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    //////
}

//functions for update

function hitBlock(ship, block) {
    cloneAndPlay($('#dodge-bullets')[0]);
    death();

}

function bulletHitBlock(bullet, block) {
    bullet.kill();
}

function hitEnemy(bullet, enemy) {
    cloneAndPlay($('#dodge-bullets')[0]);
    death();
}

function cloneAndPlay(audioNode) {
    var clone = audioNode.cloneNode(true);
    clone.play();
}

function shotEnemy(bullet, enemy) {
    if (enemy.key == 'staticMissile' || enemy.key == 'missile') {
        cloneAndPlay($('#miss-kill')[0]);
        changeScore(10);
        enemy.kill();
        bullet.kill();
    }
    if (enemy.key == 'ufo') {
        cloneAndPlay($('#ufo-kill')[0]);
        changeScore(20);
        enemy.kill();
        bullet.kill();
    }
    if (enemy.key == 'tank') {
        cloneAndPlay($('#tank-kill')[0]);
        changeScore(5);
        enemy.kill();
        bullet.kill();
    }
    if (enemy.key == 'star') {
        changeScore(-5);
        bullet.kill();
    }
    if (enemy.key == 'boss') {
        if (bossHealth == 0) {
            cloneAndPlay($('#going-home')[0]);
            changeScore(200);
            win();
            enemy.kill();
            bullet.kill();
        } else {
            cloneAndPlay($('#how-wuude')[0]);
            bullet.kill();
            bossHealth -= 1;
        }
    }
    if (enemy.key == 'shield') {
        changeScore(30);
        enemy.kill();
        bullet.kill();
    }
}

//////

var notAnimated = false;

function update() {
    // game is running

    if (playing) {
            ship.animations.play('fly');
            bossman.animations.play('jarjar');
            if (shipwall.position.x < 20100) {
                // ship moving
                shipwall.body.velocity.x = 150;
                if (shipwall.position.x >= ship.position.x + 100) {
                    ship.position.x += 100;
                    game.camera.bounds.x += 100;
                }
                //////
            } else {
                shipwall.body.velocity.x = 0;
            }

            // controls

            // - ship movement
            let shipPos = ship.position.y
            if (cursors.up.isUp || cursors.down.isUp) {
                if (cursors.up.justDown) {
                    if (shipPos == 100) {
                        shipPos = 0;
                    } else if (shipPos == 200) {
                        shipPos = 100;
                    } else if (shipPos == 300) {
                        shipPos = 200;
                    } else {
                        shipPos = 0;
                    }
                    ship.position.y = shipPos;
                    shipwall.position.y = shipPos;
                } else if (cursors.down.justDown) {
                    if (shipPos == 0 ) {
                        shipPos = 100;
                    } else if (shipPos == 100) {
                        shipPos = 200;
                    } else if (shipPos == 200) {
                        shipPos = 300;
                    } else {
                        shipPos = 300;
                    }
                    ship.position.y = shipPos;
                    shipwall.position.y = shipPos;
                }
            }
            ////

            // - weapon fire
            if (fireButton.isDown && !firing) {
                weapon.fire();
                weapon2.fire();
                changeScore(-2);
                firing = true;
            }
            if (fireButton.isUp) {
                firing = false;
            }
            ////
            //////

            // bullet is travelling

            // - weapon 1
            if (weapon.bullets.children[0].visible) {
                if (weapon.bullets.children[0].position.x > ship.position.x + 100 && weapon.bullets.children[0].position.x < ship.position.x + 200) {
                    bulletSprite.position.x = ship.position.x + 100;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 200 && weapon.bullets.children[0].position.x < ship.position.x + 300) {
                    bulletSprite.position.x = ship.position.x + 200;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 300 && weapon.bullets.children[0].position.x < ship.position.x + 400) {
                    bulletSprite.position.x = ship.position.x + 300;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 400 && weapon.bullets.children[0].position.x < ship.position.x + 500) {
                    bulletSprite.position.x = ship.position.x + 400;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 500 && weapon.bullets.children[0].position.x < ship.position.x + 600) {
                    bulletSprite.position.x = ship.position.x + 500;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 600 && weapon.bullets.children[0].position.x < ship.position.x + 700) {
                    bulletSprite.position.x = ship.position.x + 600;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 700 && weapon.bullets.children[0].position.x < ship.position.x + 800) {
                    bulletSprite.position.x = ship.position.x + 700;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 800 && weapon.bullets.children[0].position.x < ship.position.x + 900) {
                    bulletSprite.position.x = ship.position.x + 800;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 900 && weapon.bullets.children[0].position.x < ship.position.x + 1000) {
                    bulletSprite.position.x = ship.position.x + 900;
                } else if (weapon.bullets.children[0].position.x > ship.position.x + 1000) {
                    bulletSprite.position.x = ship.position.x -100;
                } else {
                    bulletSprite.position.x = ship.position.x -100;
                }
                bulletSprite.position.y = weapon.bullets.children[0].position.y - 50;
            }
            if (!weapon.bullets.children[0].visible) {
                bulletSprite.position.x = ship.position.x -100;
            }
            if (weapon.bullets.children[0].position.x >= weapon.fireFrom.x + 800) {
                weapon.bullets.children[0].kill();
            }
            ////

            // - weapon 2
            if (weapon2.bullets.children[0].visible) {
                weapon2.bullets.children[0].position.x = ship.position.x + 150;
                if (weapon2.bullets.children[0].position.y > 0 && weapon2.bullets.children[0].position.y < 100) {
                    bulletSprite2.position.x = weapon2.bullets.children[0].position.x - 50;
                    bulletSprite2.position.y = 0;
                } else if (weapon2.bullets.children[0].position.y > 100 && weapon2.bullets.children[0].position.y < 200) {
                    bulletSprite2.position.x = weapon2.bullets.children[0].position.x - 50;
                    bulletSprite2.position.y = 100;
                } else if (weapon2.bullets.children[0].position.y > 200 && weapon2.bullets.children[0].position.y < 300) {
                    bulletSprite2.position.x = weapon2.bullets.children[0].position.x - 50;
                    bulletSprite2.position.y = 200;
                } else if (weapon2.bullets.children[0].position.y > 300) {
                    bulletSprite2.position.x = weapon2.bullets.children[0].position.x - 50;
                    bulletSprite2.position.y = 300;
                }
            } else {
                bulletSprite2.position.x = ship.position.x -100;
                bulletSprite2.position.y = -100;
            }
            ////
            //////

            // missiles firing
            missiles.children.forEach(function(child) {
                if (shipwall.position.x + 500 == child.x && child.launchCode == 4) {
                    child.position.y -= 100;
                } else if (shipwall.position.x + 400 == child.x && (child.launchCode == 3 || child.launchCode == 4)) {
                    child.position.y -= 100;
                } else if (shipwall.position.x + 300 == child.x && (child.launchCode == 2 || child.launchCode == 4 || child.launchCode == 3)) {
                    child.position.y -= 100;
                } else if (shipwall.position.x + 200 == child.x && (child.launchCode == 1 || child.launchCode == 4 || child.launchCode == 3 || child.launchCode == 2)) {
                    child.position.y -= 100;
                } else if (shipwall.position.x + 100 == child.x && (child.launchCode == 1 || child.launchCode == 4 || child.launchCode == 3 || child.launchCode == 2)) {
                    child.position.y -= 100;
                }
            });
            ////

            // ufo movement
            ufos.children.forEach(function(child) {
                if (shipwall.position.x + 900 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    }
                } else if (shipwall.position.x + 850 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    }
                } else if (shipwall.position.x + 800 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    }
                } else if (shipwall.position.x + 750 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    }
                } else if (shipwall.position.x + 700 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    }
                } else if (shipwall.position.x + 650 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    }
                } if (shipwall.position.x + 600 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    }
                } else if (shipwall.position.x + 550 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    }
                } else if (shipwall.position.x + 500 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    }
                } else if (shipwall.position.x + 450 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    }
                } else if (shipwall.position.x + 400 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    }
                } else if (shipwall.position.x + 350 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    }
                } else if (shipwall.position.x + 300 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    }
                } else if (shipwall.position.x + 250 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    }
                } else if (shipwall.position.x + 200 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                        }
                    }
                } else if (shipwall.position.x + 150 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                            child.x -= 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y -= 100;
                            child.x -= 100;
                        }
                    }
                } else if (shipwall.position.x + 100 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    }
                } else if (shipwall.position.x + 50 == child.x) {
                    if (child.ufoMov == 1) {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    } else {
                        if (child.y == 0) {
                            child.y += 100;
                        } else if (child.y == 300) {
                            child.y -= 100;
                        } else {
                            child.y += 100;
                        }
                    }
                } else if (shipwall.position.x - 50 == child.x) {
                    child.kill();
                }
            });
            ////

            // - star movement
            stars.children.forEach(function(child) {
                if (shipwall.position.x + 900 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 850 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 800 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 750 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 700 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 650 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 600 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 550 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 500 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 450 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 400 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 350 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 300 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 250 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 200 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x + 150 == child.x) {
                    child.x -= 100;
                } else if (shipwall.position.x == child.x) {
                    child.kill();
                }
            });
            ////

            // - boss
            if (shipwall.position.x >= 20100) {
                blasters.children.forEach(function(child) {
                    child.body.velocity.x = -180;
                    if (child.position.x <= 17200) {
                        child.position.x += 3900;
                    }
                });
            }
            ////

            // collision and hits

            game.physics.arcade.overlap(shipwall, blocks, hitBlock, null, this);
            game.physics.arcade.overlap(shipwall, blocksT, hitBlock, null, this);
            game.physics.arcade.overlap(shipwall, blocksB, hitBlock, null, this);
            game.physics.arcade.overlap(shipwall, blocksS, hitBlock, null, this);
            game.physics.arcade.overlap(shipwall, staticMissiles, hitEnemy, null, this);
            game.physics.arcade.overlap(shipwall, missiles, hitEnemy, null, this);
            game.physics.arcade.overlap(shipwall, ufos, hitEnemy, null, this);
            game.physics.arcade.overlap(shipwall, tanks, hitEnemy, null, this);
            game.physics.arcade.overlap(ship, blasters, hitEnemy, null, this);
            game.physics.arcade.overlap(weapon.bullets, blocks, bulletHitBlock, null, this);
            game.physics.arcade.overlap(weapon2.bullets, blocks, bulletHitBlock, null, this);
            game.physics.arcade.overlap(weapon.bullets, staticMissiles, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon2.bullets, staticMissiles, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon.bullets, missiles, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon2.bullets, missiles, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon.bullets, ufos, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon2.bullets, ufos, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon.bullets, tanks, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon2.bullets, tanks, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon.bullets, stars, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon2.bullets, stars, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon.bullets, boss, shotEnemy, null, this);
            game.physics.arcade.overlap(weapon.bullets, shields, shotEnemy, null, this);
            //////

            //////

            if (shipwall.position.x == 1100 || shipwall.position.x == 1900 || shipwall.position.x == 2400 || shipwall.position.x == 4800 || shipwall.position.x == 10300 || shipwall.position.x == 11400 || shipwall.position.x == 15400) {
                cloneAndPlay($('#tank-int')[0]);
            }

            if (shipwall.position.x == 400 || shipwall.position.x == 1500 || shipwall.position.x == 2800 || shipwall.position.x == 5900 || shipwall.position.x == 12000 || shipwall.position.x == 16200) {
                cloneAndPlay($('#miss-int')[0]);
            }

            if (shipwall.position.x == 6900 || shipwall.position.x == 8200 || shipwall.position.x == 13400 || shipwall.position.x == 14200) {
                cloneAndPlay($('#ufo-int')[0]);
            }

            if (shipwall.position.x == 19900) {
                cloneAndPlay($('#oh-no')[0]);
            }

            // game is not running

    } else {
        playing = false;
    }
    //////
}

function render() {
    weapon.debug();
}

/// javascript for page
var scoreText = $('#score-text');
var score = 0;

$('#sean')[0].play();

$.get({
    url: '/getTop20Scores',
    success: function(data){
        data.forEach(function(x) {
            var y = '<h5>' + x.username + ': ' + x.score + '</h5>';
            $('#top-scores').append(y);
        });
    }
});

var titleScreen = $('#title-screen');
titleScreen.on('click', function() {
    titleScreen.css('display', 'none');
    playing = true;
    $('#sean')[0].pause();
    $('#sean')[0].currentTime = 0;
    $('#ca-plan')[0].play();
})

var submitScore = $('#enter-score');

function win() {
    $('#ca-plan')[0].pause();
    $('#ca-plan')[0].currentTime = 0;
    $('#victory-screen').css('display', 'flex').on('click', function() {
        $('#victory-screen').css('display', 'none');
        death();
    });
    playing = false;
}

function death() {

    $('#ca-plan')[0].pause();
    $('#ca-plan')[0].currentTime = 0;

    $('#sean')[0].play();

    shipwall.body.velocity.x = 0;
    playing = false;
    bossHealth = 25;
    ship.position.x = 0;
    ship.position.y = 0;
    shipwall.position.x = 0;
    shipwall.position.y = 0;
    game.camera.bounds.x = 0;

    bossman.kill();

    shields.children.forEach(function(x) {
        x.kill();
    });

    stars.children.forEach(function(x) {
        x.kill();
    });

    missiles.children.forEach(function(x) {
        x.kill();
    });

    staticMissiles.children.forEach(function(x) {
        x.kill();
    });

    tanks.children.forEach(function(x) {
        x.kill();
    });

    blasters.children.forEach(function(x) {
        x.kill();
    });

    ufos.children.forEach(function(x) {
        x.kill();
    });

    submitScore.css('display', 'flex');
    $('#enter-score input').show();
    $('#enter-score h4').show();
    $('#enter-score h2').text('well done son');

    $('#enter-score h4').on('mousedown', function() {
        if (!$('#enter-score input').val() || $('#enter-score input').val().trim() == "") {
            $('#enter-score h5').show();
        } else {
            var username = $('#enter-score input').val();
            $.post('/submit', {username: username, score: score}).done(function(data) {
                if  (data.success) {
                    $.get({
                        url: '/getTop20Scores',
                        success: function(data){
                            $('#top-scores').empty();
                            data.forEach(function(x) {
                                var y = '<h5>' + x.username + ': ' + x.score + '</h5>';
                                $('#top-scores').append(y);
                            });
                        }
                    });
                }
            })
            $('#enter-score input').hide();
            $('#enter-score h4').hide();
            $('#enter-score h5').hide();
            $('#enter-score h2').text(username + ': ' + score);
        }
    });

    var yourScore = $('#enter-score h3');
    yourScore.text(score);
}

$('#enter-score p').on('click', function() {

    $('#sean')[0].pause();
    $('#sean')[0].currentTime = 0;

    $('#ca-plan')[0].play();

    $('#enter-score h4').off('mousedown');

    var bossman = boss.create(20800, 0, 'boss');
    bossman.animations.add('jarjar', [0,1], 4, true);

    shieldCoords.forEach(function(coord) {
        var shield = shields.create(coord.x, coord.y, 'shield');
    });

    blasterCoords.forEach(function(coord) {
        var blaster = blasters.create(coord.x, coord.y, 'bossWep');
    });
    blasters.children.forEach(function(child) {
        game.physics.arcade.enable(child);
    });

    starCoords.forEach(function(coord) {
        var star = stars.create(coord.x, coord.y, 'star');
    });

    tankCoords.forEach(function(coord) {
        var tank = tanks.create(coord.x, coord.y, 'tank');
    });

    staticMissileCoords.forEach(function(coord) {
        var staticMissile = staticMissiles.create(coord.x, coord.y, 'staticMissile');
    });

    missileCoords.forEach(function(coord) {
        var missile = missiles.create(coord.x, coord.y, 'missile');
    });
    missiles.children.forEach(function(child) {
        game.physics.arcade.enable(child);
        child.launchCode = Math.floor(Math.random() * 4) + 1;
    });

    ufoCoords.forEach(function(coord) {
        var ufo = ufos.create(coord.x, coord.y, 'ufo');
    });
    ufos.children.forEach(function(child) {
        child.ufoMov = Math.floor(Math.random() * 2) + 1;
    });

    submitScore.hide();
    score = 0;
    scoreText.text(score);

    playing = true;

})

function changeScore(val) {
    score += val;
    scoreText.text(score);
}

}());
