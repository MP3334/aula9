//variável
var box;

//função de configuração
function setup() {
  //área
  createCanvas(400, 400);
  //sprite da box
  box = createSprite(200, 200, 20, 20);
}

function draw() {
  background('yellow');

  if (keyDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }

  if (keyDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5;
  }
 if (keyDown(UP_ARROW)){
  box.position.y = box.position.y -5;
 }
if (keyDown(DOWN_ARROW)){
  box.position.y = box.position.y +5;
}
  drawSprites();
}




