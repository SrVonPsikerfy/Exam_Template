export default class Star extends Phaser.GameObjects.Sprite {
  constructor(scene, base, x, y) {
    super(scene, x, y, 'star');
    this.y -= this.height/1.5;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    this.base = base;

  }
  preUpdate() {

    if (this.scene.physics.overlap(this.scene.player, this)) {
      this.scene.player.point();
      if (this.scene.player.score == this.scene.stars) {
        this.scene.scene.start('end');
      }
      else {
        let s = this.scene.bases.children.entries;
        this.scene.spawn(s.filter(o => o !== this.base));
        this.destroy();
      };
    }
  }
}
