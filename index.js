let isNumeral = /[A-Z]/;
let rCheckNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var numerals = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
var button = document.getElementById("submitInput");
var uInput = " ";
var numeralAmount = 0;

button.addEventListener("click", function() {
    uInput = document.getElementById("text1").value;
    if(checkInput(uInput)){
        numeralAmount = getNumeralValue(uInput);
    }
    });

function checkInput(uInput){
    var input = [...uInput];
    var index = 0;

    
    for(var i = 0; i < input.length; i++){
        index = checkNumerals(input[i], index);
    }

        if(index === (input.length)){
            return true;
        }
    
    return false;
};

function checkNumerals(userNumeral, index){

    for(var j = 0; j < rCheckNumerals.length; j++){

        if(rCheckNumerals[j] === userNumeral){
            index++;
            return index;
        }
    }

    return index;
};

function getNumeralValue(uInput){
    let valueA = 0;
    let valueB = 0;
    let userInput = [...uInput];

    for(var i = 1; i < userInput.length; i++){
        
        if(userInput[i] !== 'a'){
            valueA = userInput[i-1];
            valueB = userInput[i];
            if(valueA >= valueB){
                numeralAmount += valueA + valueB;
            }
            else{
                numeralAmount += valueB - valueA;
            }
        }

        userInput[i-1] = "a";
        userInput[i] = "a";
    }

    return numeralAmount;
}