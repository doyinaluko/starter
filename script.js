'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense);
// console.log('I can now drive any car');


// // THE STRICT MODE DOES NOT ALLOW US TO USE CERTAIN RESERVED WORDS TO NAME OUR VARIABLES IN JAVASCRIPT
// // const interface = 'Audio';
// // const private = 534;

// function logger () {
//     console.log('My name is Marcus');
//     console.log('I am from Iloko-Ijesha');
//     console.log('I am a budding programmer');
//     console.log('I believe in the Lord, Jesus Christ who took my shame and reproach away!');
// }

// // calling / running / invoking the function 
// logger ();
// logger ();
// logger ();

// function fruitProcessor(apples, oranges) { 
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2040 - birthYear;
// }

// const age1 = calcAge1(1995);
// console.log('The current age of the fellow here is ' + age1);

// // Function expression 
// const calcAge2 = function (birthYear) {
//     return 2040 - birthYear;
// }

// const age2 = calcAge2(1995);
// console.log('The value of the function expression is ' + age2); 


// FUNCTIONS CHAPTER BEGINNING 
// function logger() {
//     console.log('Mon nom est Marcus');
// }

// // calling/running/invoking function 
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `This is a very healthy fruit juice with ${apples} apples and ${oranges} oranges for every liter.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(3,5);
// console.log(appleJuice);
// console.log(fruitProcessor(3,5));

// const appleOrangeJuice = fruitProcessor(6, 2);
// console.log(appleOrangeJuice);

// function dressMaker(trousers, shirts) {
//     const dress = `This is a very simple dress with ${trousers} trousers and ${shirts} shirts`;
//     const fashion = `This fashion trend uses ${trousers} trousers and a fine blend of ${shirts} shirts for their runway models`;
//     const africanAttire = `The typical African dress for a man comes in the mould of ${trousers} trousers and ${shirts} shirts`;
//     return africanAttire;
// }

// const outdoorDress = dressMaker(3,2);
// console.log(outdoorDress);
// const bedroomDress = dressMaker(1,1);
// console.log(bedroomDress);

// FUNCTIONS CHAPTER END

// function ageCalculator1(birthYear) {
//     return 2040 - birthYear;
// }

// ageCalculator1(1990);
// console.log(`The current age of the fellow is ${ageCalculator1(1990)}`);
// const age1 = ageCalculator1(1990);


// const ageCalculator2 = function(birthYear) {
//     return 2040 - birthYear;
// }

// const age2 = ageCalculator2(1995);
// console.log(age1, age2);

// const ageCalculator3 = birthYear => 2040 - birthYear;
// const age3 = ageCalculator3(1995);
// console.log(`The age of the fellow in this third example is ` + age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2040 - birthYear;
//     const retirement = 65 - age;
//     return retirement; 
// }

// console.log(`The young lad has ` + yearsUntilRetirement(1998) +`years to go in active service before he retires` );

// const yearsUntilRetirement = (birthYear, firstName, placeOfBirth) => {
//     const age = 2040 - birthYear;
//     const retirement = 65 - age;
//     // return retirement; 
//     return `${firstName}, who was born in ${placeOfBirth}, retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1990, 'Marcus', 'Nigeria'));
// console.log(yearsUntilRetirement(1996, 'Omobola' , 'Faji land'));

// const cutPieces = function (fruit) {
//     return fruit * 4;
// }
// console.log(cutPieces(2));

// const fruitProcessor = function (apples, oranges, guava) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);
//     const guavaPieces = cutPieces(guava);

//     const juice = `This juice contains ${applePieces} pieces of apple, ${orangePieces} pieces of orange and ${guavaPieces} pieces of guava per liter.`;
//     return juice;
// }

// console.log(fruitProcessor(2,4,10));

// const calcAge = function (birthYear) {
//     return 2040 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) 
// {
// const age = 2040 - birthYear;
// const retirement = 65 - age;

// if(retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
// } else {
//     console.log(`${firstName} has already retired 🏆🏆🏆`);
//     return -1;
// }

// }

// console.log(yearsUntilRetirement(2058, 'Marcus'));
// console.log(yearsUntilRetirement(2050, 'Susan'));
// console.log(yearsUntilRetirement(1940, 'Bola'));

// function logger() {
//     console.log('My name is Marcus');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges)
//  {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
//  }
// const appleJuice = fruitProcessor(5,4);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);

