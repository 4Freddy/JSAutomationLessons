/* 
* Task 1 Promice Race
*/

function getRandomValue(min, max)
{
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

function CreatePromise (result) 
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(result);
        }, getRandomValue(1,5) * 1000)
    })
}
 
let promiseOne = CreatePromise(1);
let promiseTwo = CreatePromise(2);
let promiseThree = CreatePromise(3);

Promise.race([promiseOne, promiseTwo, promiseThree]).then(data =>
    {
        console.log(data);
    }
)


/* 
* Task 2 async square
*/

function getNum()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(getRandomValue(1,5));
        }, 3000)
    })
}

async function square()
{
    let value = await getNum();
    console.log(value*value);
}

square();

/* 
* Task 3 async add
*/

function getNum2()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(getRandomValue(6,10));
        }, 3000)
    })
}

async function addition()
{
    let valueOne = await getNum();
    let valueTwo = await getNum2();

    console.log(valueOne + valueTwo);
}

addition();