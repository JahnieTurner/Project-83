canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
lastposX=0;
lastposY=0;
color = "black";
width = 5
mouseEvent=""
screenwidth=screen.width
newwidth=screen.width-70
newheight=screen.height-300

if(screenwidth<992){
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").height=newheight
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart", mytouchstart)
function mytouchstart(e) {
    lastposX=e.touches[0].clientX-canvas.offsetLeft
    lastposY=e.touches[0].clientY-canvas.offsetTop
}


canvas.addEventListener("touchmove", mytouchmove)
function mytouchmove(e) {
    currentposX = e.touches[0].clientX-canvas.offsetLeft
    currentposY = e.touches[0].clientY-canvas.offsetTop
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.moveTo(lastposX,lastposY)
        ctx.lineTo(currentposX, currentposY)
        ctx.stroke()
    lastposX=currentposX
    lastposY=currentposY
}

canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    color = document.getElementById("text_input_color").value
    width = document.getElementById("text_input_width").value
    mouseEvent = "mousedown"
}


canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e) {
    currentposX = e.clientX-canvas.offsetLeft
    currentposY = e.clientY-canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.moveTo(lastposX,lastposY)
        ctx.lineTo(currentposX, currentposY)
        ctx.stroke()
    }
    lastposX=currentposX
    lastposY=currentposY
}

function cleararea(){
    ctx.clearRect(0,0,800,600)
}