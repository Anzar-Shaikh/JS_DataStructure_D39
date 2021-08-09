// *********************************imports*************************



// *********************************Question1**************************
 let randomNumbers =[];
for (let i = 0 ; i<10 ;i++){
    randomNumbers[i] = Math.floor(Math.random()*889)+100;
}
console.log(randomNumbers);

let largestNumber = 0;
let secLargestNumber = 0;
for (let i = 0 ; i< randomNumbers.length ; i++){

    if (largestNumber < randomNumbers[i]){
        secLargestNumber = largestNumber;
        largestNumber = randomNumbers[i];
    }
    else{
        secLargestNumber = randomNumbers[i];
    }
}
console.log(secLargestNumber);



// *********************************Question2**************************

let randomNumbers =[];
for (let i = 0 ; i<10 ;i++){
    randomNumbers[i] = Math.floor(Math.random()*889)+100;
}
console.log(randomNumbers);

console.log(randomNumbers.sort());
console.log(`the second largest numbe is ${randomNumbers[8]}`);


// *********************************Question3**************************
let threeRandomNumbers = [];
for (let j=0 ; ; j++ ){

    for(let i =0 ; i <3 ; i++){
        threeRandomNumbers [i] = Math.floor(Math.random()*9)+1;
    }
    if ((threeRandomNumbers[0] + threeRandomNumbers[1] - threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }
    else if ((threeRandomNumbers[0] - threeRandomNumbers[1] + threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }else if ((threeRandomNumbers[0] - threeRandomNumbers[1] - threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }
}


// *********************************Question4**************************
let numbers = [];

for (let i = 0 ; i < 100 ; i++){
    numbers[i] = i;
}

for (let i = 11 ; i <= 99 ; i = i+11 ){
    console.log(numbers[i]);
}


