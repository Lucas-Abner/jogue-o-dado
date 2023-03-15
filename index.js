var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var dadoAleatorio = "dice" + randomNumber1 + ".png";

var imagemAleatoria = "images/" + dadoAleatorio

document.querySelectorAll("img")[0].setAttribute("src", imagemAleatoria);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dadoAleatorio2 = "dice" + randomNumber2 + ".png";

var imagemAleatoria2 = "images/" + dadoAleatorio2;

document.querySelectorAll("img")[1].setAttribute("src", imagemAleatoria2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Ganhou!";
}else if( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Ganhou!";
}else {
    document.querySelector("h1").innerHTML = "Empate!!"
}