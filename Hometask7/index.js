/**
 *  Task 1, Dice game
 */
let player1 = {
    name: 'John',
    score: 0
}

let player2 = {
    name: 'Nick',
    score: 0
}

function throwDice(player){
    let i = Math.random() * (6 - 1 + 1) + 1;
    player.score += Math.floor(i);
}

function checkScore(player1, player2)
{
    if(player1.score === player2.score)
    {
        console.log("Game draw");
    } else if(player1.score > player2.score)
    {
        console.log(`${player1.name} win!!!`);
    } else {
        console.log(`${player2.name} win!!!`);
    }
}

function clearScore(player)
{
    player.score = 0;
}

function diceGame(player1, player2, throwsNumber)
{
    for(let i = 0; i<throwsNumber; i++)
    {
        throwDice(player1);
        throwDice(player2);
    }
    checkScore(player1, player2);
    clearScore(player1);
    clearScore(player2);
}

diceGame(player1, player2, 3);


/**
 *  Task 2, Friday 13
 */
let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
let startDate = new Date(2000, 0, 1);
let counter = 0;

do
{
    if(startDate.getDay() === 5 && startDate.getDate() === 13)
    {
        counter++;
    }
    startDate.setDate(startDate.getDate()+1)

} while (startDate.getTime() !== today.getTime());

console.log(counter);

/**
 *  Task 3, Number division
 */


function intDivision(numberForDivision, divisionCount){

    let resultArray = [];    
    let randomNumber;
    for(let i = 0; i < divisionCount-1; i++)
        {
            randomNumber = Math.floor(Math.random() * (numberForDivision - 1) + 1);
            numberForDivision -= randomNumber
            resultArray.push(randomNumber);
        }
    resultArray.push(numberForDivision);
    return resultArray;
}

let intArr = intDivision(15,3);

function FloatDivision(numberForDivision, divisionCount){

    let resultArray = [];    
    let randomNumber;
    for(let i = 0; i < divisionCount-1; i++)
        {
            randomNumber = (Math.random() * (numberForDivision - 0)).toFixed(2);
            numberForDivision -= randomNumber
            resultArray.push(randomNumber);
        }
    resultArray.push(numberForDivision.toFixed(2));
    return resultArray;
}

let floatArr = FloatDivision(15,3);
console.log(intArr);
console.log(floatArr);