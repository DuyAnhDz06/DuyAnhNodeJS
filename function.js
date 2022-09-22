//1. Hàm không có tham số(parameter) và không có return (giá trị trả về)

function hello() {
    console.log("Hello World!");
}
hello()
//2. Hàm có tham số và không có return 
function sum(a, b) {
    console.log(a + b)
}
sum(20, 30)

//3. Hàm không có tham số nhưng có return
function year() {
    return 2022
}
console.log("Current year: " + year())

//4. Hàm có cả tham số và có cả return
function sayHello(name, age) {
    // console.log("Hello " + name)
    // console.log("You are " + age + " years old.")
    var output = ("Hello " + name + ". You Are " + age + " years old.")
    return output
}
console.log("================================")

function sayHI(name, age) {
    let output = ("Hi " + name + ". You Are " + age + " years old.")
    return output
}
console.log(sayHello("Duyanhdz", 69))
console.log(sayHI("DUYANHDEPTRAI", 69))
// var : phạm vi tác dụng là trong toàn bộ file code => global variable
// let : phạm vi tác dụng chỉ trong 1 đoạn code (ex: function) => local variable