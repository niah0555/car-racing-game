var ball;
var db;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db=firebase.database();
    ballPosition=db.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    db.ref('ball/position').set({'x': positionValuedata.x+x, 'y': positionValuedata.y+y});
}

function readPosition(data){
positionValuedata=data.val();
ball.x=positionValuedata.x;
ball.y=positionValuedata.y;
}

function showError(){
    console.log("Hello");
}