canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");

color= "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
   color= document.getElementById("colorcheck").value; 
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.arc(mouse_x, mouse_y, 50, 0, 2*Math.PI);
  ctx.stroke();  
}

function clearArea() {
    ctx.clearRect (0, 0, canvas.width, canvas.height);
}