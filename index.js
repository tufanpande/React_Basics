//write a JS function that converts farhenheiit into celcius
//use html form to get data
//by default, temp is fahrenheit 



const convertTemperature=()=> {

    const fahrenheitInput = document.getElementById("fahrenheit").value;

     const celsius = (fahrenheitInput - 32) * (5/9);
     console.log(`The temp is ${fahrenheit}`);
    document.getElementById("result").innerHTML = fahrenheitInput + " Fahrenheit is " + celsius.toFixed(2) + " Celsius.";
};

const  time = 5;

if (time>4 &&time<5.5){
console.log("JS class is in session");
}else{
    console.log("Class has ended");
}

/*
= assign (variables)
== type check 
=== check type check + value check
*/
const gender= "male";
if (gender==="male" ){
    console.log("male");

}else{
    alert("male");
}


//  ternary operator

gender ==="male" 
? console.log("Male is ternary")
: console.log("female is ternary");



//Switch case

//write a js program to show to  show the result of current month
// expert :get month using date method


const exp = 1;
switch(exp){
    case 1:
        console.log("February");
        break;
        default:
            console.log("Invalid number");
         
}

//expert

const today =new Date().getMonth();
switch(today){
    case 1:
        console.log("February");
        break;
        default:
            console.log("Invalid Month");
         
}

//logical operator
//AND(&&)
//OR(||)
//NOT(!)

//===
//< >
// % + - /
// ++ (Urinary operator)=>Increases 1 value of variable
// --/-1

let num = 2;
num ++;
num +=1;
num = num +1;
console.log({num});

//LOOPS

//for()
//do{} while{}
//while()

//Print from  0-9

for(let i=0; i<10; i++){
    console.log(i);
}
//do While
let j= 0;
do{
    console.log({j});
    j++;

}while(j<=10);
//While
let k =0;
while(k<=10){
    console.log({k});
    k++;
}

//Function


//ES5

//function define
function sum(a,b){
    return a+b;

}
//call/Execte
const result =sum(2,5);


//ES6
const sums = (a,b)=>{
    return a+b;

};
//call
sums(2,5);


// write a function that  checks if the user is your name or not

const userCheck = (user, systemUser)=>{
    if(user!== systemUser ) return false;
    return true;
};

const resul = userCheck("tufan","tufan");
console.log({resul});

const resuls = userCheck("tufan","tpandey");
console.log({resuls});


//write a function that checks if the user age is baby ,teen adult, or old

const age = (age) => {
    if (age >= 0 && age <= 2) {
      return "Baby";
    } else if (age >= 3 && age <= 12) {
      return "Child";
    } else if (age >= 13 && age <= 19) {
      return "Teen";
    } else if (age >= 20 && age <= 60) {
      return "Adult";
    } else {
      return "Old";
    }
  };


const userAge = 64;
const user = age(userAge);
console.log(`User is a ${user}.`);

//write a js program to claculate the facorial of given number.

const factorial = (number) => (number === 0 || number === 1) 
? 1                                                                    //using Ternary operator
: number * factorial(number - 1);


const userInput = 1;
const res = factorial(userInput);
console.log(`The factorial of ${userInput} is: ${res}`);


