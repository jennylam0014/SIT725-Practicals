function changeText() {
    var textsArray= ["New Zealand","Malaysia", "Vietnam", "Thailand", "Indonesia"]
    var colourArray = ["Sienna", 'DarkOliveGreen','PaleVioletRed','DarkSalmon', 'CornflowerBlue']
    var number = getRandomNumberBetween(0,textsArray.length-1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML= textsArray[number];
    document.getElementById("heading").style.color = colourArray[number];
    }

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }


