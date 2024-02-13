                // Lecture 1

// console.log is used to log (print) a message to the console.
// console.log("Hello world");
// console.log("sonu yadav!");


// Variables in js
// Variables are container for Data.
// age =24
// console.log(age);
// name="sonu"
// console.log(name);

// 3 type of variable in js
// 1:- var
// 2:- let
// 3:- const

// var : Variable can be re-declared & update. A global scope variable
// let : Variable cannot be re_declared but can be update.A block scope variable.
// const : variable cannot be re-declared 0r update. A block scope vraible

// Example of var
// var age=55
// var age=67
// var age=43
// console.log(age);

// Example of let
// let age =45
// age=30
// age=20
// console.log(age);

// Example of const
// const author="Sonu Yadav"
// author="monu yadav"
// console.log(author);

// Data Types in js
// 2 type of data type in js
// 1:- Primitive data type
// 2:- Non Primitive data type

// 1:- Primitive data type
// 1: Number  (1,2,3,4,5 / -1,-2,-3,-4,-5 / 21.4, 23.5)
// 2: Null    (let a=Null)
// 3: String  ("A to Z Letters")
// 4: Symbol  (@, !, #, $, %, ^, &, *,)
// 5: Boolean (true / false)
// 6: Bigint  (Bigint(12334))
// 7: Undefined (let a=)

// 2:- Non-primitve data type
// 1:- Object (Collection of values)
// 2:- Array

// const students={
//     fullName:"Sonu Yadav",
//     age:20,
//     cgpa:8.2,
//     isPass:true
// };

// console.log(students["age"]);

// const product={
//     name:"Parker Jotter Standard",
//     rating:4,
//     price:270,
//     offers:5
// }
// console.log(product);

// const profile={
//     idName:"Sonu yadav",
//     post:195,
//     followers:5740,
//     following:4,
//     isFollow:true,
//     information:"Dice Academy"
// }
// console.log(profile);
// console.log(typeof profile.post);


                // Lecture 2

// Comments in Js
// (Part of code which is not executed)
// This is a single line comments
/* This is a multi-line
 comments*/


// Operatores & Conditionl Statements
// Used to perform some operation on data
        // 1 Arithmetic Operators
                // 1 Additon
                // 2 Subtraction
                // 3 Multiplication
                // 4 Division
                // 5 Modulus
                // 6 Exponentiation
                // 7 Increment
                // 8 Decrement

// Example of Addition
// let a=12;
// let b=10;
// console.log("a+b= ",a+b);

// Example of Subtraction
// let a=12;
// let b=10;
// console.log("a-b= ",a-b);

// Example of Multiplication
// let a=12;
// let b=10;
// console.log("a*b= ",a*b);

// Example of Division
// let a=12;
// let b=10;
// console.log("a/b= ",a/b);

// Example of Modulus
// let a=12;
// let b=10;
// console.log("a%b= ",a%b);

// Example of Exponention
// let a=12;
// let b=2;
// console.log("a**b= ",a**b);

// Example of Increment
// let a=12;
// a++
// console.log("a++= ",a);

// Example of Addition
// let a=12;
// a--
// console.log("a--= ",a);


        // 2 Assignment Operators
            // 1 Assignment =
            // 2 +=
            // 3 -=
            // 4 *=
            // 5 %=
            // 6 **=
// Example of =
// a=5;

// Example of +=
// let a=5;
// let b=2;
// a+=4
// console.log(a);

// Example of -=
// let a=5;
// let b=2;
// a-=4
// console.log(a);

// Example of *=
// let a=5;
// let b=2;
// a*=4
// console.log(a);

// Example of %=
// let a=5;
// let b=2;
// a%=4
// console.log(a);

// Example of **=
// let a=5;
// let b=2;
// a**=2
// console.log(a);

// Example of /=
// let a=5;
// let b=2;
// a/=4
// console.log(a);


        // 3 Comparison Operators
            // 1 Equal to ==
            // 2 Equal to & type ===
            // 3 Not equal to !=
            // 4 Not equal to & type !==
            // 5 Grater Than >
            // 6 Less Than <
            // 7 Grater Than equal to >=
            // 8 Less than equal to <=
// Example of equal to ==
// let a=10;
// let b=12;
// console.log(a==b);

// Example of equal to & type ===
// let a=10;
// let b=10;
// console.log(a===b);

// Example of Not equal to !=
// let a=10;
// let b=10;
// console.log(a!=b);

// Example of Not equal to & type !==
// let a=10;
// let b=12;
// console.log(a!==b);

// Example of Grater than >
// let a=10;
// let b=12;
// console.log(a>b);

// Example of Grater than equal to>=
// let a=10;
// let b=10;
// console.log(a>=b);

// Example of Less than <
// let a=10;
// let b=12;
// console.log(a<b);

// Example of Less than equal to <=
// let a=10;
// let b=12;
// console.log(a<=b);


        // 4 Logical Operators
            // 1 Logical AND &&
            // 2 Logical OR ||
            // 3 Logical NOT !
