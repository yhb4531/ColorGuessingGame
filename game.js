var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = goalColor;
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

for (var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

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
    })
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
    //generate all new colors
    colors = generateRandomColor(numOfSquares);
    //pick a new random color from array
    goalColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = goalColor;
    //changed colors of squares
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColor(numOfSquares);
    goalColor = pickColor();
    colorDisplay.textContent = goalColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
})
hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColor(numOfSquares);
    goalColor = pickColor();
    colorDisplay.textContent = goalColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
})


