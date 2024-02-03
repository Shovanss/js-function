// function evenNumbersOnly(numbers){
//     const evens = [];
//     for(const number of numbers){
        
//         if(number % 2 === 0){
//             console.log(number);
//             evens.push(number);
//         }
        
//     }
//     return evens;
// }
// const numbers = [5, 10, 20, 44];
// const evens = evenNumbersOnly(numbers);

// console.log('even numbers', evens);


function sumOfEven(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
         }
    return sum;
}
const numbers = [10, 20, 44, 5];
const sum = sumOfEven(numbers)
console.log(sum);