// function calcAge1(birthYear) {
//     return 2027 - birthYear;
// }

// const age1 = calcAge1(1985);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2044 - birthYear;
// }
// const age2 = calcAge2(1889);

// console.log(age1, age2);

// const calcAge2 = function (birthYear) {
//     return 2050 - birthYear;
// }

// // ARROW FUNCTION COMING RIGHT UP 
// const calcAge3 = birthYear => 2050 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2050 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1992, 'Marcus'));
// console.log(yearsUntilRetirement(1998, 'Castilla'));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }

// yearsUntilRetirement(2040, 'Marcus Dante');
// console.log(yearsUntilRetirement(1972, 'Marcus Dante'));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(4, 5, 6));
// console.log(`The average of the three numbers involved here is ${calcAverage(4, 5, 6)}`);

// // TEST DATA 1 
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Kolas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(580, 120);

// // TEST DATA 2 
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Dante';
// const friend2 = 'Costa';
// const friend3 = 'Bonfim';
// console.log(friend1, friend2, friend3);   

// const friends = ['Dante', 'Costa', 'Bonfim'];
// console.log(friends);

// const years = new Array(1991, 1998, 1989, 2022, 2001);
// console.log(years);

// const favFootballers = new Array('Diego Costa', 'Messi', 'Kroos', 'Modric', 'Lewandowski', 'De Bryune', 'Messi');
// console.log(favFootballers);
// console.log(favFootballers[4]);
// console.log(`The footballerootballer that I want to pick from this array is ${favFootballers[3]}!`);

// console.log(favFootballers.length);
// console.log(favFootballers[favFootballers.length - 1]);

// favFootballers[0] = 'Didier Drogba';
// console.log(favFootballers);

// const firstName = 'Marcus';
// const marcus = [firstName, 'Aluko', 2024 - 1998, 'programmer', '6ft3inches tall', 'Osun state', favFootballers];
// console.log(marcus);
// console.log(marcus.length);

// // EXERCISE 
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearsNew = [1998, 1867, 2002, 2010, 2018];

// console.log(yearsNew);

// const age1 = calcAge(yearsNew[0]);
// const age2 = calcAge(yearsNew[1]);
// const age3 = calcAge(yearsNew[yearsNew.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(yearsNew[0]), calcAge(yearsNew[1]), calcAge(yearsNew[years.length - 1])];
// console.log(ages);

// const friends = ['Omobola Abioye', 'Praise Olarinde', 'Rachel Arokoyo'];
// console.log(friends);

// // ADD ELEMENTS 
// const newLength = friends.push('Dominion Adeleye');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Susan David');
// console.log(friends);
 
// // REMOVE ELEMENTS 
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Omobola Abioye'));
// console.log(friends.indexOf('Praise Olarinde'));
// console.log(friends.indexOf('Dante Costa Bonfim'));

// console.log(friends.includes('Omobola Abioye'));
// console.log(friends.includes('Praise Olarinde'));
// console.log(friends.includes('Dante Costa Bonfim'));

// if (friends.includes('Omobola Abioye')) {
//     console.log('The love of my life is on this list, I smell her already');
// } else {
//     console.log('The love of my life is not on this list');
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // THE ARROW FUNCTION FOR THE SAME CODE 
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// // IN ORDER TO CALCULATE THE SUMS OF THE BILLS AND THE TIPS ALTOGETHER
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// OBJECTS IN JAVASCRIPT INTRODUCTION
// const marcusAluko = [
//     'Marcus',
//     'Aluko',
//     2024 - 1999,
//     'footballer',
//     ['Omobola', 'Ruth', 'Iyinoluwa']
// ];

// const marcus = {
//     firstName: 'Marcus',
//     lastName: 'Aluko',
//     age: 2024 - 1999,
//     job: 'Footballer',
//     theBae: 'Shuzhan',
//     friends: ['Omobola', 'Ruth', 'Iyinoluwa']
// }

// console.log(marcus);
// console.log(marcus.firstName);
// console.log(marcus['lastName']);

// const nameKey = 'Name';
// console.log(marcus['first' + nameKey]);
// console.log(marcus['last' + nameKey]);


// const interestedIn = prompt('What do you want to know about Marcus? Choose between firstName, lastName, age, job, theBae, and friends');
// console.log(marcus[interestedIn]);

