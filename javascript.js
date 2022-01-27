var java = [30, 10, 60, 30, 80, 10, 0];
var ruby = [20, 10, 10, 20, 0, 80, 20];
var html = [15, 10, 0, 40, 35, 20, 110];

var canvas = document.getElementById("canvas_java");
var context = canvas.getContext("2d");
context.strokeStyle = "rgb(255,255,255)";
context.lineWidth = "1";
context.font = "20px Arial";

var CANVAS_WIDTH = canvas.width;
var CANVAS_HEIGHT = canvas.height;

var clr = 0;


var colours = [['rgb(221,138,255)','rgb(0,220,0)','rgb(112,0,161)']]


//draws a column
  function drawBar( x, y, width, height, c) 
  {
    context.fillStyle = c;
    context.fillRect(x,  CANVAS_HEIGHT - y - 30 - height, width, height);
  }
  
  
  var z = 1;
  // here we iterate through all the bars and call "drawBar" to print them
  function drawBars() 
  {
    // setting up the canvas
    document.getElementById("canvas_java").width = '600';
    document.getElementById("canvas_java").height = '350';
    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    var width = 300 / 7 ;

    for (var i = 0; i < 7; ++i)
    {
    // printing out the days
      context.fillStyle = "rgb(255,255,255)";
      context.font = "20px Georgia";
      context.fillText(days[i], i*88, 350);
    }
    for (var i = 0; i < 7; ++i) 
    {
      //calculating the distances when printing 
      z +=1;
      var height = java[i]*3;
      var colour = colours[clr][0];
      drawBar(width * i * 2, 0, width/3, height, colour);
      var height = ruby[i]*3;
      var colour = colours[clr][1];
      drawBar( (width * i * 2) + width/3 , 0, width/3, height, colour);
      var height = html[i]*3;
      var colour = colours[clr][2];
      drawBar( (width * i * 2) + 2*width/3 , 0, width/3, height, colour);
      drawBar( (width * i * 2) + 3*width/3 , 0, width/3, 0, colour);
    } 
 }
    let jav = 0;
    let rub = 0;
    let htm = 0;
    for(i = 0; i < java.length; i++)
    {
      jav += java[i];
      rub += ruby[i];
      htm += html[i];
    }
    var total = jav + htm + rub;

    function drawPie() {
      // setting up the canvas
      document.getElementById("canvas_java").width = '300';
      document.getElementById("canvas_java").height = '350';
      var label = "tom";
      context.fillStyle = 'black';
      context.fillText(label, 0, 0);
        
        //initializing the angles for the pie
        var angles = [(Math.PI * 2 * jav/total), (Math.PI * 2 * rub/total), (Math.PI * 2 * htm/total)];
        
        //variables for the poing to draw the pie
        var start = 0;
        var ending = 0;
        
        // iterating through all the angles
        for(var i = 0; i < angles.length; i = i + 1) {
          start = ending;
          // starting angle
          ending = ending + angles[i];
          //ending angle
          context.beginPath();
          context.fillStyle = colours[clr][i];
          //
          context.lineWidth = "5";
          context.moveTo(150, 200);
          // center x variable, center y variable, rad, start, end
          context.arc(150, 200, 120, start, ending);
          context.lineTo(150, 200);
          context.stroke();
          context.fill();
        }
      }

function drawLine(activity, colour)
{
    context.beginPath();
    context.strokeStyle = colour;
    context.lineWidth = "3";
    context.moveTo(0,CANVAS_HEIGHT - activity[0]*4);
    for(i = 0; i<activity.length;i++)
    {
    context.lineTo((CANVAS_WIDTH/7)*i,CANVAS_HEIGHT - activity[i]*4);
    context.stroke();
    }   
}

function lineGraph()
{
  document.getElementById("canvas_java").width = '600';
  document.getElementById("canvas_java").height = '400';
  drawLine(java, colours[clr][0]);
  drawLine(ruby, colours[clr][1])
  drawLine(html, colours[clr][2]);

    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (var i = 0; i < 7; ++i)
    {
      context.fillStyle = "rgb(255,255,255)";
      context.font = "20px Georgia";
      context.fillText(days[i], i*84, 400);
    }
}

var typo = 1;

function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  if(typo == 1){
  drawBars();
  }
  if (typo == 2)
  {
  drawPie();
  }
  
  if (typo ==3)
  {
  lineGraph();
  }
}

document.addEventListener('DOMContentLoaded', drawBars());
const grapher = document.getElementById("graph");
const colourBtn = document.getElementById("changeColor");
grapher.addEventListener("click", function(){
  typo += 1; 
  if (typo >3){
    typo =1;
  }
  console.log(typo);
  draw() });
colourBtn.addEventListener("click", function(){
  if(clr >1){
    clr = 0;
  }
  else{
      clr += 1;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  document.getElementById('java').style.backgroundColor = colours[clr][0];
  document.getElementById('ruby').style.backgroundColor = colours[clr][1];
  document.getElementById('html').style.backgroundColor = colours[clr][2];
})