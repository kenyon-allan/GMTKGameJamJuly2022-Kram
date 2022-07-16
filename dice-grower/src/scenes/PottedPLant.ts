import Phaser from 'phaser'
import PlantModel from '../models/PlantModel'

export default class PottedPLant
{
	private image: Phaser.Physics.Arcade.Image
	private plant: PlantModel;

	get display()
	{
		return this.image
	}
	
	constructor(scene: Phaser.Scene, x: number, y: number, texture: string, plant: PlantModel)
	{
		this.image = scene.physics.add.image(x, y, texture)
		this.plant = plant;
		this.image.setScale(2);
		this.initialize()
	}

	private initialize()
	{
		// this.image.setVelocity(100, 200)
        // this.image.setBounce(1, 1)
		this.image.setCollideWorldBounds(true)
	}
}