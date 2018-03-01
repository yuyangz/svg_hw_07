var container = document.getElementById("vimage");
var cleared = document.getElementById("clear");
var first = true;
var x2 = 0;
var y2 = 0;

var line = function(x1, y1, x2, y2){
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", x1);
    l.setAttribute("y1", y1);
    l.setAttribute("x2", x2);
    l.setAttribute("y2", y2);
    l.setAttribute("stroke", "black"); //creates line
    container.appendChild(l); //adds line
}

var circle = function(x, y){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y); //creates circle
    c1.setAttribute("fill", "black");
    c1.setAttribute("r", "10");
    container.appendChild(c1); //adds circle
    if(first){ //first circle
	first = false;
    }
    else{ //else creates line between circles
	line(x2, y2, x, y);
    }
    x2 = x; //new coors
    y2 = y;
}

var clicked = function(e){ //places circle
    if(e.target == this){
	circle(e.offsetX, e.offsetY);
    }
};


var clear = function(e){ //removes everything
  var first_ = container.firstChild;
  while(first_){ 
    container.removeChild(first_);
    first_ = container.firstChild;
  }
  first = true;
}


container.addEventListener("click", clicked); //buttons
cleared.addEventListener("click", clear);
