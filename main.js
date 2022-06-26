rightEyeX=0;
rightEyeY=0;
hat="";
function preload(){
    hat = loadImage('https://i.postimg.cc/R03gFw8x/hmgoepprod-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}   
function modelLoaded(){
    console.log('poseNet Is Initialized');
}


function draw(){
    image(video,0,0,300,300);
    image(hat,rightEyeX,rightEyeY,150,200);
}

function take_snapshot(){
    save('myImage.png');
}

function gotPoses(results){
    if (results.length > 0 ){
        console.log(results);
        rightEyeX=results[0].pose.rightEye.x -60; 
        rightEyeY=results[0].pose.rightEye.y -180;
        console.log("rightEye x =" + rightEyeX);
        console.log("rightEye y =" + rightEyeY);
    }
}

