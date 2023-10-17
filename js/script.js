// CHECK
// alert("Hello!");

// DATA COLLECTION

//ASK THE USER FOR THEIR FIRST NAME
const userName = prompt("Hello user! What's your name?"); 
console.log(userName, typeof userName);

//ASK THE USER FOR THEIR LAST NAME
const userLastName = prompt("Wonderful! Now, what's your last name?");
console.log(userLastName, typeof userLastName);

//ASK THE USER FOR THEIR FAVOURITE COLOR
const userFavColor = prompt("Almost there! What's your favourite color?");
console.log(userFavColor, typeof userFavColor);

// PROGRAM LOGIC
//Concatenate the strings
const password = userName + userLastName + userFavColor + 21;
console.log(password, typeof password); 

// Prepare the message to be printed
const message = `Here's your password: ${password}`;
console.log(message);

// OUTPUT
document.getElementById("password-result").innerHTML = message; 



