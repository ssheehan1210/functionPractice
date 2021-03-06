// After you complete each problem:
	// git add .
	// git commit -m "I completed problem <blah>"



// Write a for loop that will iterate from 0 to 10. For each
// iteration of the for loop, it will multiply the number by 9
// and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every
// multiplier from 1 to 10 (100 results total).

for (i = 0; i <= 10; i++){
	console.log(i * 9);
};


// Write a function named assignGrade that: takes 1 argument, a
// number score(example: 89 returns B). returns a grade for the
// score, either "A", "B", "C", "D", or "F". Call that function
// for a few different scores and log the result to make sure it
// works.

const assignGrade = (score) => {
	if (score >= 90){
		return "A";
	} else if (score >= 80){
		return "B";
	} else if (score >= 70){
		return "C";
	} else if (score >= 60){
		return "D";
	} else {
		return "F";
	}
};
assignGrade(98);
assignGrade(81);
assignGrade(70);
assignGrade(9);


// Check the results of assignGrade function from the previous
// exercise for every value from 60 to 100 - so your log should
// show "For 89, you got a B. For 90, you got an A.", etc.

for (i = 60; i <= 100; i++){
	console.log("For " + i + ", you got a " + assignGrade[i] + ".");
};


// Write a function named tellFortune that:
	// Takes 4 arguments: number of children, partner's name,
		// geographic location, job title.
	// Tutputs your fortune to the screen like so: "You will be a
		// X in Y, and married to Z with N kids."
	// Call that function 3 times with 3 different values for the
		// arguments.

const tellFortune = (childrenNumber, partnerName, location, job) => {
	console.log("You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + childrenNumber + " kids.");
};
tellFortune(5, "Lisa", "Springfield", "salesman");
tellFortune(1, "Brian", "Dublin", "manager of a hotel");
tellFortune(12, "Ann", "San Diego", "CEO in the tech industry");


// Write a JavaScript function which will take an array of numbers
// stored and find the second lowest and second greatest numbers,
// respectively. Sample array : [1,2,3,4,5] Expected Output : 2,4

const numberExtractor = (numberArray) => {
	const extractedArray = [];
	const sortedArray = numberArray.sort(function(a, b){return a - b});
	extractedArray.push(sortedArray[1]);
	const reversedArray = numberArray.sort(function(a, b){return b - a});
	extractedArray.push(reversedArray[1]);
	return extractedArray.join();
};
numberExtractor([1,2,3,4,5]);


// Write a JavaScript function that accepts two arguments, a string
// and a letter and the function will count the number of
// occurrences of the specified letter within the string. Sample
// arguments : 'Listen to the river sing sweet songs', 'o' Expected
// Output : 2

const letterCounter = (string, letter) => {
	return string.split(letter).length - 1;
};
letterCounter('Listen to the river sing sweet songs', 'o');


// Write a JavaScript function that accept a list of country names
// as input and returns the longest country name as output. Go to
// the editor Sample function : LongestCountryName(["Australia",
// "Germany", "United States of America"]) Expected output :
// "United States of America"

const longestCountryName = (listOfNames) => {
	let currentLongestName = "";
	for (i = 0; i < listOfNames.length; i++) {
		if (listOfNames[i].length > currentLongestName.length) {
			currentLongestName = listOfNames[i];
		}
	};
	return currentLongestName;
};
longestCountryName(["Australia", "Germany", "United States of America"]);


// Write a JavaScript function that reverse a number. Example :
// x = 32243; Expected Output : 34223

const numberReverse = (x) => {
	let stringOfNumber = x.toString().split('').reverse().join('');
	let revNumber = parseInt(stringOfNumber);
	return revNumber;
};
numberReverse(32243);
