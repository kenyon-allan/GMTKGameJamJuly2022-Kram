import PlantModel from "../../models/PlantModel";
import { ImageNames } from "../ImageNames";
import ScalableSprite from "./ScalableSprite";

 export default class MainScene extends Phaser.Scene {
	private plants: PlantModel[] = [];
	private text: any;
	private money: number = 0;
	private moneyText: any;
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
		this.load.image(ImageNames.POT, 'assets/plant_pot.png')
		this.load.image(ImageNames.DIE, 'assets/dee_six.png')
		this.load.image(ImageNames.BUD, 'assets/bud.png')
		this.load.audio("bgm", 'assets/pippetals.wav')
		this.load.image(ImageNames.BACKGROUND, 'assets/background.png')

		// this.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
	}

	create() {
		var music;
		music = this.sound.add("bgm", {loop: true});
		music.play();

		const background: any = this.add.image(600, 400, ImageNames.BACKGROUND);
		background.setScale(2);

		this.text = this.add.text(100, 200, 'Click the pots to water the plants!');
		this.add.text(900, 400, 'Drag here to sell die!');
		this.moneyText = this.add.text(900, 200, 'You have ' + this.money + ' money');

		this.createPot(100);
		this.createPot(200);
		this.createPot(300);
		this.createPot(400);
	}

	update() {
		this.moneyText.setText('You have ' + this.money + ' money');
	}



	get screenBottom(): number {
		return this.sys.game.canvas.height;
	}


	private createPot(x: number): void {
		const stem: ScalableSprite = new ScalableSprite(this, x, this.screenBottom, ImageNames.STEM, .2);
		const pot: ScalableSprite = new ScalableSprite(this, x, this.screenBottom, ImageNames.POT, .2);
		let die: ScalableSprite;
		stem.display.setY(this.screenBottom - pot.height + 30);
		stem.display.displayHeight = 50;
		// text.display
		let bud: ScalableSprite;

		pot.display.addListener('pointerdown', () => {
			if (stem.height < 350) {
				stem.increaseHeight(50);
			}
			// console.log
			if (stem.height > 150) {
				if (bud === undefined) {
					bud = new ScalableSprite(this, x, this.screenBottom - 50 - stem.height, ImageNames.BUD, .2);
				} else {
					bud.display.setY(this.screenBottom - 50 - stem.height)
					console.log('reached max height')
				}
			}
			if (stem.height > 300) {
				if (die === undefined) {
					die = new ScalableSprite(this, x, this.screenBottom - 20 - stem.height, ImageNames.DIE, .1);
					console.log(this.text)
					this.text.setText('Drag the die to move them around!')
					this.input.setDraggable(die.display);

					// die.display.setY(this.screenBottom - 50 - stem.height)
					die.display.on('drag', () => {
						console.log('drag')
						die.display.setX(this.sys.game.input.mousePointer.x)
						die.display.setY(this.sys.game.input.mousePointer.y);
						pot.display.destroy();
						stem.display.destroy();
						bud.display.destroy();
						this.createPot(x);

						if (this.sys.game.input.mousePointer.x > 900 && this.sys.game.input.mousePointer.x < 1000 && this.sys.game.input.mousePointer.y > this.sys.game.canvas.height * .25 && this.sys.game.input.mousePointer.y < this.sys.game.canvas.height * .75) {
							console.log("selling die");
							die.display.destroy();
							this.money += 200;
						}
				
					});
				}
			}
		});
	}
 }