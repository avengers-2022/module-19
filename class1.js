// variable

var name = "Arif";
var number = 25;
var isHot = true;

console.log(typeof name);
console.log(typeof number);
console.log(typeof isHot);



// conditions

var mobilePrice = 12000;

if (mobilePrice > 19000) {
    console.log('Buy Mobile');
} else {
    console.log('do not buy mobile')
}

// function

function practice(num1, num2) {
    var add = num1 + num2;
    return add
}

var result = practice(50, 5);
console.log(result)

// loop

var arr = [10, 52, 41, 32, 15, 32, 84, 13, 46];

for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    console.log(number);
}