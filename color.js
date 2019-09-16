var numsq = 6;
var color = generatrandomcolors(numsq); /*[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255, 255)",
"rgb(255, 125, 145)",
"rgb(255, 100, 12)"
  ]
 */

   var messagedisplay= document.querySelector("#message");
   var squares = document.querySelectorAll(".square");
   var pickedcolor = pickcolor();
   var resetb = document.querySelector("#reset");
   var mode = document.querySelectorAll(".mode");

  for(var i = 0; i<mode.length; i++){
  	mode[i].addEventListener("click",function(){
    mode[0].classList.remove("selected");
    mode[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numsq = 3: numsq = 6;
    reset();
  	});
  }

  /* easybtn.addEventListener("click",function(){
   	numsq = 3;
   	hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  color = generatrandomcolors(numsq);
  pickedcolor = pickcolor();
  colordisplay.textContent = pickedcolor;

     for (var i=0; i<squares.length;i++){
     	if(color[i]){
     		squares[i].style.background = color[i];
     	}
     	else {
     		squares[i].style.display = "none";
     	}
     }

  document.querySelectorAll(".square")[3].style.display ="none";

  document.querySelectorAll(".square")[4].style.display ="none";      //this mehtod is used to hide bottom three squares

  document.querySelectorAll(".square")[5].style.display ="none";
   });
   hardbtn.addEventListener("click",function(){
   	numsq = 6;
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
color = generatrandomcolors(numsq);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
for(var i = 0; i< squares.length; i++){
	squares[i].style.background = color[i];
	squares[i].style.display = "block";
}
   });*/
   resetb.addEventListener("click",function(){
   reset();

   });
  for (var i = 0; i< squares.length ; i++){
  	//add initial colors to squares
  	squares[i].style.backgroundColor = color[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    	// Grab color of clicked square
    	var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickedcolor){
        	messagedisplay.textContent = "Correct!"
        	changecolors(clickedcolor);
        	resetb.textContent = "Start New!";

         h1.style.backgroundColor = pickedcolor;
        }
        else { this.style.backgroundColor = "#232323";
                 messagedisplay.textContent = "Try Again!"
             }

    });
  }


  var colordisplay = document.getElementById("Colordisplay");

  colordisplay.textContent = pickedcolor;

  function changecolors(colors){
  	for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors;
  	}
  }

  var h1 = document.querySelector("h1");

  function pickcolor(){
  	var random = Math.floor(Math.random() * color.length);
  	return color[random];

  }
  function generatrandomcolors(num){

  	//make an array
  	var arr = []
  	//add num random colors to array
  	for (var i = 0; i<num ; i++){
  		// get random colors and push it into array
  		arr.push(randomcolor())
  	}
  	//return that array
  	return arr;

  }


function randomcolor(){
	//pick a red from 0 - 255
   var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255

   var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255

   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
		//generate new colors
   color = generatrandomcolors(numsq);
   // pick new color
     pickedcolor = pickcolor();
   //change color display to match new color
   colordisplay.textContent = pickedcolor;
   // give new colors to squares
   for(var i =0 ; i<squares.length ; i++){
   	if (color[i]) {
   		squares[i].style.display = "block";
   		squares[i].style.background = color[i];
   	}
   	else{
   		squares[i].style.display = "none";
   	}


   }
  h1.style.background = "steelblue";

}
