function doubleIt(number){
    const doubled = number * 2;
    console.log(number, doubled)
}
doubleIt(10);
console.log('------------');
doubleIt(350);
const number = 64;
doubleIt(number);
const money = 50;
doubleIt(money);

function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff)
}
const myFather = 45;
const myAge = 30;
difference(myFather, myAge);