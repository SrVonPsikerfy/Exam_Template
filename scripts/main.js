import Scene from './scene.js'
import EndScene from './end_scene.js'
import Boot from './boot.js'

new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,
    height: 500,
    scale: {
        mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Scene, EndScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: true
        }
    }
});