// if (marcus[interestedIn]) {
//     console.log(marcus[interestedIn]);
// } else {
//     console.log('Wrong value! Please choose between firstName, lastName, age, job, theBae, and friends');
// }

// marcus.location = 'Nigeria';
// marcus['twitter'] = '@OptaDoyen';
// console.log(marcus);
// // ALT + UP OR DOWN MOVES LINES EITHER UP OR DOWN 

// // CHALLENGE 
// // Marcus has 3 friends, and his best friend is called Omobola 
// console.log(marcus.location);
// marcus.bestFriend = 'Omobola';

// const topFriend = marcus.bestFriend;
// console.log(topFriend, marcus.friends, marcus); 
// // console.log(`${marcus.firstName} has ${marcus.friends.length} friends who are ${marcus.friends}, and his best friend is called ${marcus.friends}`);                                                                                                                                  
// const marcus = {
//     firstName: 'Marcus',
//     lastName: 'Aluko',
//     birthYear: 1999,
//     job: 'Footballer',
//     friends: ['Omobola', 'Iyinoluwa', 'Ruth'],
//     location: 'Nigeria',
//     ethnicity: 'Yoruba',
//     theBae: 'Shuzhan',
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2024 - birthYear;
//     // },

//     // calcAge: function() {
//     //     console.log(this); 
//     //     return 2030 - this.birthYear;
//     // },

//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },

//     calcNewAge: function () {
//         this.ageNew = 2070 - this.birthYear;
//         return this.ageNew;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} years old ${marcus.job}, and he has ${this.hasDriversLicense? 'a' : 'no'} driver's license.`
//     },

//     findFriends: function() {
//         return this.friends;
//     },

//     myLocation: function() {
//         return this.location;
//     },

//     titheOnSalary: function(salary) {
//         const tithe = salary * 0.1;
//         return tithe;
//     }
// };

// console.log(marcus.getSummary());

// console.log(`${marcus.firstName} is a ${marcus.calcNewAge()} years old ${marcus.job}, and he has a a driver's license is ${marcus.hasDriversLicense}`);
// console.log(marcus.calcNewAge());

// console.log(marcus.calcAge());


// console.log(marcus.age);
// console.log(marcus.age);
// console.log(marcus.age);
// console.log(marcus.age);
// console.log(marcus.age);

// console.log(marcus.findFriends());
// console.log(marcus.myLocation());
// // console.log(marcus.titheOnSalary(43000));
// // console.log(marcus.titheOnSalary(38000));
// // console.log(marcus.titheOnSalary(24533.33));
// // console.log(marcus.titheOnSalary(48133.33));
// // console.log(marcus['calcAge'](1998));
// // console.log(marcus['titheOnSalary'](50000));

// const infoMark = {
//     fullNames: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBmi: function() {
//         const bmi = this.mass / this.height ** 2;
//         return bmi;
//     }
// };
// const bmiMark = infoMark.calcBmi();
// console.log(bmiMark);

// const infoJohn = {
//     fullNames: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBmi: function() {
//         const bmi = this.mass / this.height ** 2;
//         return bmi;
//     }
// };
// const bmiJohn = infoJohn.calcBmi();
// console.log(bmiJohn);

// const infoMark = {
//     fullNames: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBmi: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const infoJohn = {
//     fullNames: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBmi: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// infoMark.calcBmi();
// infoJohn.calcBmi();
// console.log(infoMark.bmi, infoJohn.bmi);

// if(infoMark.bmi > infoJohn.bmi) {
//     console.log(`Mark's BMI value of ${infoMark.bmi} is higher than John's BMI value of ${infoJohn.bmi}`)
// } else if (infoJohn.bmi > infoMark.bmi) {
//     console.log(`John's BMI value of ${infoJohn.bmi} is higher than that of Mark's BMI value of ${infoMark.bmi}`)
// }

// console.log('Lifting weights repetiton 1 🤷‍♂️');
// console.log('Lifting weights repetiton 2 🤷‍♂️');
// console.log('Lifting weights repetiton 3 🤷‍♂️');
// console.log('Lifting weights repetiton 4 🤷‍♂️');
// console.log('Lifting weights repetiton 5 🤷‍♂️');
// console.log('Lifting weights repetiton 6 🤷‍♂️');
// console.log('Lifting weights repetiton 7 🤷‍♂️');
// console.log('Lifting weights repetiton 8 🤷‍♂️');
// console.log('Lifting weights repetiton 9 🤷‍♂️');
// console.log('Lifting weights repetiton 10 🤷‍♂️');


