img = "";
stats = "";
objects = [];

function setup()
  {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stats").innerHTML = "Stats : detecting Objects";
  }

function draw() 
{
    image(img, 0, 0, 640, 420);

    if(stats != "")
    {

    }
}

function gotResults(error, results)
{
  if (error)
  {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function modelLoaded() 
{
  console.log("Model Loaded!");
  stats = true;
}
function preload()
{
    img = loadImage('Mesa-de-Centro-Organica-Ipua-Media-e1652293802459.jpg');
}
function locate()
{
    window.location.href = "index.html";
}
