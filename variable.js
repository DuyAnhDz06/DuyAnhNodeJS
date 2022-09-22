//1.  Khai báo bằng "Var"
var a = 3
var b = 5
var c = a + b
var d = a * b
console.log('a = ' + a)
console.log('b = ' + b)
console.log('c =  a + b = ' + c)
console.log('d = a * b = ' + d)

//2. KHAI BÁO BIẾN = "lET"

let city = "Ha Noi"
let country = "Viet Nam"
console.log(city + " is the capital of " + country)

//3. KHAI BÁO  HẰNG SỐ BẰNG "CONST"

const pi = 3.14
console.log(" Pi = " + pi)

var a = 'DuyAnhDeepTry'
console.log(a)

var grade = 7.5
if (grade >= 5.0) {
    console.log("Passed")
} else {
    console.log("Failed")
}


let point = 9.5
if (point >= 9.0 && point <= 10) {
    console.log("Grade: Distinction")
} else if (point >= 7.0 && point <= 8.0) {
    console.log("Grade: Merit")
} else if (point >= 5.0 && point <= 7.0) {
    console.log("Grade: Pass")
} else if (point >= 0 && point <= 5.0) {
    console.log("Grade: Failed")
} else {
    console.log("Invalid grade")
}


let gender = 'm'
if (gender == 'm' || gender == 'M') {
    console.log("You are Male")
} else if (gender == 'f' || gender == 'F') {
    console.log("You are FeMale")
}

var menu = 99
switch (menu) {
    case 1:
        console.log("You have selected menu 1")
        break
    case 2:
        console.log("You have selected menu 2")
        break
    case 3:
        console.log("You have selected menu 3")
        break

    default:
        console.log("Invalid Menu")
        // break

}

// For loop
// In dãy số từ 1 đến 10
for (var i = 1; i <= 10; i++) {
    console.log(i)
}
//in ra dãy số 1 đến 10 dừng ở số  5
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        break // Stop
    }

}
//  In ra dãy số từ 1 đến 10 nhưng bỏ qua số 5

for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        continue // Skip
    }
    console.log(i)
}
