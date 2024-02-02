// var persons = [
//     {firstname : "Malcom yadav"},
//     {firstname : "Kaylee yadav"},
//     {firstname : "Jayne"}
//   ];
  
// var  result=persons.map((item)=>{
//     let fullname=item.firstname.split(" ")

//     if(!fullname[1]){
//         fullname.push("kumar")
//     }
//     let firstname =fullname.join(" ");
//     return{firstname}
// })

// const products=[
//     {name:"Product 1", price:20, category:"Electronics"},
//     {name:"Product 2", price:30, category:"Clothes"},
//     {name:"Product 3", price:40, category:"Electronics"},
//     {name:"Product 4", price:50, category:"Clothes"},
//     {name:"Product 5", price:60, category:"Clothes"},
//     {name:"Product 6", price:70, category:"Electronics"},
//     {name:"Product 7", price:80, category:"Clothes"},
//     {name:"Product 8", price:90, category:"Electronics"},
// ]

// const result = products.reduce((a, b) => {
//     const category = b.category;
//     if (!a[category]) {
//       a[category] = [];
//     }
//     a[category].push(b);
//     return a;
//   })
//   const res=result.map((category)=>{
//     const rse=result[category].reduce((a,b)=> a+b.price,0);
//     return {category:category}
//   })

// let day=parseFloat(prompt("Enter time"));
// if(day>6 && day<=12){
//   console.log("Good Morning");
// }
// else if(day>12 && day<=17){
//   console.log("Good Afternoon")
// }
// else if(day>17 && day<=19){
//   console.log("Good Evening")
// }
// else if(day>19 && day<=24){
//   console.log("Good night")
// }
// else{
//   console.log("Invalid Time.....")
// }

// let num=parseFloat(prompt("Enter a number"));
// if(num>0){
//   console.log("Positive number",num)
// }
// else{
//   console.log("Negative Number",num)
// }

// let num=parseFloat(prompt("Enter a number"));
// if(num==10){
//   console.log("num is equal to 10")
// }
// else if(num==20){
//   console.log("num is equal to 20")
// }
// else if(num==25){
//   console.log("num is equal to 25")
// }
// else if(num==30){
//   console.log("num is equal to 30")
// }
// else if(num==30){
//   console.log("num is equal to 35")
// }
// else if(num==40){
//   console.log("num is equal to 40")
// }
// else if(num==40){
//   console.log("num is equal to 45")
// }
// else if(num==50){
//   console.log("num is equal to 50")
// }
// else{
//   console.log("num is not equal to 10, 20, 25,30,35,40,45,50")
// }

// let num1=parseFloat(prompt("Enter first number"));
// let num2=parseFloat(prompt("Enter second number"));
// if(num1<num2){
//   console.log(num1 + " is less than " + num2)
// }
// else{
//   console.log(num1 + " is grater than " + num2)
// }

// let num=parseFloat(prompt("Enter a number"))
// if(num==1){
//   console.log("One","I")
// }
// else if(num==2){
//   console.log("Two","II")
// }
// else if(num==3){
//   console.log("Three","III")
// }
// else if(num==4){
//   console.log("Four","IV")
// }
// else if(num==5){
//   console.log("Five","V")
// }
// else if(num==6){
//   console.log("Six","VI")
// }
// else if(num==7){
//   console.log("Seven","VII")
// }
// else if(num==8){
//   console.log("Eight","VIII")
// }
// else if(num==9){
//   console.log("Nine","IX")
// }
// else if(num==10){
//   console.log("Ten","X")
// }
// else{
//   console.log("Invalid Number")
// }

// console.log(""==[ ])

// var arr=[66,1,2,3,4,6,4,2223,5544,1132];
// var a=[]
// for(var i=0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         a.push(arr[i])
//         // console.log(arr[i])
        
//     }
// }
// console.log(a)

// let star= 5;
// for (let item = 1; item <= star; item++) {
    
//     console.log("*".item)
    
// }

// var i,j;
//  for(i=1; i <= 5; i++)
//  {
//   for(j=1; j<=i; j++)
//  {
   
//    document.write('*');
//   }
//    document.write('<br />');
//   }
// let num=parseFloat(prompt("Enter number"))
// for(i=1; i<=num;i++){
//   for(let j=1; j<=i; j++){
//     document.write("*")
//   }
//   document.write("<br/>")
// }

