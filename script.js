var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(numSquares);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetGame = document.querySelector("#resetGame");
var modeGame = document.querySelectorAll(".mode");

init();

function init(){
    //initialize the events for each button and set color for each square
    setUpModeButtons();
    //add events for each square
    setupSquares();
     //generate all new colors, pick the right color and change color of squares
     reset();
}

function setUpModeButtons(){
    for(var i=0; i<modeGame.length;i++){
        modeGame[i].addEventListener("click",function(){
            modeGame[0].classList.remove("selected");
            modeGame[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function setupSquares(){
    for(var i=0 ; i< squares.length; i++){ 
        //add click listeners to squares
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Corrent!"
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;
                resetGame.textContent = "Try again?"; 
            } else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }
}

resetGame.addEventListener("click",function(){
    reset();
})


function reset(){
    resetGame.textContent = "New Colors";
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick the right color
    pickedColor = pickColor(numSquares);
    messageDisplay.textContent=""; 
    //change color of squares
    for (var i=0; i< squares.length ; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    //change displayColor
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue" ;
}

// easyBtn.addEventListener("click",function(){
//     hardBtn.classList.remove("selected")
//     easyBtn.classList.add("selected");
//     resetGame.textContent = "New Colors";
//     numSquares = 3;
//     //generate all new colors
//     colors = generateRandomColors(numSquares);
//     //pick the right color
//     pickedColor = pickColor(numSquares);
//     //change color of squares
//     for (var i=0; i< squares.length ; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none"; 
//         }
        
//     }
//     //change displayColor
//     colorDisplay.textContent = pickedColor;
    

// })

// hardBtn.addEventListener("click",function(){
//     easyBtn.classList.remove("selected")
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     //pick the right color
//     pickedColor = pickColor(numSquares);
//     //change color of squares
//     for (var i=0; i< squares.length ; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block"; 
//         }
//     //change displayColor
//     colorDisplay.textContent = pickedColor;
    
// })



function changeColors(color){
    for( var i =0;i< colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(numSquares){
    var random = Math.floor(Math.random() * numSquares);
    return colors[random];
}


function generateRandomColors(num){
    //make an array
    var arr = [];
    for (var i=0; i< num; i++){
        //generate randomColor and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", "+ green +", " + blue +")";
}