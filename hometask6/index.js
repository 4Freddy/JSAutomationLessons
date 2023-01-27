/**
 * Task #1   sum equal
 */

let strWith6Digits = "123222";

function checkString (string) 
{
    let resultArr = String(string).split("");
    if(resultArr.length !== 6){
        console.log("Array length is not equal 6");
        return;
    }
    let firstPartOfArray = 0;
    let secondPartOfArray = 0;
    for(let i = 0; i < resultArr.length; i++)
    {
        if(isNaN(resultArr[i])){
            console.log("Array contains NaN");
            return;
        }
        if(i < resultArr.length/2){
            firstPartOfArray += Number(resultArr[i]);
        } else {
            secondPartOfArray += Number(resultArr[i]);
        }
    }
    if(firstPartOfArray === secondPartOfArray){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

checkString(strWith6Digits);

/**
 * Task #2  result of division 1000
 */

let n = 1000;
let num = 0;

do{
 n /= 2
 num++;
} while (n > 50);

console.log(`Result of division is: ${n}, operations count is: ${num}`);

/**
 * Task #3 Average for 12, 15, 20, 25, 59, 79
 */

let arr = [12, 15, 20, 25, 59, 79];

let arrSum = 0;

for(let value of arr){
    arrSum += value;
}

let arrAverage = arrSum / arr.length;

console.log(arrAverage);

/**
 * Task #4   [1, 2, 3, 'a', 'b', 'c', 4, 5].
 */

let arrForSplice = [1, 2, 3, 4, 5];
arrForSplice.splice(3, 0, 'a','b','c');
console.log(arrForSplice);

/**
 * Task #5   [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 */

let arrForSplice2 = [1, 2, 3, 4, 5];
arrForSplice2.splice(1, 0, 'a','b');
arrForSplice2.splice(6, 0, 'c');
arrForSplice2.push('e');
console.log(arrForSplice2);

/**
 * Task #6  Sort [3, 4, 1, 2, 7].
 */

let arrForSort = [3, 4, 1, 2, 7];
arrForSort.sort((a, b) => a - b);
console.log(arrForSort);
arrForSort.sort((a, b) => b - a);
console.log(arrForSort);