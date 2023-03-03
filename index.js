function generator(){
    var random = Math.floor(Math.random() * 6) + 1; //1 --> 6
    return random;
}

var res1 = generator();
var res2 = generator();



var randomDiceImage1 = "dice" + res1 + ".png"; 
var randomImageSource1 = "images/" + randomDiceImage1;

var randomDiceImage2 = "dice" + res2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// function result(res1, res2){

    if(res1 === res2){
        document.querySelector("h1").textContent="It's a draw.";
    }
    else if(res1 > res2){
        document.querySelector("h1").textContent="Player 1 won!!!";
    }
    else{
        document.querySelector("h1").textContent="Player 2 won!!!";
    }
// }

result();