// for(let i=1;i<=num;i++){
//   for(let k=1;k<=num-i;k++){
//     document.write("&nbsp;&nbsp")
//   }
//   for(let j=1;j<=i;j++){
//     document.write("*")
//   }
//   for(l=2;l<=i;l++){
//     document.write("*")
//   }
//   document.write("<br/>")
// }

// Reverse String
// var str="ram is a good boy";
// var res=str.split(" ").map(function(word){
//   return word.split("").reverse().join("")
// })
// console.log(res.join(" "))


// check if an object is an array or not
// function checkArray(ram){
//  console.log(Array.isArray(ram))
// }
// checkArray([])
// checkArray({})

// how to empty an array in js
// var arr=[1,2,3,4,5]
// arr.length=0
// console.log(arr)

// how to check if a number is an integer
// var a=12.0
// if(a%1===0){
//   console.log("integer")
// }
// else{
//   console.log("Not !")
// }

// make this work:duplicate([1,2,3,4,5])
// function duplicate(arr){
//   return arr.concat(arr)
// }
// console.log(duplicate([1,2,3,4,5]))

// Write a function that reverse a number
// function reversew(num){
//   return Number(num.toString().split("").reverse().join(""))
// }
// console.log(reversew(12))

// var ram=prompt("Enter String")
// var res=ram.split(" ").map(function(a){
//   return a.split("").reverse().join("")
// })
// console.log(res.join(" "))

// function checkArray(ram){
//   console.log(Array.isArray(ram))
// }
// checkArray([])
// checkArray({})

// var a=[12,3,4,5]
// a.length=0
// console.log(a)

// var s=parseFloat(prompt("Enter a numer"))
// if(s%1===0){
//   console.log("Integer number")
// }
// else{
//   console.log("Not Integer number")
// }

// var num=parseFloat(prompt("enter number"))
// for(let i=1; i<=num;i++){
//   for(let j=1;j<=num-i;j++){
//     document.write("&nbsp;&nbsp")
//   }
//   for(let k=1;k<=i;k++){
//     document.write("*")
//   }
//   for(let l=2;l<=i;l++){
//     document.write("*")
//   }
//   document.write("<br/>")
// }

// for(let i=1;i<=num;i++){
//     for(let k=1;k<=num-i;k++){
//       document.write("&nbsp;&nbsp")
//     }
//     for(let j=1;j<=i;j++){
//       document.write("*")
//     }
//     for(l=2;l<=i;l++){
//       document.write("*")
//     }
//     document.write("<br/>")
//   }


// let num=parseFloat(prompt("Enter a number"));
// for(let i=1;i<=num;i++){
//   for(let k=1;k<=num-i;k++){
//     console.log("&nbsp;&nbsp")
//   }
//   for(let j=1; j<=i;j++){
//    console.log("*")
// }
//   for(let l=2;l<=i;l++){
//     console.log("*")
// }
//   console.log("<br/>")
// }


// for(let i=1;i<=num;i++){
//   for(let j=1;j<=i;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// for(let i=1;i<=num;i++){
//   for(let j=1;j<=num;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }


// for(let i=1;i<=num;i++){
//   for(let j=1;j<=num-i+1;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }
// for(let i=1;i<=num;i++){
//   for(let j=1;j<=i;j++){
//     document.write(j)
//   }
//   document.write("<br>")
// }

// for(let a=1;a<=num;a++){
//   for(let j=1;j<=num-a+1;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// for(let i=1;i<=num;i++){
//   for(let k=1; k<=num-i;k++){
//     document.write("&nbsp;&nbsp;")
//   }
//     for(let j=1;j<=i;j++){
//       document.write("*")
//   }
//   for(let l=2;l<=i;l++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++)
//     for (var j = 0; j < i; j++)
//         if (Arr[i] < Arr[j]) {
//             var x = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = x;
//         }


// let str=prompt("Enter a String");
// let res=str.split(" ").map(function(w){
//   return w.split("").reverse().join("")
// })
// console.log(Number(res.join(" ")))

// let arr=[1,2,3,4,5];
// arr.length=0
// console.log(arr)


// let a=[]
// let b={}
// console.log(typeof(a))
// console.log(typeof(b))

// for (var i = 5; i >= 1; i--) {
//     var star = "";
//     for (var j = i; j <=5; j++) {
//     star += "*";
//        }
//        console.log(star);
//     }

// let num=parseFloat(prompt("Enter a number"))
// Squar star
// let str=""
// for(let i=0;i<num;i++){
//     for(let j=0;j<num;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

