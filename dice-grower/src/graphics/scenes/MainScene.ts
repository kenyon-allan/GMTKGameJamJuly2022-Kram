import PlantModel from "../../models/PlantModel";
import { ImageNames } from "../ImageNames";
import { ColorNames } from "../ColorNames";
import ScalableSprite from "./ScalableSprite";

 export default class MainScene extends Phaser.Scene {
	private plants: PlantModel[] = [];
	private text: any;
	private money: number = 500;
	private moneyText: any;
	private order: string = '';
	private orderText: any;
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

		const background: any = this.add.image(483, 276, ImageNames.BACKGROUND);
		background.setScale(1.5);

		this.order = this.makeOrder();
		this.text = this.add.text(457, 10, 'Click the pots to water the plants!');
		this.text = this.add.text(457, 50, 'Drag the dice to customers to sell!');
		this.add.text(655, 310, 'Drag here to sell dice!');
		this.moneyText = this.add.text(100, 10, 'You have $' + this.money + '.');
		this.orderText = this.add.text(680,205, 'Current order: ' + this.order + '.');

		this.createPot(100);
		this.createPot(200);
		this.createPot(300);
		this.createPot(400);
	}

	update() {
		this.moneyText.setText('You have ' + this.money + ' money');
		this.orderText.setText('Current order: ' + this.order + '.');
	}



	get screenBottom(): number {
		return this.sys.game.canvas.height;
	}


	private createPot(x: number): void {
		const colors: number[] = [ColorNames.RED, ColorNames.GREEN, ColorNames.BLUE, ColorNames.YELLOW, ColorNames.PURPLE, ColorNames.TEAL];
		const stem: ScalableSprite = new ScalableSprite(this, x, this.screenBottom, ImageNames.STEM, .2);
		const pot: ScalableSprite = new ScalableSprite(this, x, this.screenBottom, ImageNames.POT, .2);
		let die: ScalableSprite;
		stem.display.setY(this.screenBottom - pot.height + 30);
		stem.display.displayHeight = 50;
		// text.display
		let bud: ScalableSprite;

		pot.display.addListener('pointerdown', () => {
			if (stem.height < 350 && this.money >= 10) {
				stem.increaseHeight(50);
				this.money -= 10;
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
					die.image.setDataEnabled();
					die.image.data.set('color', colors[Math.floor((Math.random() * colors.length))]);
					die.display.setTint(die.image.data.get('color'));
					console.log(die.image.data.get('color'));
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

						if (this.sys.game.input.mousePointer.x > 700 && this.sys.game.input.mousePointer.x < 800 && this.sys.game.input.mousePointer.y > this.sys.game.canvas.height * .33 && this.sys.game.input.mousePointer.y < this.sys.game.canvas.height * .66) {
							if (this.checkOrder(die.image.data.get('color'), this.order)) {
								console.log("selling die");
								die.display.destroy();
								this.money += 200;
								this.order = this.makeOrder();
							}
						}
				
					});
				}
			}
		});
	}

	private makeOrder(): string {
		const colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'teal'];
		return colors[Math.floor((Math.random() * colors.length))];
	}

	private checkOrder(dieColor: number, orderColor: string) {
		if (dieColor === 0xff0000 && orderColor === 'red') {
			return true;
		}
		if (dieColor === 0x00ff00 && orderColor === 'green') {
			return true;
		}
		if (dieColor === 0x0000ff && orderColor === 'blue') {
			return true;
		}
		if (dieColor === 0xffff00 && orderColor === 'yellow') {
			return true;
		}
		if (dieColor === 0xff00ff && orderColor === 'purple') {
			return true;
		}
		if (dieColor === 0x00ffff && orderColor === 'teal') {
			return true;
		}
		return false;
	}
 }