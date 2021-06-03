img = "";
status = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocoSsd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function modelLoaded(){
    console.log("modelLoaded");
    status =  true;
    objectDetector.detect(img, gotResult);
}

function preload(){
    img= loadImage('cube.jpg');
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    
        console.log(results);
    
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Rubix Cube", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

function back(){
    window.location = "index.html";
}