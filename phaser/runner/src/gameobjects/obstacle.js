import Phaser from 'phaser';

class Obstacle extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y) {
        super(scene, x, y, 32, 32, 0xff0000);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        const alpha = 1 / Phaser.Math.Between(1, 3);
        this.setScale(alpha);

        this.init();
    }

    init() {
        this.scene.tweens.add({
            targets: this,
            x: { from: 820, to: -100 },
            duration: 2000,
            onComplete: () => {
                this.destroy();
            }
        })
    }
}

export default Obstacle;