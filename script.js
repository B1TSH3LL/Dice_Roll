function rollDice() {

    //DICE 1

    //Generating Random Numbers
    var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * 6;
    randomNumber1 = Math.floor(randomNumber1 + 1);
    console.log(randomNumber1);

    //Generating Random Images 
    var randomDiceImage = "/dice" + randomNumber1 + ".png";

    //Declaring The Folder Of Images For Randomization
    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);


    //DICE 2

    //Generating Random Numbers
    var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 6;
    randomNumber2 = Math.floor(randomNumber2 + 1);
    console.log(randomNumber2);

    //Generating Random Images 
    var randomDiceImage2 = "/dice" + randomNumber2 + ".png";

    //Declaring The Folder Of Images For Randomization
    var randomImageSource2 = "images/" + randomDiceImage2;

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);


    //WINNER Declaration
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 2 Wins!"
    }
    else {
        document.querySelector("h1").innerHTML = "🎌DRAW!"
    }

}