// Example of Logical AND &&
// let a =6
// let b =5
// let cond=a>b&&b<a;
// console.log(cond);

// Example of Logical OR ||
// let a =6
// let b =5
// let cond=a>b||b>a;
// console.log(cond);

// Example of Logical Not !
// let a = 6
// let b = 5
// console.log(!(a<b));


// Conditional Statement
// To inmplement some condition in the code

// 1 if Statement
// 2 if else
// 3 else if

// Example of if Statement
// let age=12
// if(age>18){
//     console.log("you can vote");
// }
// let mode="dark-mode"
// if(mode==="dark-mode"){
//     console.log("black");
// }

// Example of if else-if else Statement
// let a= 4
// let b=23
// if(a>b){
//     console.log("grater");
// }else{
//     console.log("less");
// }

// let age = 13;
// if(age>=18){
//     console.log("You can vote");
// }
// else{
//     console.log("not vote");
// }

// Check number even or odd
// let num=15;
// if(num%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// let age =160;
// if(age<18){
//         console.log("Junioe");
// }
// else if(age>60){
//         console.log("Senior");
// }
// else{
//         console.log("Middle");
// }


// Ternary Operators
// Condition ? true output: false output
// Example of ternary operators
// let age =18;
// let a=age>18 ? "adult":"not adult";
// console.log(a)

// Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of or not.
// let num=parseFloat(prompt("Enter a number"));
// if(num%5==0){
//         console.log(num, "is multiple of 5");
// }
// else{
//         console.log(num, "is not a multiple of 5");
// }

// Write a code which can give grades to student according to their scores
// let num=parseFloat(prompt("Enter a number"));
// if(num>=80 && num<=100){
//         console.log("Grade A");
// }
// else if(num>=70 && num<=79){
//         console.log("Grade B");
// }
// else if(num>=60 && num<=69){
//         console.log("Grade C");
// }
// else if(num>=50 && num<=59){
//         console.log("Grade D");
// }
// else if(num>=0 && num<=49){
//         console.log("Grade F");
// }else{
//         console.log("Invaild Number");
// }


// Lecture 3
// Loops and Strings
// Loops
// Loops are used to excute a piece of code again & again.

// for loop
// for(let i=1;i<=5;i++){
//    console.log(i);
// }

// while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++    
// }

// do while loop
// syntax
// do{
        //do some work
// }while(condition)

// example
// let i=10;
// do{
//         console.log(i);
//         i--
// }while(i>=1);

// let gamenum=25;
// let guess=prompt("Guess the game number: ");
// while(guess!=gamenum){
//         guess=prompt("you are entered wrong number, guess again")
// }
// console.log("Congratualtions, you entered thr right number!");


// Strings in js
// String is a sequance od characters used to represent text.
// Create string
// let str="Sonu Yadav"
// console.log(str.length);
// console.log(str[1]);

// Template Literals in js
// A way to have embedded expressions in strings
//      `this is a template literal`

// String Interpolation
// To create string by doing substitution of placeholders
// `string text ${expression} string text` 

// let n=10;
// for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//                 if(j==1||i==j||j==n){
//                         process.stdout.write("*")
//                 }else{
//                 process.stdout.write(" ")
//                 }
//         }
//         console.log();
// }

// let n=7;
// for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//                 if(j==1){
//                         process.stdout.write("*")
//                 }else{
//                         process.stdout.write(" ")

//                 }
//         }
//         console.log();
// }
// console.log("Sonu\tYadav");
// String Methods in js
// These are built in function to manipulate a string
// let str="Sonu yadav"
// let res=str.toUpperCase()
// let res=str.toLowerCase()
// let res=str.trim()//remove whitespace
// console.log(res);

// 3 slice(start,end?)//returne part of string
// let str="StarXprt"
// let res=str.slice(1,4)
// console.log(res);

// 4 concat(str2)//joins str2 with str1
// let str1="sonu"
// let str2="yadav"
// let res=str1.concat(str2)
// console.log(res);

// 5 replace(searchval,newval)
// let str="hello"
// let res=str.replace("lo","p")
// console.log(res);

// 6 charAt(idx)
// let str="Sonu Yadav"
// let res=str.charAt(3)
// console.log(res);

// let str=prompt("Enter user name");
// let str1="@";
// let str2=str.length;
// let res=str1+str+str2
// console.log(res);

                // Lecture 4
// Array in js
// Collections of items

// Create Array
// let mark=[78,45,76,90,54,34]
// console.log(mark);
// let heros=["Avi","Nitin","Azhar","Ayush","Aryan","Tina"];
// for(let i=0;i<heros.length;i++){
//         console.log(heros[i]);
// }
// for(let el of heros){
//         console.log(el);
// }

// let cities=["delhi","pune","punjab","Rajstan"]
// for(let el of cities){
//         console.log(el);
// }

