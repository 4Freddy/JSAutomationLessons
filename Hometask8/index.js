/**
 * Task 1  Array reverse
 */

function revereseArray(array = [])
{
    return array.reverse();
}

let array = [1,2,3,4,5,6,7];

array = revereseArray(array);

/**
 * Task 2  Max value of array
 */

function arrayMaxValue(array = [])
{
    let maxValue = array[0];
    for(let value of array)
    {
        maxValue = value > maxValue ? value : maxValue;
    }
    return maxValue;
}
let arrayMax = [15,1,2,3,9,4,5,6,7];

let maxValue = arrayMaxValue(arrayMax);

/**
 * Task 3 Fibonachi
 */

function getFibonachi(startValue, length) {
    let resultArray = [];
    let a = startValue;
    let b = startValue+1;
    resultArray.push(a);
    resultArray.push(b);
    for (let i = 3; i <= length; i++) {
      let c = a + b;
      resultArray.push(c);
      a = b;
      b = c;
    }
    return resultArray;
  }

  let fibArray = getFibonachi(3, 15)

  /**
 * Task 4 numbers compare
 */

  let firstNum = 3487;
  let secondNum = 3794;

  function numberToArray(number){

    let resultArr = [];
    while(number>1)
    {
        resultArr.push(number % 10);
        number = Math.floor(number / 10);
    }
    return resultArr.reverse();
  }

function compareNumbers (firstNumber, secondNumber)
{
    const resultObject = {
        placeAndValue: 0,
        value: 0
    }

    let firstArray = numberToArray(firstNum);
    let secondArray = numberToArray(secondNum);

    for(let i = 0; i< firstArray.length; i++)
    {
        if(firstArray[i] === secondArray[i])
        {
            resultObject.placeAndValue++;
        }
    }

    for(let value1 of firstArray)
    {
        for(let value2 of secondArray)
        {            
            if(value1 === value2)
            {
                resultObject.value++;
                break;
            }
        }
    }

    resultObject.value -= resultObject.placeAndValue;

    return resultObject;
}

let result = compareNumbers(firstNum,secondNum);

 /**
 * Task 5 sort array
 */

let arrayForSort = [1,5,3,2,0,41,32,55,23,12,42];

function sortArray (arrayForSort) {
    let resultObject  = 
    {
        minToMax: [],
        maxToMin: []
    }
  
    arrayForSort.sort((a, b) => a - b);
    for(let value of arrayForSort)
        {
            resultObject.minToMax.push(value);
        }
   
    arrayForSort.sort((a, b) => b - a);
    for(let value of arrayForSort)
        {
            resultObject.maxToMin.push(value);
        }

    return resultObject;
}

let sortResult = sortArray(arrayForSort);

 /**
 * Task 6 delete same values
 */

let arrauForUnique = [1,2,3,4,5,1,2,3 ,'', '' ,'a', 'b',true,false,true,false, 'a','b'];

function unique(arrauForUnique) {
    let resultArray = [];
  
    for (let value of arrauForUnique) {
      if (!resultArray.includes(value)) {
        resultArray.push(value);
      }
    }
    return resultArray;
  }

let uniqueArray = unique(arrauForUnique);

