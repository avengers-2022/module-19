var num = 15;

if (num % 2 == 0) {
    console.log("this number is even");
} else {
    console.log("this number is odd")
}


// using function

function evanOdd(number) {
    if (number % 2 == 0) {
        console.log("Number is Even!");
        return
    } else {
        console.log("Number is Odd!")
        return
    }
}

var result = evanOdd(13);
