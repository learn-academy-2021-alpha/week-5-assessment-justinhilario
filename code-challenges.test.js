// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

describe ("when 'enigmaMachine' is called", () => {
    let secretNaziWord1 = "lackadaisical"
    let code1 = "l4ck4d41s1c4l"
    let secretNaziWord2 = "gobbledygook"
    let code2 = "g0bbl3dyg00k"
    it ("replaces certain letters", () => {
        expect (enigmaMachine(secretNaziWord1)).toEqual(code1)
    })
    it ("replaces certain letters", () => {
        expect (enigmaMachine(secretNaziWord2)).toEqual(code2)
    })
})


// b) Create the function that makes the test pass.

const enigmaMachine = (string) => {
    let coded = string.replace(/e/ig,'3').replace(/a/ig,'4').replace(/i/g,'1').replace(/o/g,'0')
    return coded
}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: ["Apple", "Banana", "Peach"]

describe ("when 'findsTheA' is called", () => {
    let arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
    let wordsWithA = ["Apple", "Banana", "Peach"]
    it ("returns letters with A", () => {
        expect (findsTheA(arrayOfWords)).toEqual(wordsWithA)
    })
})



// b) Create the function that makes the test pass.

const findsTheA = () => {
    let array1 = arrayOfWords.filter( word => {
        return word.includes('a') || word.includes('A')
    })
    return array1
}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false


describe ("when 'fullHouse' is called", () => {
    let hand1 = [5, 5, 5, 3, 3]
    let result1 = true
    let hand2 = [5, 5, 3, 3, 4]
    let result2 = false
    let hand3 = [5, 5, 5, 5, 4]
    let result3 = false
    it ("decides full house", () => {
        expect (fullHouse(hand1)).toEqual(result1)
    })
    it ("replaces full house", () => {
        expect (fullHouse(hand2)).toEqual(result2)
    })
    it ("replaces full house", () => {
        expect (fullHouse(hand3)).toEqual(result3)
    })
})




// b) Create the function that makes the test pass.


const fullHouse = (hand) => {
    for(let i=0; i<hand.length; i++){
        if ((hand[0] === hand[1] && hand[1] === hand[2] && hand[3] === hand[4]) || (hand[0] === hand[1] &&
            hand[2] === hand[3] &&
            hand[3] === hand[4])) {
            return true
        } else {
            return false
        }
    }
}

// iterate over hand and see if perspective indexes match
// The every() method tests whether all elements in an array pass the test implemented by the provided function. It returns a Boolean value.
// returns true for all tests, so haven't been able to figure this one out


 