// HOJ QUESTIONS


function turnToarray(string){
    stringArray = Array.from(string);
    return stringArray
}

function checkY(string){
    hasY = "NO"
    for (let item of turnToarray(string)){
        if (item === "Y" || item === "y"){
            hasY = "YES";
            break;
        }
    }
    console.log(hasY);
}


// QUESTION 2 

function getFactorial(num){
    let numberArray = [];
    for (let i = num; i > 0; i--){
        numberArray.push(i);
    }
    return numberArray
}

function factorial(number){

    let finalAnswer = 1;
    let numList = getFactorial(number);

    for (let i = 0; i < numList.length; i++){
        finalAnswer = finalAnswer * numList[i];
    }
    return finalAnswer;
}

// QUESTION 3



