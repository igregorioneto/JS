import Phaser from 'phaser';

const config = {
    width: 600,
    height: 300,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    parent: "game-container",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 350 },
            debug: true,
        }
    },
    scene: []
}

const game = new Phaser.Game(config);