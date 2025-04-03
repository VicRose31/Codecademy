// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//Function that validates credit card numbers by using Luhn algorithm
//start sum with numeric value of last element of array
//start counter at 0, which will start to count at penultimate element of array
//starting at penultimate element, loop through array using decrementer 
//check counter to see if counter is even or odd
//even counter values get multiplied by two and added to sum
//if the multiplied value is greater than 9, subtract 9 from sum
//else, odd counter values get added to sum
//increment counter by 1 every time the loop completes
//return true if sum modulo 10 has remainder of 0, else return false
const validateCred = array => {
    let sum = array[array.length-1];
    let counter = 0;

    for (let i = array.length - 2; i >= 0; i--) {
        if (counter % 2 === 0) {
            let timesTwo = array[i] * 2;
            sum += timesTwo;

            if (timesTwo > 9) {
                sum -= 9;
            }
        } else {
            sum += array[i];
        }
        counter++;
    }
    return (sum % 10 === 0 ? console.log('true') : console.log('false'));
}

//Test validateCred function
//validateCred(valid5);

//Function that finds invalid credit card numbers and returns array of invalid cards
const findInvalidCards = array => {
    const invalidCards = [];
    for (let i = 0; i < array.length; i++) {
        if (!validateCred(array[i])) {
            invalidCards.push(array[i]);
        }
    }
    return invalidCards;
}

//Test findInvalidCards function
//findInvalidCards(batch);

//Function to identify which credit card company may have issued
//a faulty credit card number
const idInvalidCardCompanies = nestedArray => {
    const faultyCardCompanies = [];
    for (let i = 0; i < nestedArray.length; i++) {
        let company = '';
        switch(nestedArray[i][0]) {
            case 3:
                company = 'Amex (American Express)';
                break;
            case 4:
                company = 'Visa';
                break;
            case 5:
                company = 'Mastercard';
                break;
            case 6: 
                company = 'Discover';
                break;
            default:
                company = 'Company not found';
        }
        if (!faultyCardCompanies.includes(company)) {
            faultyCardCompanies.push(company);
        }
        
    }
    console.log(faultyCardCompanies);
}

//Test idInvalidCardCompanies function
//idInvalidCardCompanies(batch);


//Function that validates credit card numbers by using Luhn algorithm
const validateCredString = param => {
    //change string parameter to array of numbers
    //split string into array, separating every character as an individual element
    //then map each element of array to new array as a Number
    const array = param.split('').map(Number);
    return array;
}

//Test valididateCredString function 
validateCred(validateCredString('6561270509757527'));



//Additional Challenge: Create a function that will convert invalid numbers into valid numbers.