// Lets Practice Question
// for a given array with marks of students ->[85,97,44,37,76,60] find the average marks of the entire class.
// let marks=[85,97,44,37,76,60];
// let sum=0
// for(let val of marks){
//         sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class=${avg}`);


//  offer
// let items=[250,645,300,900,50];
// let i=0
// for(let val of items){
//         console.log(`value at index &(index) = ${val}`);
//         let offer=val/10
//         items[i]=items[i]-offer
//         console.log(`value after offer = ${items[i]}`);
//         i++
// }

// for(let i=0;i<items.length;i++){
//         let offer=items[i]/10;
//         items[i]-=offer;
// }
// console.log(items);

// Array Methods
// 1 Push(): add to end
// let items=["potato","apple","litchi","tomati"];
// items.push("chips","burger","paneer")
// console.log(items);
// 2 Pop(): delete from end to return
// let items=["potato","apple","litchi","tomati"];
// items.pop()
// console.log(items);
// 3 toString(): converts array to string
// let items=["potato","apple","litchi","tomato"];
// console.log(items.toString());

// 4 concat(): joins multiple arrays & returns result.
// let items=["potato","apple","litchi","tomati"];
// let dc_heros=["Superman","batman"];
// let heros=items.concat(dc_heros)
// console.log(heros);

// 5 unshift(): add to start
// let items=["potato","apple","litchi","tomati"];
// items.unshift("chilli")
// console.log(items);
// 6 shift(): delete from start & return
// let items=["potato","apple","litchi","tomati"];
// items.shift()
// console.log(items)

// slice(): returns a piece of the array
// slice(startldx,endldx)
// let items=["potato","apple","litchi","tomati"];
// console.log(items);
// console.log(items.slice(1,3));


// splice(): change original array (add,remove,replace)
// splice(startldx,delCount,newEl1)
// let items=[1,2,3,4,5,6,7,8,9,10];
// items.splice(3,1)
// console.log(items);

// practice
// let arr=["Blomberg","Microsoft","uber","Google","IBM","Netflix"]
// arr.shift()
// console.log(arr);
// arr.splice(1,1,"ola")
// console.log(arr);
// arr.push("Amazon")
// console.log(arr);


//      Lecture 5
// Function and Methods
// Block of code that performs a specific task, can be invoke whenever needed.

//      Function Definition                             Function call
        // function functionname(){                     functionName()
                // do some work
        // }

        // function functionName(param1,param2){
        //         do some work
        // }

// function myFunction(msg){
//         console.log(msg);
// }
// myFunction("I am sonu yadav");

// function sum(a,b){
//         console.log(a+b);
// }
// sum(1,3)

// 1 Arrow function
// Compact way of writing a function
// const functionName=(param1,param2)=>{
        // do some work
// }

// sum function
// function sum(a,b){
//         return a+b;
// }
//          OR
// const sum=(a,b)=>{
//         return a*b
// }
// console.log(sum(3,5));



// Multiplication function
// function mul(a,b){
//         return a*b
// }
// let arrowMul=(a,b)=>{
//         return a*b
// }
// arrowMul=7;

// const str=()=>{
//         console.log("Hello world");
// }

// Qs.  Create a function using the "function" keywords that takes a string as an arguments & returns the number of vowels in the string.
// function countVowels(str){
//         let count=0;
//         for(const char of str){
//                 if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//                         count++;
//                 }
//         }
//         return count;
// }

// const countVow=(str)=>{
//         let count=0;
//         for(const char of str){
//                 if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//                         count++;
//                 }
//         }
//         return count;
// }


// forEach Loop in Array
// arr.forEach(callbackfunctio)
// callbackFunction: Here, it is a function to exceute for each in the array

// A callback is a function passed as an argument to another function.
// arr.forEach((val)=>{
        // console.log(val);
// })

// let arr=["dellhi"]
// arr.forEach((val,idx)=>{
//         console.log(val.toUpperCase(),idx,arr);
// })

// let str=[1,2,0,3,4,5,0,3,6,7,8,1,2,3,4,5,6,7,1,2,3,4,0,5,6,7,1,2,3,4,5,6,7]
// let count=0;
// for(let i=0;i<=str.length;i++){
//         if(str[i]==0){
//                 count++;
                 
//         }
// }
// console.log("Zero is",count,"times");


// function statement
// function sayhello(){
//         console.log("Hello Sonu");
// }
// sayhello();
// sayhello();

// function expression
// let a=function hi(){
//         console.log("Hi! Sonu");
// }
// a();

// param and argumnets
// function say(name){
//         console.log("Good mornining "+name);

// }
// say("sonu");
// say("Raman");


// let a=function say(name,age){
//         console.log("good Morning "+name);
//         console.log("your age is "+age);
// }
// a("sonu", 22)


// es6 fat arrow function
// let x=()=>{
//         console.log("sonu");
// }
// x();
// let x=(name)=>{
//         console.log("Hello "+name);
// }
// x("sonu");
// let x=(name,age)=>{
//         console.log("Good Morning "+name);
//         console.log("age "+age);
// }
// x("sonu",22);
