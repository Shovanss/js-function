function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
         console.log(number);
        sum = sum + number;
    }
return sum;

}

const numbs = [10, 45, 87, 49];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers', sum);