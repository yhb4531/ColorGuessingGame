var numOfSquares = 6;
var colors = [];
var goalColor;
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");


init();

function init(){
    setupModeBtn();
    setupSquares();
    reset();
}

function setupModeBtn(){
    for(var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");

            // if(this.textContent === "Easy"){
            //     numOfSquares = 3;
            // }else {
            //     numOfSquares = 6;
            // }
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();

        });
    }
}

function setupSquares(){
    for (var i=0; i<squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to goalColor
            if(clickedColor === goalColor){
                messageDisplay.textContent = "CORRECT!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = generateRandomColor(numOfSquares);
    //pick a new random color from array
    goalColor = pickColor();
    //change rgbDisplay to match picked color
    rgbDisplay.textContent = goalColor;
    //changed colors of squares
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
}





//changes all squares to the picked color when correct
function changeColors(color){
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    // make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //red form 0 ~ 255
    var red = Math.floor(Math.random() * 256);
    //green from 0 ~ 255
    var green = Math.floor(Math.random() * 256);
    //blue from 0 ~ 255
    var blue = Math.floor(Math.random() * 256);
    
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetBtn.addEventListener("click", function(){
    reset();
});

