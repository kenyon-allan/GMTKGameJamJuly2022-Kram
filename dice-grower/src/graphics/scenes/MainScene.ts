import { ImageNames } from "../ImageNames";

 export default class MainScene extends Phaser.Scene {
    constructor()
	{
		super('main'); //unique on app-level
		
	}

	//greenhouse section
		//potted plants: pots + plants (3-8 pots arranged in 2x4 grid)
		//fruit to seed (machine?)
		//seed storage

	//storefront section
		//register
		//customers with want bubbles
			//drag and drop to complete orders
		//

	preload() {
		//this.load.setBaseURL('/') //todo something

        this.load.image(ImageNames.STEM, 'assets/stem.png')
	}

	create() {
		this.add.image(400,300,ImageNames.STEM);
	}

 }