//VARIABLES AND DATA TYPES
// var firstName = "John";
// console.log(firstName);
// // john get's printed to the console.

// var lastNAme = "Smith";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "Teacher";
// console.log(job);

// var 3years = 3; // will cause an error so no numbers at the begining

// var $3years = 3 // with a dollar sign or underscore sign it will work but

/************************************ */
//VAROABLE MUTATION AND COERCION

// var firstNAme = "John";
// var age = 28;

// console.log(firstNAme + " " + age); // will print John 28
// //age is converted to a string through type coercin

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstNAme +
//     " is  a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// //VARIABLE MUTATION
// age = "twenty eight";
// job = "driver";

// alert(
//   firstNAme +
//     " is  a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// //now there is an alert box that reads Jogn is a twenty eight year old driver. is he married?

// var lastName = prompt("What is his last Name");
// console.log(firstNAme + " " + lastName);
//this will pull up a promt that asks you what is your last name and
// will print the firstname and last anme you entered to the promt to the console.

/************************************************************* */
// BASIC OPERATORS

// var year, yearJohn, yearMark;
// year = 2018;
// yearJohn = year - 28;
// yearMark = year - 33;

// console.log(yearJohn);

// console.log(yearJohn + yearJohn);

// var now, yearCow, yearMoo;
// now = 2018;
// yearCow = now - 28;
// yearMoo = now - 33;
// console.log(now - 4);

// //Logical operators

// var johnOlder = yearJohn > yearMark;
// console.log(johnOlder); //will print true since john's age is older is older

// //TYPEOF OPERATOR

// console.log(typeof johnOlder); //print Boolean  because it is a boolean variable

// console.log(typeof yearCow); // print number since it is a number

/******************************************* */
// Operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge); // prints true due to operator precedents

// //MULTIPLE ASSIGNMENTS
// var x, y;
// x = y = (3 + 5) * 4 - 6;

// console.log(x, y); // prints 26 and 26

// //MORE OPERATORS
// x = x * 2;
// x *= 2;

/***************************************** */
//If else statement

// var firstName = "John";
// var civilStatus = "married";

// if (civilStatus === "married") {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon ");
// }
// will print John is married

// var isMarried = false;
// if (isMarried === true) {
//   console.log(firstName);
// } else {
//   console.log(firstName + " will hopefully marry in the future. ");
// }

// //will print john will hopefully marry in the future

// var massMark = 78; //kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark < BMIJohn) {
//   console.log("Mark's BMI is lower than John's. ");
// } else {
//   console.log("John's' BMI is higher than Mark's. ");
// }
// var markHigherBMI = BMIMark > BMIJohn;
// console.log("Is MArks's BMI higher than John's" + markHigherBMI);

// The Ternary Operator and Switch Statements

// var firstNAme = "John";
// var age = 16;

// age >= 18
//   ? console.log(firstNAme + " drinks beer.")
//   : console.log(firstNAme + " drinks juice. ");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);
// // the bottom is the same as the one on top..top is ternery statement
// // if (age >= 18) {
// //   var drink = "beer";
// // } else {
// //   var drink = "juice";
// // }
/////////
// Coding Challenge
// var mike1 = 120;

// var mike2 = 89;

// var mike3 = 103;

// var mikeTotal = mike1 + mike2 + mike3;

// var mikeAverage = mikeTotal / 3;
// console.log(mikeAverage);

// var john1 = 116;

// var john2 = 94;

// var john3 = 123;

// var johnTotal = john1 + john2 + john3;

// var johnAverage = johnTotal / 3;
// console.log(johnAverage);

// //console.log('John don win' + johnAverage);

// if (mikeAverage > johnAverage) {
//   console.log("mike don win " + mikeAverage);
// } else {
//   console.log("john don win " + johnAverage);
// }

//////////////

// FUNCTIONs
// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1998);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   console.log(firstName + " retires in " + retirement + " years.");
// }
// // so inside of the function we called upon another function and used year instead of birthyear
// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1948, "John");
// yearsUntilRetirement(1969, "John");

//ALL THREE GET PRINTED
//////////////////////////////////

//FUNCTION STATEMENTS AND EXPRESSIONS

// // function expression
// var whatDoYouDo = function (job, firstName) {
//   swit;
// };

// // function declaration
// function (job, firstName) {
//     swit;
//   };

/////////////
// ARRAYS

// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]); //will print Jane
// console.log(names.length); // will pritn  3

// //Mutate array data
// names[1] = "Ben";
// names[names.length] = "Mary";
// console.log(names);

// var now, ageJohn, ageMark;
// now = 2018;
// ageJohn = now - 28;
// ageMark = now - 18;
// console.log(ageJohn, ageMark);

// var JohnNaElder = ageJohn > ageMark;
// console.log(JohnNaElder); //prints false

// JohnNaElder = ageJohn < ageMark;
// console.log(JohnNaElder); //prints true

// console.log(typeof JohnNaElder); //dey print boolean

// var firstName = "John";
// var age = 16;

// age >= 16
//   ? console.log(firstName + " drinks beer")
//   : console.log(firstName + "drinks juice");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink); // will print juice

// var job = "teacher";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teaches kids how to code");
//     break;
//   case "driver":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// //Truthy & Falsy values  values considered true or false after evaluation

// var heights;

// heighter = 23;
// if (heights) {
//   console.log("variable is defined");
// } else {
//   console.log("Variable has NOT been defined");
// }

// var JohnScore1 = 89;
// var JohnScore2 = 103;
// var JohnScore3 = 120;

// var MikeScore1 = 116;
// var MikeScore2 = 94;
// var MikeScore3 = 123;

// var JohnScoreTotal = JohnScore1 + JohnScore2 + JohnScore3;

// var JohnScoreAvg = JohnScoreTotal / 3;

// console.log(JohnScoreAvg);

// var MikeScoreTotal = MikeScore1 + MikeScore2 + MikeScore3;

// var MikeScoreAvg = MikeScoreTotal / 3;

// var winner =
//   MikeScoreAvg < JohnScoreAvg
//     ? console.log("Mike won")
//     : console.log("John n them one");

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   console.log(firstName + " Retires in " + retirement + " years.");
// }

// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1948, "John");
// ///////////////////////////
// //Function expression

// var whatDoYouDo = function (job, firstNameTing) {
//   switch (job) {
//     case "teacher":
//       return firstNameTing + "teaches kids how to code";
//     case "driver":
//       return firstNameTing + " drives a cab  in Lisbon";
//     case "designer":
//       return firstNameTing + " designs nice clothes";

//     default:
//       return firstNameTing + " does something else";
//   }
// };

// console.log(whatDoYouDo("driver", "Jason"));

function createLine(x1, y1, x2, y2, lindId) {
  // the distance between the tow points(for the line div width)
  distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

  // the mid-point between the two points, we use it as rotation center
  xMid = (x1 + x2) / 2;
  yMid = (y1 + y2) / 2;

  //get the salop of the line between the two points

  slopeinRadian = Math.atan2(y1 - y2, x1 - x2);
  slopeInDegree = (slopeRadian * 180) / Math.PI;

  //Change the css of the line

  line = document.getElementById(lindId);
  line.style.width = distance;
  line.style.top = yMid;
  line.style.left = xMid - distance / 2;
  line.style.transform = "rotate(" + slopeInDegree + "deg)";
}
