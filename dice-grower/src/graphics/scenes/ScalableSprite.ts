import Phaser from 'phaser'

export default class ScalableSprite
{
	private image: Phaser.Physics.Arcade.Image

	get display()
	{
		return this.image
	}
	
	constructor(scene: Phaser.Scene, x: number, y: number, texture: string, scale: number)
	{
		this.image = scene.physics.add.sprite(x, y, texture).setInteractive();
		this.image.setScale(scale);
		// this.image.set;
        // this.image.setY(10);
		this.initialize()
	}

	private initialize()
	{
		// this.image.setVelocity(100, 200)
        // this.image.setBounce(1, 1)
		this.image.setCollideWorldBounds(true)
	}

	public increaseHeight(increase: number) {
		const currentScale: number = this.display.displayHeight;
		this.image.displayHeight = currentScale + increase;
	}

	get height(): number {
		return this.image.displayHeight;
	}
}