// for loop keeps running while the condition is true 
// for(let rep = 1; rep <= 10; rep += 2) {
//     console.log('Lifting weights repetiton 1 🤷‍♂️');
// }

// for(let rep = 1; rep <= 5; rep++) {
//     console.log(`I am going to work on day ${rep}`)
// }

// var myArray = [];
// for (var i = 0; i < 10; i += 2) {
//     myArray.push(i);
// }

// console.log(myArray);

// var myNumbers = [];
// for (var i = 0; i < 20; i += 3) {
//     myNumbers.push(i);
// }
// console.log(myNumbers);

// for(let rep=1; rep <= 10; rep++) {
//     console.log(`I am going to eat on day ${rep}`);
// }

// const marcusArray = [
//     'Marcus',
//     'Aluko',
//     2024 - 1999,
//     'Footballer',
//     ['Shuzhan', 'Iyinoluwa', 'Ruth']
// ];

// console.log(marcusArray[0]);
// console.log(marcusArray[1]);
// console.log(marcusArray[2]);
// console.log(marcusArray[3]);
// console.log(marcusArray[4]);

// for (let i = 0; i < 5; i++) {
//     console.log(marcusArray[i]);
// }

// const marcus = [
//     'Aluko',
//     'Oladoyin',
//     'Mark',
//     2024 - 1990,
//     'Nigeria',
//     'Footballer',
//     ['Omobola', 'Joju', 'Queen'],
//     'French',
//     'Frontend dev',
//     'HTML',
//     'CSS',
//     'Javascript',
//     'Coke',
//     true
// ];

// const types = [];

// for (let i = 0; i < marcus.length; i++) {
//     console.log(marcus[i], typeof marcus[i]);

//     // types[i] = typeof marcus[i];
//     types.push(typeof marcus[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020, 1891, 1920];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i] +'years old');
// }

// console.log(ages, years);
// console.log(`The respective age of each individual on the list is; ${ages}`);

// // continue and break 
// console.log('---- ONLY STRINGS ----') 
// for (let i = 0; i < marcus.length; i++) {
//     if (typeof marcus[i] !== 'string') continue;

//     console.log(marcus[i], typeof marcus[i]);
// }

// // break
// console.log('---- BREAK WITH NUMBER ----') 
// for (let i = 0; i < marcus.length; i++) {
//     if (typeof marcus[i] === 'number') break;

//     console.log(marcus[i], typeof marcus[i]);
// }

// const marcus = [
//     'Mark',
//     'Aluko',
//     'Footballer',
//     ['Omobola', 'Iyinoluwa', 'Oluwadamilola'],
//     'Nigerian'
// ];

// console.log('---- NEW EXAMPLE ----');
// for (let i = marcus.length - 1; i >= 0; i--) {
//     console.log(i, marcus[i])
// };

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---- Starting exercise ${exercise} ----`);

//     for (let rep =1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Weight lifting repetition ${rep} 👀👀`);

