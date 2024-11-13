// Chapter 12 - 13
// Assignmnet 1
// let input = prompt("Enter a single character:");
// if (input.length !== 1) {
//     console.log("Please enter a single character.");
// } else {
//     let asciiCode = input.charCodeAt(0);
//     if (asciiCode >= 48 && asciiCode <= 57) {
//         console.log("The character is a number.");
//     }
//     else if (asciiCode >= 65 && asciiCode <= 90) {
//         console.log("The character is an uppercase letter.");
//     }
//     else if (asciiCode >= 97 && asciiCode <= 122) {
//         console.log("The character is a lowercase letter.");
//     }
//     else {
//         console.log("The character is neither a number nor a letter.");
//     }
// }

// Assignmnet 2
// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Please enter valid integers.");
// } else {
//     if (num1 > num2) {
//         console.log(`The larger number is: ${num1}`);
//     } else if (num2 > num1) {
//         console.log(`The larger number is: ${num2}`);
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }

// Assignmnet 3
// let number = parseFloat(prompt("Enter a number:"));

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {
//     if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// Assignment 4
// let char = prompt("Enter a single character:");

// if (char.length !== 1) {
//     console.log("Please enter a single character.");
// } else {
//     char = char.toLowerCase();
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log(true);  // It's a vowel
//     } else {
//         console.log(false); // It's not a vowel
//     }
// }

// Assignment 5
// const correctPassword = "mySecret123";
// let userPassword = prompt("Enter your password:");
// if (userPassword === "") {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

//Assignment 6
// let greeting;
// let hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

// Assignment 7
// let time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900):"));

// if (isNaN(time) || time < 0 || time > 2359) {
//     console.log("Invalid input. Please enter a time between 0000 and 2359.");
// } else {
//     let hour = Math.floor(time / 100);
//     let minutes = time % 100;

//     if (minutes < 0 || minutes >= 60) {
//         console.log("Invalid time format. Please enter valid minutes (00-59).");
//     } else {
//         let period = (hour >= 12) ? "PM" : "AM";
//         hour = (hour === 0) ? 12 : (hour > 12) ? hour - 12 : hour;

//         let formattedTime = `${hour}:${minutes.toString().padStart(2, "0")} ${period}`;
//         console.log(`The time in 12-hour format is: ${formattedTime}`);
//     }
// }

// Chapter 14 - 16
// Assignment 1
        // let studentNamesLiteral = [];

        // let studentNamesObject = new Array();

        // let stringArray = ["Apple", "Banana", "Cherry"];

        // let numbersArray = [10, 20, 30, 40, 50];

        // let booleanArray = [true, false, true];

        // let mixedArray = ["Hello", 42, true, 3.14];

        // let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

        // let qualificationsList = document.getElementById("qualificationsList");
        // qualifications.forEach((qualification, index) => {
        //     let listItem = document.createElement("li");
        //     listItem.textContent = `${index + 1}) ${qualification}`;
        //     qualificationsList.appendChild(listItem);
        // });

// Assignment 2
        // let studentNames = ["Alice", "Bob", "Charlie"];

        // let studentScores = [450, 380, 425];

        // const totalMarks = 500;

        // let outputDiv = document.getElementById("output");

        // for (let i = 0; i < studentNames.length; i++) {
        //     let percentage = (studentScores[i] / totalMarks) * 100;
        //     let message = `${studentNames[i]}: Score = ${studentScores[i]}, Percentage = ${percentage.toFixed(2)}%`;

        //     let paragraph = document.createElement("p");
        //     paragraph.textContent = message;
        //     outputDiv.appendChild(paragraph);
        

// Assignment 3
// let colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
// document.write('<p>Initial array of colors: ' + colors.join(', ') + '</p>');

// let newColorBegin = prompt('What color would you like to add to the beginning of the array?');
// colors.unshift(newColorBegin);
// document.write('<p>Array after adding "' + newColorBegin + '" to the beginning: ' + colors.join(', ') + '</p>');

// let newColorEnd = prompt('What color would you like to add to the end of the array?');
// colors.push(newColorEnd);
// document.write('<p>Array after adding "' + newColorEnd + '" to the end: ' + colors.join(', ') + '</p>');

// let newColor1 = prompt('Add another color to the beginning of the array:');
// let newColor2 = prompt('Add one more color to the beginning of the array:');
// colors.unshift(newColor1, newColor2);
// document.write('<p>Array after adding two colors to the beginning: ' + colors.join(', ') + '</p>');

// colors.shift();
// document.write('<p>Array after deleting the first color: ' + colors.join(', ') + '</p>');

// colors.pop();
// document.write('<p>Array after deleting the last color: ' + colors.join(', ') + '</p>');

// let indexToAdd = prompt('At which index would you like to add a color?');
// let colorToAdd = prompt('What color would you like to add?');
// indexToAdd = parseInt(indexToAdd);  // Convert to an integer
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write('<p>Array after adding "' + colorToAdd + '" at index ' + indexToAdd + ': ' + colors.join(', ') + '</p>');

// let indexToDelete = prompt('At which index would you like to delete color(s)?');
// let numberToDelete = prompt('How many colors would you like to delete?');
// indexToDelete = parseInt(indexToDelete); // Convert to integer
// numberToDelete = parseInt(numberToDelete); // Convert to integer
// colors.splice(indexToDelete, numberToDelete);
// document.write('<p>Array after deleting ' + numberToDelete + ' color(s) starting from index ' + indexToDelete + ': ' + colors.join(', ') + '</p>');        

// Assignment 4
//  let StudentScores = [85, 92, 78, 90, 88, 76, 95];
//  document.write('<p>Original Scores: ' + StudentScores.join(', ') + '</p>');

//  StudentScores.sort(function(a, b) {
//      return a - b;
//  });
//  document.write('<p>Sorted Scores (Ascending): ' + StudentScores.join(', ') + '</p>');

//  Assignment 5
//     let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar', 'Rawalpindi', 'Sawat'];
//     document.write('<p>Original Cities: ' + cities.join(', ') + '</p>');
//     let selectedCities = cities.slice(0, 3);

//     document.write('<p>Selected Cities (First 3): ' + selectedCities.join(', ') + '</p>');

// // Assignment 6
// var arr = ["This ", " is ", " my ", " cat"];
// var resultString = arr.join(''); 

// document.write('<p>The single string is: ' + resultString + '</p>');    

// // Assignment 7
// let fifoQueue = [];
//     fifoQueue.push('Keyboard');
//     fifoQueue.push('Mouse');
//     fifoQueue.push('Printer');

//     document.write('<p>Queue after adding items: ' + fifoQueue.join(', ') + '</p>');
//     let firstOut = fifoQueue.shift();
//     document.write('<p>First item removed (FIFO): ' + firstOut + '</p>');

//     let secondOut = fifoQueue.shift();
//     document.write('<p>Second item removed (FIFO): ' + secondOut + '</p>');

//     document.write('<p>Queue after removing items: ' + fifoQueue.join(', ') + '</p>');

// Assignment 8    
    let manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
    document.write('<select>');

    for (let i = 0; i < manufacturers.length; i++) {
        document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
    }

    document.write('</select>');

// Chapter 17 - 20
// Assignment 1    
    let multidimensionalArray = [];

    multidimensionalArray.push([1, 2, 3]);
    multidimensionalArray.push([4, 5, 6]);
    multidimensionalArray.push([7, 8, 9]); 

    document.write('<p>Multidimensional Array: </p>');
    document.write('<pre>' + JSON.stringify(multidimensionalArray, null, 2) + '</pre>');

    let specificElement = multidimensionalArray[1][2];
    document.write('<p>Accessed Element (at index [1][2]): ' + specificElement + '</p>');

// Assignment 2
const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  
  console.log("Matrix:");
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }

