import Phaser from 'phaser'

import GreenhouseScene from './graphics/scenes/GreenhouseScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: window.screen.availWidth * 0.8,
	height: window.screen.availHeight * 0.8,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [GreenhouseScene]
}

export default new Phaser.Game(config)