export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  
  preload() {
    this.load.image('platform', './assets/sprites/platform.png');
    this.load.image('base', './assets/sprites/small_base.png');
    this.load.image('star', './assets/sprites/star.png');
    this.load.image('player', './assets/sprites/player.png');
  }

  create() {
    this.scene.start('scene');
  }
}