// if(some condition is true){
//     do something/excute
// }


// for loop 
/*
const packingList =["tootbrush","socks","camera","lens"];
console.log("the first listed item is " +packingList[0]);
console.log("the second listed item is " +packingList[1]);

console.log("Simple for loop");
for (let counter = 0; counter < packingList.length; counter++) {
   console.log(counter+1 +" . "+packingList[counter]);
   console.log("value of counter" +counter);

   // console.log(packingList[counter]);
}


console.log("for loop with multi exp");
for (let counter = 0; counter < packingList.length && counter<2; counter++) {
   console.log(counter+1 +" . "+packingList[counter]);
   console.log("value of counter" +counter);

}
*/
// console.log("Infinite for loop");
// for(;;){
//    console.log("Infinite");
// }

// console.log("series using for loop");
// for (let i = 1; i < 11; i++) {
//    console.log(i);
// }

// console.log("series using while loop");
// let i=1
// while(i=<10){ //condition
//  console.log(i);
//  i++;
// }

/*
console.log("packaging list  using while loop");
let counter = 0;
while(counter < packingList.length) {
   console.log(counter+1 +" . "+packingList[counter]);
   counter++;
   console.log("value of counter" +counter); 
  
}


console.log("All the items are packed");


console.log("series using do while loop");
let n1=1;

do{
   console.log("the value of the n1 is: "+n1);
   n1++;
}while(n1<11);

console.log("Conditional Statements");
const age=19;
if (age>20) {
   console.log("Hurrai! You are permitted to attend the session")
}else{
   console.log("You can attend only the beginner courses");
}


const webdev = ["aditya","sumit","avinash","deepak","amit"];
if (webdev<2) {
   console.log("You are allowed to attend the 2 to 1 session");
}
else{
   console.log("This batch is full, please attend after sometime");
}
*/

/*
const pass="Pass@123";
if (pass>=8) {
   console.log("The Length of password is alra8");
}
else{
   console.log("The Length of password  should be atleast 8 char");
}*/


function fab(){
   var A = 0;
   var B = 1;
   var C;

   var N = document.getElementById("number").value;

   document.write(A+"<br />");
   document.write(B+"<br />");

   for(var i=3; i <= N;i++)
   {
       C = A + B;
       A = B;
       B = C;

       document.write(C+"<br />");
   }
}

// code for password validation


const input = document.querySelector("input"),
showHide = document.querySelector(".show_hide"),
indicator = document.querySelector(".indicator"),
iconText = document.querySelector(".icon-text"),
text = document.querySelector(".text");
// js code to show & hide password
showHide.addEventListener("click", ()=>{
if(input.type === "password"){
input.type = "text";
showHide.classList.replace("fa-eye-slash","fa-eye");
}else {
input.type = "password";
showHide.classList.replace("fa-eye","fa-eye-slash");
}
});
// js code to show password strength (with regex)
let alphabet = /[a-zA-Z]/, //letter a to z and A to Z
numbers = /[0-9]/, //numbers 0 to 9
scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/; //special characters
input.addEventListener("keyup", ()=>{
indicator.classList.add("active");
let val = input.value;
if(val.match(alphabet) || val.match(numbers) || val.match(scharacters)){
text.textContent = "Password is weak";
input.style.borderColor = "#FF6333";
showHide.style.color = "#FF6333";
iconText.style.color = "#FF6333";
}
if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
text.textContent = "Password is medium";
input.style.borderColor = "#cc8500";
showHide.style.color = "#cc8500";
iconText.style.color = "#cc8500";
}
if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) && val.length >= 8){
text.textContent = "Password is strong";
input.style.borderColor = "#22C32A";
showHide.style.color = "#22C32A";
iconText.style.color = "#22C32A";
}
if(val == ""){
indicator.classList.remove("active");
input.style.borderColor = "#A6A6A6";
showHide.style.color = "#A6A6A6";
iconText.style.color = "#A6A6A6";
}
});
