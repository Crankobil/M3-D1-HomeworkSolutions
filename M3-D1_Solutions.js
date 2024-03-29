/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOf = (value1, value2) => {
    if (value1 === value2) {
        return 3 * (value1 + value2)
        return sum
    } else {
        return value1 + value2
    }
}

console.log(sumOf(3,3))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkNumbers = (number1,number2) => {
    if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
        return true
    } else {
        return false
    }
}

console.log(checkNumbers(30,20))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharacter = (str, char_pos) => {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2)
}

console.log(removeCharacter("beast", 2))
/*

4)
 Create a function to find the largest of three given integers.
*/
const largestInteger = (num1, num2, num3) => {
        let max = 0;
        if((num1 >= num2) && (num1 >= num3)){
            max = num1;
        }
        else if((num2 >= num1) && (num2 >= num3)){
            max = num2;
        }
        else{
            max = num3;
        }
    return max;
    }

    console.log(largestInteger(3,6,10))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const rangeCheck = (a, b) => {
    if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) 
      || 
      (a >= 70 && a <= 100 && b >= 70 && b <= 100))
     {
    return true;
     } 
    else 
     {
    return false;
  }
}

console.log(rangeCheck(53, 60))

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const createCopies = (str, n) => {
    if (n < 0)
    return false;
  else
  return str.repeat(n);
}

console.log(createCopies("go", 3))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const stringNames = (str) => {
    if (str.length >= 3 && ((str.substring(0, 3) === 'Los') || (str.substring(0, 3) === 'New')))
      {return str
    } else {return ''}
}

console.log(stringNames("Zealand"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const integerSum = (numArray) => {
    return numArray[0] + numArray[1] + numArray[2];
}

console.log(integerSum([1,2,3]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const numOneOrThree = (numArrayCheck) => {
    if (numArrayCheck.indexOf(1) != -1 || numArrayCheck.indexOf(3) != -1){
        return true
     } 
     else
     {
        return false
     }
 }

 console.log(numOneOrThree([2,5]))
/*

10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const numOneOrThreeNot = (numArrayCheck) => {
    if (numArrayCheck.indexOf(1) === -1 || numArrayCheck.indexOf(3) === -1){
        return true
     } 
     else
     {
        return false
     }
 }

 console.log(numOneOrThreeNot([2,5]))
 /*

11)

Create a function to find the longest string from a given array of strings.
*/
const longestString = (array) => {
    let index = 0; 
    let elementLength = array[0].length;
for(let i=1; i< array.length; i++) {
    if(array[i].length > elementLength) {
        index = i; elementLength = array[i].length;
    }
}
return array[index];
}

console.log (longestString(["abc", "abcde", "abcd"]))
/*

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const findAngle = (angle) => {
    if(angle < 90) {
    return "Acute angle.";
  }
  if(angle === 90) {
    return "Right angle.";
  }
  if(angle < 180) {
    return "Obtuse angle.";
  }
  return "Straight angle.";
}

console.log(findAngle(70))

/*

13)

Create a function to find the index of the greatest element of a given array of integers
*/
const greatestIndex = (arr) => {
    if (arr.length === 0) {
        return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
console.log (greatestIndex([32, 64, 78, 24, 96]))
/*
14)

Create a function to get the largest even number from an array of integers.
*/
const largestEven = (myArr) => {
    myArr.sort((x, y) => y - x);

    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] % 2 == 0)
        return myArr[i];
      }
}

console.log (largestEven([20,300,700,653]))

/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