// Assignment 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// Assignment 4
// let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// console.log(`Multiplication Table of ${tableNumber}:`);
// for (let i = 1; i <= tableLength; i++) {
//   console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);  
// }

// Assignment 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("List of fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Assignment 6
// a. Counting from 1 to 15
let counting = [];
for (let i = 1; i <= 15; i++) {
  counting.push(i);
}
console.log("Counting:", counting.join(", "));

// b. Reverse counting from 10 to 1
let reverseCounting = [];
for (let i = 10; i >= 1; i--) {
  reverseCounting.push(i);
}
console.log("Reverse counting:", reverseCounting.join(", "));

// c. Even numbers from 0 to 20
let evenNumbers = [];
for (let i = 0; i <= 20; i += 2) {
  evenNumbers.push(i);
}
console.log("Even:", evenNumbers.join(", "));

// d. Odd numbers from 1 to 19
let oddNumbers = [];
for (let i = 1; i < 20; i += 2) {
  oddNumbers.push(i);
}
console.log("Odd:", oddNumbers.join(", "));

// e. Series: 2k, 4k, 6k, ..., 20k
let series = [];
for (let i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}
console.log("Series:", series.join(", "));

// Assignment 7
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("What do you want to order sir / maam:").toLowerCase();

// if (A.includes(userInput)) {
//   alert(userInput + " is available in the bakery.");
// } else {
//   alert(userInput + " is not available We are sorry!");
// }

// Assignment 8
let A = [24, 53, 78, 91, 12];
let largest = A[0];
for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
console.log("The largest number in the array is:", largest);

// Assignment 9
let B = [24, 53, 78, 91, 12];
let smallest = B[0];
for (let i = 1; i < B.length; i++) {
  if (B[i] < smallest) {
    smallest = B[i];
  }
}
console.log("The samllest number in the array is:", smallest);

// Assignment 10
console.log("Multiples of 5 from 1 to 100:");
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}