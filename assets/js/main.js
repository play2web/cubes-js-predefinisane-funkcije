/// TASK 1:
// Based on given string:
// "Lorem ipsum dolor sit amet" 
// Create a function that should receive string, and transform all letters to lowercase.

var text = 'Lorem ipsum dolor sit amet';

function convertToLowerCase(whatToConvert) {
    return whatToConvert.toLowerCase();
}

var textLowerCase = convertToLowerCase(text);
console.log(textLowerCase);

// TASK 2
// Based on given string:
// "Lorem ipsum dolor sit amet"
// Create a function that should check if there is a word "sit" in the string, and console log sentence saying that it exist or not.

var textWhat = 'Lorem ipsum dolor sit amet';
var wordToCheck = 'sit';

function checkIfThereIsWord(whatToCheck, whereToCheck) {
    whereToCheck.includes(whatToCheck) ? console.log('Word exist') : console.log('Word does now exist');
}

checkIfThereIsWord(wordToCheck, textWhat);

// TASK 3
// Based on given string:
// "Lorem ipsum dolor sit amet"
// Create a function that should find and return index of the last letter in the sentence.

var textWhatLetter = 'Lorem ipsum dolor sit amet';

function getIndexOfLastLetter(whatToCheck) {
    var letter = whatToCheck[whatToCheck.length - 1];
    console.log(whatToCheck.lastIndexOf(letter));
}

getIndexOfLastLetter(textWhatLetter);

// TASK 4
// Based on given string:
// "Lorem ipsum dolor sit amet"
// Create a function that should split string based on empty space, and return first 3 results.

var textWhatFirstThreeResults = 'Lorem ipsum dolor sit amet';

function getFirstThreeResults(whatToCheck) {
    var newValue = whatToCheck.split(' ');
    return newValue.slice(0, 3);
}

var newSplicedArray = getFirstThreeResults(textWhatFirstThreeResults);
console.log(newSplicedArray);

// TASK 5
// Based on given string:
// "Piter is an actor."
// Create a function that should turn a string into the following string:
// "Pitor is an acter."

var givenText = 'Piter is an actor.';

function replaceWords(whatToCheck) {
    return whatToCheck.replace('Piter', 'Pitor').replace('actor', 'acter');
}

var newGivenText = replaceWords(givenText);
console.log(newGivenText);

// TASK 6
// Based on given array:
// var someData = [34, 23, 14, 56, 23, 44, 65];
// Create a function that should remove number 56 from an array and return array without it.

var someData = [34, 23, 14, 56, 23, 44, 65];

function removeArrayMember(whatToCheck, whatToRemove) {
    const index = whatToCheck.indexOf(whatToRemove);
    if (index > -1) {
        whatToCheck.splice(index, 1);
    }
    return whatToCheck;
}

var newRemovedArray = removeArrayMember(someData, 56);
console.log(newRemovedArray);

// TASK 7
// Based on given array:
// var someData = [34, 23, 14, 56, 23, 44, 65];
// Create a function that should turn it into following array:
// var otherData = [23, 14, 56, 65, 44, 23];

var someDataArray = [34, 23, 14, 56, 23, 44, 65];
var arrayMemberToRemove = 34;

function removeDuplicates(whatArray) {
    var uniqueValues = [];
    for (var i in whatArray) {
        if (uniqueValues.indexOf(whatArray[i]) === -1) {
            uniqueValues.push(whatArray[i]);
        }
    }
    return uniqueValues;
}

function modifyArrayMembers(whatToCheck, whatToRemove) {
    const index = whatToCheck.indexOf(whatToRemove);
    if (index > -1) {
        whatToCheck.splice(index, 1);
    }
    var uniqueArray = removeDuplicates(whatToCheck);
    uniqueArray.splice(3, 0, uniqueArray[uniqueArray.length - 1], uniqueArray[uniqueArray.length - 2]);
    uniqueArray.splice(-2);
    uniqueArray.push(uniqueArray[0]);
    return uniqueArray;
}

var newRemovedArray = modifyArrayMembers(someDataArray, arrayMemberToRemove);
console.log(newRemovedArray);

// TASK 8
// Based on given array:
// var someData = [334, 233, 212, 199, 154, 122];
// Create a function that should repack array to the new one, 
// where each element should be current one, reduced by value of previous one from initial array.

var someDataArray = [334, 233, 212, 199, 154, 122];

function reduceArray(whatArray) {
    var uniqueValues = [];
    for (var i in whatArray) {
        uniqueValues.push(whatArray[i] - 10);
    }
    return uniqueValues;
}

var newReduceArray = reduceArray(someDataArray);
console.log(newReduceArray);


// TASK 9
// Based on given array:
// Create a function that should return new array with all students whose average grade is larger than 8.5. 
// In new array, average grade should be formatted to 2 decimals.

var students = [
    {
       name: "Jim",
       avgGrade: 8.5556
    },
    {
       name: "Mike",
       avgGrade: 8.5492
    },
    {
       name: "Anna",
       avgGrade: 8.9322
    },
    {
       name: "Jack",
       avgGrade: 8.6111
    }
  ]

function getStudentsThatPassed(whatArray) {
    var uniqueValues = [];
    for (var i in whatArray) {
        if (whatArray[i].avgGrade.toFixed(2) >=  8.5) {
            whatArray[i].avgGrade = whatArray[i].avgGrade.toFixed(2);
            uniqueValues.push(whatArray[i]);
        }
    }
    return uniqueValues;
}
var studentsPassedExam = getStudentsThatPassed(students);
console.log(studentsPassedExam);


