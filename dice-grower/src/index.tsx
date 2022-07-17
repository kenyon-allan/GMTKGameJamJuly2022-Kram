import Phaser from 'phaser'

import MainScene from './graphics/scenes/MainScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: window.screen.availWidth * 0.7,
	height: window.screen.availHeight * 0.7,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [MainScene]
}

export default new Phaser.Game(config)