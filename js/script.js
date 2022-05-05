'use strict';


const gen = () => {
    let arr = [];
    let result = [];
    for(let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    const randomNum = () => {
        if(result.length > 0) {
            result = [];
        }
        let index = 0;
        for (let i = 0; i < 100; i++) {
            index = Math.floor(Math.random() * (arr.length - 1)) ;
            result.push(arr[index]);
            arr.splice(index, 1);
        }
    }
    return {
        arr,
        result,
        randomNum,
    }
}
const genNumber = gen();

genNumber.randomNum();
console.log(genNumber.result);