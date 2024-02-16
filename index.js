//write a JS function that converts farhenheiit into celcius
//use html form to get data
//by default, temp is fahrenheit 



const tempConverter = () => {
    const temp = Number(document.getElementById("temp").value);
    const tempIn = document.querySelector('input[name="type"]:checked').value;
  
    if (tempIn == "f") {
      const fahrenheit = (9 * temp) / 5 + 32;
      console.log(`The temp is ${fahrenheit}`);
      document.getElementById("tempresult").innerHTML = fahrenheit;
    } else {
      const celsius = ((temp - 32) * 5) / 9;
      console.log(`The temp is ${celsius}`);
      document.getElementById("tempresult").innerHTML = celsius;
    }
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

const factorial = (num) => (num === 0 || num === 1) 
? 1                                                                    //using Ternary operator
: num * factorial(num - 1);


const userInput = 5;
const res = factorial(userInput);
console.log(`The factorial of ${userInput} is: ${res}`);


// write a js function that returns the largest word in the scentences
//scentences: "I am a super long beautiful word" 

const largestWord = (scentence)=> scentence
    .split(" ")//["I","am","a"............]
    .sort((a, b)=>a.length-b.length)//[ "I","a","am".......,"beautiful"]
    .pop();//last omne pop



console.log(largestWord("I am a super long beautiful word"));


//write a js function that replaces the following kyword
//c=> mern stack
//He=>Tufan


//Input:Raktim is a C class Instructor. He is teaching c since 2023


const replaceKey=(input)=> {
    input = input.replace(/\b C \b/g, 'mern stack');
    input = input.replace(/\b He\b/g, 'Tufan');

    return input;
};

const inputString = "Tufan is a C class Instructor. He is teaching C since 2023";
const replacedString = replaceKey(inputString);

console.log(replacedString);

// https://github.com/jamesqquick/javascript-array-function-practice



// const people = [
//     { name: "Tufan Pandey", height: 175, firstName: "Tufan" },
//     { name: "Ayush Pandey", height: 160, firstName: "ayush" },
 
//   ];
  
//   // Get an array of all names
//   const allNames = people.map(person => person.name);
//   console.log("names:", allNames);
  
//   // Get an array of all heights
//   const allHeights = people.map(person => person.height);
//   console.log("heights:", allHeights);
  
//   // Get an array of objects with just name and height properties
//   const nameHeightArray = people.map(person => ({ name: person.name, height: person.height }));
//   console.log("Array of name and height objects:", nameHeightArray);
  
//   // Get an array of all first names
//   const allFirstNames = people.map(person => person.firstName);
//   console.log("All first names:", allFirstNames);


//   //write a js function that has the most common repeated character
//   ("find", "finish","finland")

//   const findChar=(arr)=>{
//     let res= "";
//   };
  
// //   const question = findChar["find", "finish", "finland"];
// //   console.log(re); 


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

const getEyes= (chars)=>{
    return chars.reduce(
        (prev,curr)=>{
            if(curr.eye_color==="blue"){
            prev.blue++;
            return prev;
            }
            if(curr.eye_color==="yellow"){
                prev.yellow++;
                return prev;
            }
            if(curr.eye_color==="brown"){
                prev.brown++;
                return prev;
             }
        }
    )
};