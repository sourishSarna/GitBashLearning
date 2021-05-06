function setup() {
    createCanvas(800, 600);
    edges = createEdgeSprites();
    target = createSprite(560, 40, 30, 30)
    obs1 = createSprite(300, 120, 100, 30);
    obs2 = createSprite(300, 320, 100, 30);


    player = createSprite(200, 500, 30, 30);


    obs1.velocityX = 5;
    obs2.velocityX = -5;
    target.shapeColor = 'blue';
    player.shapeColor = 'limegreen';
    obs1.shapeColor = 'red'
    obs2.shapeColor = 'red'


}

function draw() {
    background("black");


    player.bounceOff(edges[0]);
    player.bounceOff(edges[1]);
    player.bounceOff(edges[2]);
    player.bounceOff(edges[3]);
    obs1.bounceOff(edges[0]);
    obs1.bounceOff(edges[1]);
    obs2.bounceOff(edges[0]);
    obs2.bounceOff(edges[1]);
    if (keyDown("Down")) {
        player.y = player.y + 3;
    }
    if (keyDown("Up")) {
        player.y = player.y - 3;
    }
    if (keyDown("Left")) {
        player.x = player.x - 3;
    }
    if (keyDown("Right")) {
        player.x = player.x + 3;
    }
    if (player.isTouching(obs1)) {
        obs1.velocityX = 0;
        text('You Loose!!', 400, 300)
    }
    if (player.isTouching(obs2)) {
        obs2.velocityX = 0;
        text('You Loose!!', 400, 300)
    }
    if (player.isTouching(target)) {

        text('You win!!', 400, 300)
    }


    drawSprites();

}