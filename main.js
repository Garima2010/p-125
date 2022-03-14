difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560, 150);

    PoseNet = ml5.poseNet(video , modelLoaded);
    PoseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX +"difference = "+difference);
    }
}
function draw(){
    background("#94b8b8");

    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#8000ff');
    text('Garima',50,400);
}
