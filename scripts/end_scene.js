export default class EndScene extends Phaser.Scene {
  init(data) {
    this.text = data.text;
  }
  
  constructor() {
    super({ key: 'end_scene' });
  }

  create() {
    this.text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, this.text);

    this.spaceBar = this.input.keyboard.addKey('SPACE');

    this.spaceBar.on('down', () => {
      this.scene.start('scene');
    })
  }

  update() { }
}