//         const weightLifting = [
//             'Bar lifting',
//             'Dumb bells',
//             'Power lifting',
//             'Push ups',
//             'Squats',
//             'Hops'
//         ];
//         for (let weight = 0; weight < weightLifting.length; weight++) {
//             console.log(`${weightLifting[weight]}`);
//         }
//     }
// };

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Weight lifting repetition ${rep} ⭐⭐⭐`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE LOOP: Weight lifting repetition ${rep} ⭐⭐⭐⭐`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [
//     22, 295, 176, 440, 17, 105, 10, 100, 86, 52
// ];

// const tips = [];
// const totals = [];
// const grandTotals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     console.log(sum);
//     return sum/arr.length;
// }
// calcAverage([2, 3, 6]);
// console.log(calcAverage([2, 3, 6]));
// console.log(calcAverage(totals));
// console.log(totals);
// console.log(calcAverage(totals));
// console.log(calcAverage([2, 3, 4, 5 ,67]));
// console.log(calcAverage(tips));

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive now');

function revisionLogger() {
    console.log('Mon nom est Marcus');
}

// calling or invoking a function 
// revisionLogger();
// revisionLogger();
// revisionLogger();

// function revisionFruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const revisionAppleJuice = revisionFruitProcessor(4, 3);
// console.log(revisionAppleJuice);

// console.log(revisionFruitProcessor(2,1));

// const markJuice = revisionFruitProcessor(60,34);
// console.log(markJuice);

// const num = Number('24');

// function declaration 
// function revCalcAge1(birthYear) {
//     const age = 2040 - birthYear;
//     return age;
// }

// const ageMarko = revCalcAge1(1990);
// console.log(`The age of the young lad in this situation happens to be ${ageMarko} years of age.`);


// // function expression 
// const revCalcAge2 = function (birthYear) {
//     return 2040 - birthYear;
// }
// const age2 = revCalcAge2(1980); 
// console.log(ageMarko, age2);
// console.log(`The age for the second case in this expression is ${age2} years`);

// Function expression 
// const revCalcAge2 = function (birthYear) {
//     return 2040 - birthYear;
// }

// // Arrow functions 
// const revCalcAge3 = birthYear => 2050 - birthYear;
// const age3 = revCalcAge3(1890);
// console.log(age3);

// const randomNumber = newAge => 2040 - newAge;
// const marcusNumber = randomNumber(2000);
// console.log(marcusNumber);

// const revYearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2050 - birthYear;
//     const retirement = 70 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(revYearsUntilRetirement(1999, 'Pinto'));
// console.log(revYearsUntilRetirement(1985, 'Honey'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));


// // My own personal kitchen example 
// function vegetablesCutter(veggies) {
//     return veggies * 20;
// }

// function vegetablesProcessor(potatoes, ugu) {
//     const potatoesPieces = vegetablesCutter(potatoes);
//     const uguPieces = vegetablesCutter(ugu);
//     const porridge = `This meal was made with ${potatoesPieces} pieces of potatotes and ${uguPieces} pieces of Ugu leaves.`;
//     return porridge;
// }

// console.log(vegetablesProcessor(10, 20));

// const calcAge = function (birthYear) {
//     return 2040 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = 2040 - birthYear;
//     const retirement = 70 - age;

//     if(retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }


//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Marcus'));
// console.log(yearsUntilRetirement(1950, 'Dante'));

// const averageScore = function calcAverage(scoreA, scoreB, scoreC) {
//     const sum = (scoreA + scoreB + scoreC) / 3;
//     return sum;
// }
// console.log(`The average of the three scores is ${averageScore(10,23,21)}`);
// console.log(averageScore(10,23,21));

// const calcAverage2 = (scoreA, scoreB, scoreC) => {
//     const sumAverage = (scoreA + scoreB + scoreC) / 3;
//     return sumAverage;
// }

// console.log(calcAverage2(29,37,39));
// console.log(`The average of the three numbers in this arrows function segment is ${calcAverage2(29,37,39)}`);

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// function calcAverage2(a, b, c) {
//     const average = (a + b + c)/3;
//     return (`The average of the numbers involed is ${average}`);
//     // return average;
// }
// console.log(calcAverage2(739,878,638));
// console.log(`The average of the numbers involved is ${calcAverage2(738,234,989)}`);

// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(scoreDolphins, scoreKoalas) {
//     if (scoreDolphins >= 2 * scoreKoalas) {
//         console.log(`Dolphins win 🏆 (${scoreDolphins} vs. ${scoreKoalas})`);
//     } else if (scoreKoalas >= 2 * scoreDolphins) {
//         console.log(`Koalas win 🏆 (${scoreKoalas} vs. ${scoreDolphins})`);
//     } else {
//         console.log('No team wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(1500, 200);

// // Test data 2 
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// // Test data random 
// scoreDolphins = calcAverage(20, 30, 50);
// scoreKoalas = calcAverage(90, 120, 150);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ['Dante', 'Lando', 'Verstappen', 'Max', 'Norris'];
// console.log(friends);

// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Ocon';
// console.log(friends);

// friends[2] = 'Alonso';
// console.log(friends);

// const birthYearMark = 1990;
// const firstName = 'Mark';
// const ageMark = 2024 - birthYearMark;
// const dataMark = [firstName, 'Aluko', ageMark, 'Footballer', friends];
// console.log(dataMark);

// const calcAgemarcus = function (birthYear) {
//     return 2040 - birthYear;
// }

// const years = [1990, 1989, 1981, 2008, 2015];

// const age1 = calcAgemarcus(years[0]);
// const age2 = calcAgemarcus(years[1]);
// const age3 = calcAgemarcus(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAgemarcus(years[0]), calcAgemarcus(years[1]), calcAgemarcus(years[2]), calcAgemarcus(years[3]), calcAgemarcus(years[years.length - 1])];
// console.log(ages);

// const friends = ['Dante', 'Lando', 'Verstappen', 'Max', 'Norris'];
// console.log(friends);

// friends.push('Alonso');
// console.log(friends);

// friends.unshift('Russel');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Lando'));

// console.log(friends.includes('Dante'));
// console.log(friends.includes('Marcus'));

// if (friends.includes('Dante')) {
//     console.log('You have a friend called Dante on the list ');
// }

// const calcTip = function (bill) {
//     if (50 <= bill <= 300) {
//         console.log(`The tip for this bill is ${0.15 * bill}`);
//     } else {
//         console.log(`The tip for this bill is ${0.2 * bill}`);
//     }
// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const calcTip = bill => (bill => 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// console.log(`The tip for the bill in this scenario is going to be ${calcTip(300)}`); 

// const bills = [125, 555, 44];

// // const tips = [console.log(calcTip(125)), console.log(calcTip(555)), console.log(calcTip(44))];

// // const totals = [console.log(125 + calcTip(125)), console.log( 555 + calcTip(555)),  console.log(44 + calcTip(44))];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
// console.log(totals);

// const newTotals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(newTotals);

// const dataMarcus = {
//     firstName: 'Marcus',
//     lastName: 'Aluko',
//     age: 2024 - 1990,
//     job: 'Footballer',
//     friends: ['Omobola', 'Iyinoluwa', 'Oluwadamilola']
// }

// console.log(dataMarcus);

// console.log(dataMarcus.lastName);
// console.log(dataMarcus['lastName']);

// const namekeyMarcus = 'Name';
// console.log(dataMarcus['first' + namekeyMarcus]);
// console.log(dataMarcus['last' + namekeyMarcus]);

// const interestedIn = prompt('What do you want to know about constable Marcus as of this moment? Choose between firstName, lastName, age, job and friends.');

// if (dataMarcus[interestedIn]) {
//     console.log(dataMarcus[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// dataMarcus.location = 'Nigeria';
// dataMarcus['facebook'] = 'Doyen M Aluko';
// dataMarcus['Weight'] = 2 * 40.5 + 'kg';

// console.log(dataMarcus);

// console.log(`${dataMarcus.firstName} has ${dataMarcus.friends.length} friends, who are ${dataMarcus['friends']}, and his best friend is ${dataMarcus.friends[0]}`);

// const dataMarcus = {
//     firstName: 'Marcus',
//     lastName: 'Aluko',
//     birthYear: 1990,
//     bodyMassIndex: 22.3,
//     height: 1.91,
//     job: 'Footballer',
//     friends: ['Omobola', 'Iyinoluwa', 'Oluwadamilola'],
//     hasDriversLicense: true,


//     calcAge: function () {
//         console.log(this);
//         this.age = 2040 - this.birthYear;
//         return this.age;
//     },

//     bodyMass: function () {
//         return `The height of constable Marcus is ${this.bodyMassIndex  * this.height**2 } meters`;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//     }

// }

// console.log(dataMarcus.calcAge());

// console.log(dataMarcus.age);
// console.log(dataMarcus.age);
// console.log(dataMarcus.age);
// console.log(dataMarcus.age);

// console.log(dataMarcus.bodyMass());

// console.log(dataMarcus.getSummary());

// // console.log(dataMarcus.calcAge(1990));
// // console.log(dataMarcus['calcAge'](1990));

// function calcBMIMark() {
//     return dataMark.mass / dataMark.height**2
// };

// function calcBMIJohn() {
//     return dataJohn.mass / dataJohn.height**2
// }

// const dataMark = {
//     fullNames: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
// }

// const dataJohn = {
//     fullNames: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMIJohn: function() {
//         const BMIJohn = this.mass / this.height**2;
//         return BMIJohn;
//     }
// }

// const markBMI = calcBMIMark();
// const johnBMI = calcBMIJohn();

// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//     console.log(`${dataMark.fullNames}'s BMI ${markBMI} is higher than ${dataJohn.fullNames}'s BMI ${johnBMI}.`);
// } else if (johnBMI > markBMI) {
//     console.log(`${dataJohn.fullNames}'s BMI ${johnBMI} is higher than ${dataMark.fullNames}'s BMI ${markBMI}`);
// }

// const dataJohn = {
//     fullNames: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//     this.bmi = this.mass / this.height**2;
//         return this.bmi;
//     }
// };

// const dataMark = {
//     fullNames: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.bmi = this.mass / this.height**2;
//             return this.bmi;
//         }
// };

// dataJohn.calcBMI();
// dataMark.calcBMI();

// console.log(dataJohn.calcBMI(), dataMark.calcBMI());

// if (`${dataJohn.calcBMI()} > ${dataMark.calcBMI()}`) {
//     console.log(`${dataMark.fullNames}'s BMI ${dataMark.calcBMI()} is higher than ${dataJohn.fullNames}'s BMI ${dataJohn.calcBMI()}.`);
// } else if (`${dataMark.calcBMI()} > ${dataJohn.calcBMI()}`) {
//     console.log(`${dataJohn.fullNames}'s BMI ${johnBMI.calcBMI()} is higher than ${dataMark.fullNames}'s BMI ${markBMI.calcBMI()}`);
// }

// console.log('Lifting weights repetition 1 🙌');
// console.log('Lifting weights repetition 2 🙌');
// console.log('Lifting weights repetition 3 🙌');
// console.log('Lifting weights repetition 4 🙌');
// console.log('Lifting weights repetition 5 🙌');
// console.log('Lifting weights repetition 6 🙌');
// console.log('Lifting weights repetition 7 🙌');
// console.log('Lifting weights repetition 8 🙌');
// console.log('Lifting weights repetition 9 🙌');
// console.log('Lifting weights repetition 10 🙌');

// for loop keeps running while the condition remains true per time 
// for (let rep = 1; rep <= 10; rep++) {
//     console.log('Lifting weights repeption 1 🙌');
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// for (let day = 1; day <=31; day++) {
//     console.log(`I eat bread on day ${day} of every month of the year`);
// }

// for (let january = 1; january <= 31; january++) {
//     console.log(`In the month of January, we have day ${january}`)
// }

// const dataMarcus = [
//     'Marcus',
//     'Aluko',
//     2024 - 1990,
//     ['Omobola', 'Iyinoluwa', 'Chukwu'],
//     'Nigerian',
//     'Yoruba',
//     'Footballer',
//     'Anago',
//     'Pounded yam',
//     'Fufu',
//     'Fast paced movies',
//     true
// ];

// const types = [];
// const monsieurMarcus = [];
// const danteArray = [];

// for (let i = 0; i < dataMarcus.length; i++) {
//     console.log(dataMarcus[i], typeof dataMarcus[i]);

//     types[i] = typeof dataMarcus[i];

//     monsieurMarcus[i] = dataMarcus[i];

//     danteArray.push(dataMarcus[i]);
// }

// console.log(types);
// console.log(monsieurMarcus);
// console.log(danteArray);

// const years = [1990, 1980, 2002, 2024];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//    ages.push(2040 - years[i]);
// }

// console.log(years, ages);

// // continue and break 
// console.log('---- ONLY STRINGS ----');
// for (let i = 0; i < dataMarcus.length; i++) {
//     if (typeof dataMarcus[i] !== 'string') continue;

//     console.log(dataMarcus[i], typeof dataMarcus[i]);
// }

// console.log('---- ONLY NUMBERS ----');
// for (let i = 0; i < dataMarcus.length; i++) {
//     if (typeof dataMarcus[i] !== 'number') continue;

//     console.log(dataMarcus[i],typeof dataMarcus[i]);
// }

// console.log('---- BREAK WITH NUMBER ----');
// for (let i = 0; i < dataMarcus.length; i++) {
//     if (typeof dataMarcus[i] === 'number') break;

//     console.log(dataMarcus[i], typeof dataMarcus[i]);
// }

// console.log('---- BREAK WITH BOOLEAN ----');
// for(let i = 0; i < dataMarcus.length; i++) {
//     if (typeof dataMarcus[i] === 'boolean') break;

//     console.log(dataMarcus[i], typeof dataMarcus[i]);
// }

const dataMarcus = [
    'Marcus',
    'Aluko',
    2024 - 1990,
    ['Omobola', 'Iyinoluwa', 'Chukwu'],
    'Nigerian',
    'Yoruba',
    'Footballer',
    'Anago',
    'Pounded yam',
    'Fufu',
    'Fast paced movies'
];

for (let i = 0; i < dataMarcus.length; i++) {
    
}
const typeMarcus = [];

console.log(dataMarcus);