song1 = "";
song2 = "";
scorerightWrist="";
rightWristX="";
rightWristY="";
scoreleftWrist="";
leftWristX="";
leftWristY="";

function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500 );
    
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500 );
}

function play() {
    if(scoreRightWrist > 0.2) { circle(rightWristX,rightWristY,20); song2.stop(); if(song1_status == false) { song1.play(); document.getElementById("song").innerHTML = "Song Name: music1" } } if(scoreLeftWrist > 0.2) { circle(leftWristX,leftWristY,20); song1.stop(); if(song2_status == false) { song2.play(); document.getElementById("song").innerHTML = "Song Name: music2" } } }


function modelLoaded(){
console.log('Posenet Is Initialized');

}
function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + " leftWristY = "+ leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + " rightWristY = "+ rightWristY);
}
}

