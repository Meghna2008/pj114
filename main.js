var re_x = 0;
var re_y = 0;

function preload(){
butterfly_png = loadImage("https://i.postimg.cc/Gh3Vvvnz/31675-2-purple-butterfly-transparent-image.png")
}

function setup(){
canvas = createCanvas(300, 250);
canvas.position(300,180,'fixed');

video = createCapture(VIDEO);
video.hide()
posenet = ml5.poseNet(video, modelReady);
posenet.on("pose", gotresult);
}

function draw(){
image(video, 0, 0, 350, 300);
image(butterfly_png,re_x, re_y, 190, 190);

}

function modelReady(){
    console.log("posenet model is initialised")
}

function gotresult(result){
    if(result.length>0)
    {
        console.log(result);
          re_x = result[0].pose.rightEar.x-190; 
          re_y = result[0].pose.rightEar.y-160; 
    }



}
  

function takesnap()
{
    save("image.png");
}
