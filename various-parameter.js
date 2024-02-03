function evenSizedString(str){
const size = str.length;
    console.log(str, size);
    
    if(size % 2 === 0){
        console.log('it was even');
        return true;
    }
    else{
        console.log('it was odd')
        return false;
    }
}
evenSizedString('dhaka');
evenSizedString('bari');

function doubledOrTripled(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubledOrTripled(10, true));
console.log(doubledOrTripled(15, false));

function numberOfElements(number){
    const len = number.length;
    return len;
}

console.log(numberOfElements([12, 65, 45]));

function getAge(person){
    const age = person.age;
    return age;
}
getAge(10);