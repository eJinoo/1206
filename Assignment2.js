// HOJ QUESTIONS
// ALEX REGIS CTSP 1206


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
let studentList = [
{ name: "Mike", marks: [80, 50, 60, 100] },
{ name: "Daniel", marks: [40, 50, 100, 100] },
{name: "Stacy", marks: [20, 100, 50, 70]},
];

function AvgCalc(marks){
    let sum = 0;
    let numberOfItems = 0;
    for (let item of marks){
        sum = sum + item;
        numberOfItems++;
    }
    return sum / numberOfItems;
}

function getHighestAvgStudent(studentArray){
    let highAvg = 0;
    let highStu = ''
    for (let student of studentArray){
        if (AvgCalc(student["marks"]) > highAvg){
            highAvg = AvgCalc(student["marks"]);
            highStu = student["name"];
        } 
        else if (AvgCalc(student["marks"]) === highAvg){
            highStu = highStu + ", " + student["name"];
        }
    }
    return highStu;
}

// QUESTION 4 // jeez this was weird
let numArr2 = [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4

function highestCount(arr){
    let max = 0;
    let final = [];
    arr.forEach(function(num){
        const numCount = arr.filter(function(numCount){
            return numCount === num
        }).length;
        
        if (numCount > max){
            max = numCount;
            final = [num];
        } else if (numCount === max && final.indexOf(num) === -1){
            final.push(num)
        }
    });
    return final; 
}

// QUESTION 5
let numArr = [20, 20, 11, 4, 11, 20, 2, 4]

function checkUnique(arr){
    const uniqueNum = arr.filter( (num) => { return arr.indexOf(num) === arr.lastIndexOf(num); } );
    return uniqueNum;
}

// QUESTION 6
let Palin = ['abc', 'aba', 'ccc', 'dca', 'a'];

function Palindrome(arr){
    const isPalin = arr.filter(function(word) {
        const reversedWord = word.split('').reverse().join('');
        if (word === reversedWord){
            return word;
        }
    });
    return isPalin;
}