// Hollow Star
// for(let i=0;i<num;i++){
//     for(let j=0;j<num;j++){
//         if(i===0||i===num-1){
//             str+="*"
//         }
//         else{
//             if(j===0||j===num-1){
//                 str+="*"
//             }
//             else{
//                 str+=" "
//             }
//         }
//     }
//     str+="\n"
// }
// console.log(str)

// right Tringle
// for(let i=1;i<=num;i++){
//     for(let j=0;j<=num-i;j++){
//         str+=" "
//     }
//     for(let k=0; k<i;k++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

// Left Tringle
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)
// for(let i=1;i<=100;i++){
//     // let str=""
//     if(i%3==0 && i%5==0){
//         console.log("foobar",i, "3 or 5")
//     }
//     else if(i%3==0){
//         console.log("foo",i, "3")
//     }else if(i%5==0){
//         console.log("bar",i,"5")
//     }

// }

// var arry=[[1,0,3,5,0],[0,3,2,0,4,0,3],[0,1,3,0,0,3]];
// for(i=0;i<arry;++i){
//     console.log(arry[i])
// }
// let b=0
// for(let i=arry;i>0;i++){
//     b=a%10
//     if(b==0){
//         count++
//     }
//     a=parseInt(a/10)
// }
// console.log(count)


// let arr=[1,2,3,5,2,5,9,8,3,5,2,5]
// console.log(arr)
// let a=3

// let num=0
// for(i=0;i<arr.length;++i){
//     if(arr[i]==a)
//     num++
// }
// console.log(num)


// var array = [
//   [1, 0, 3, 5, 0],
//   [0, 3, 2, 0, 4, 0, 3],
//   [0, 1, 3, 0, 0, 3]
// ];

// Function to count zeros in a 2D array
// function countZeros(arr) {
  // var zeroCount = 0;
  // var arr=0
  
  // for (var i = 0; i < arr.length; i++) {
  //     for (var j = 0; j < arr[i].length; j++) {
  //         if (arr[i][j] === 0) {
  //         str=""
  //      str+= zeroCount++;
  //     }
  //   }
  // }

//   return zeroCount;
// }

// Call the function and log the result
// var result = str(array);
// console.log("Number of zeros: " + result)


// var arry=[1,3,5,8,7,5,6,8,7,6,9,8,5,12,35,6,7,98,5,63,24,32];
// var a=[]
// for(var i=1;i<=arry.length;i++){
//   if(arry[i]%2==0){
//     a.push(arry[i])
//   }
  
// }
// console.log(a)

// var str="hello world"
// var a=""
// for(i=str.length-1;i>=0;i--){
//   a+=str[i]
// }
// console.log(a);

// var typed=new typed(".text",{
//   String:["Fronted developer","Backend developer","Graphic Designer"],
//   typeSpedd:100,
//   backSpeed:100,
//   backDelay:1000,
//   loop:true
// });


// function ram(num){
//   var rev=0
//   while(num>0){
//     var rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
//   }
//   return rev
// }
// console.log(ram(12345))

// function alphabate(str){
//   return str.split("").sort().join("");
// }
// console.log(alphabate("decab"));

// function cap(str){
//   allwords=str.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase()+word.substring(1)
//   })
//   return allwords.join(" ")
// }
// console.log(cap("sonu yadav kya ho rha hai"))

// for(let i=1;i<=45;i++){
//   if(i%3==0 && i%5==0){
//     console.log("FizzBuzz",i)
//   }
//   else if(i%3==0){
//     console.log("Fizz",i)
//   }
//   else if(i%5==0){
//     console.log("Buzz",i)
//   }
// }

// for(let i=10;i<=100;i++){
//   if(i%3==0){
//     console.log("divide by 3",i);
//   }
//   else if(i%5==0){
//     console.log("divide by5",i);
//   }
//   else if(i%7==0){
//     console.log("divide by 7",i)
//   }
// }


// let name=prompt("Enter");
// switch(name){
//         case "shyam":
//                 console.log("Hello shyam");
//         case "ram":
//                 console.log("hello ram");
//         case "dinesh":
//                 console.log("Hello dinesh");
//         case "Mohan":
//                 console.log("hello Mohan");
//         case "shohan":
//                 console.log("Hello Shohan");
//         case "raman":
//                 console.log("hello raman");
//         case "ayaush":
//                 console.log("Hello Ayush");
//         case "sanu":
//                 console.log("hello sanu");
//         case "mayank":
//                 console.log("Hello mayank");
//         case "kumar":
//                 console.log("hello kumar");
//                 default:
//                         console.log("Invalid")
// }


