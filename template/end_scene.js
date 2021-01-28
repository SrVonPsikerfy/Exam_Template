export default class endScene extends Phaser.Scene {
  init(data){
    this.text = data.text;
  }
    constructor() {
      super({ key: 'end_scene' });
    }
  
    create() {
      this.text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, this.text);
      this.spaceBar = this.input.keyboard.addKey('SPACE');
    }

    update(){
      if(this.spaceBar.isDown){
        this.scene.start('scene');
      }
    }
  }