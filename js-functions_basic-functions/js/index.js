console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "THREE THOUSAND STITCHES";
const author = "SUDHA MURTHY";
let rating = 4.5;
let numberOfSales = 20000;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log(
  " Name of the book is " +
    bookTitle +
    " Written by " +
    author +
    " has a rating of " +
    rating +
    " selling around " +
    numberOfSales +
    " Books."
);
numberOfSales += 10;
rating = rating + 0.2;

console.log(
  " Name of the book is " +
    bookTitle +
    " Written by " +
    author +
    " has a rating of " +
    rating +
    " selling around " +
    numberOfSales +
    " Books."
);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log(" Name of the book is " + bookTitle);
  console.log(" Written by " + author);
  console.log(" has a rating of " + rating);
  console.log(" selling around " + numberOfSales);
}

logBookData();

numberOfSales += 200;

logBookData();

// --^-- write your code here --^--
