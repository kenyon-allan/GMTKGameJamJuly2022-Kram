import Phaser from 'phaser'

import MainScene from './graphics/scenes/MainScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 966,
	height: 552,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [MainScene],
	title: 'Dice Grower'
}

export default new Phaser.Game(config)