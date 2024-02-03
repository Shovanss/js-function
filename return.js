function tenTimes(number){
    const total = number * 10;
    return total;
}
tenTimes(5);
const output = tenTimes(5);
console.log('output', output);

function bigNumber(number){
    const total = number * 450;
    return total;
}
bigNumber(278);
const result = bigNumber(278);
console.log('result', result);

function add(num1, num2){
    const total = num1 + num2;
    return total;
}

const bill = add(25, 45);

function add2(num1, num2){
    return num1 + num2;

}
const total = add2(65, 78);
console.log(bill, total);

function varities(num1, num2){   
const sum = num1 + num2;
const less = num1 - num2;
const multiply = sum * less;
const total = multiply / 2;
return total;
}
const total = varities(10, 5);
console.log(total);

function isEven(number){
    if(number % 2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(10));


function isOdd(number){
    if(number % 2 === 1){
        return true
    }
    return false;
}
console.log(isOdd(10));
console.log(isOdd(3));