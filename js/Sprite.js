function Sprite() {
  //fish
    this.x = 150;
    this.y = 200;
    this.w = 50;
    this.h = 50;
    this.vy = 0;

}

Sprite.prototype.desenhar = function(ctx, key) {
  ctx.drawImage(key, this.x, this.y);
}

Sprite.prototype.moverCanos = function(dt) {
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
}
