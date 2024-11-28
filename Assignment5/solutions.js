
// 1. Multiplication using a function
function calculate(a, b) {
    console.log(a * b);
}
calculate(10, 20);

// 2. Create an array using new Array()
let arr = new Array(1, 2, 3, 4, 5);
console.log(arr);

// 3. Create a custom object
let obj = {
    name: "John",
    age: 30,
    location: "New York"
};
console.log(obj);

// 4. Apply background color to body on button click
function changeBodyColor() {
    document.body.style.backgroundColor = "lightblue";
}

// 5. Show X and Y coordinates on mousemove
document.addEventListener('mousemove', (event) => {
    document.getElementById('coordinates').innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
});

// 6. Convert input to uppercase and lowercase
function displayText() {
    let text = document.getElementById("textbox").value;
    document.getElementById("para1").innerText = text.toUpperCase();
    document.getElementById("para2").innerText = text.toLowerCase();
}

// 7. Change paragraph background color on hover
function mouseOverPara() {
    document.getElementById('hoverPara').style.backgroundColor = "grey";
}
function mouseOutPara() {
    document.getElementById('hoverPara').style.backgroundColor = "lightgrey";
}

// 8. Anonymous function example
let calculate = function () {
    console.log("Anonymous function executed");
};

// 9. Assign value to userName and log it
let userName = "Ajay";
console.log(userName);

// 10. Sum of two variables
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum);

// 11. Sum in alert
x = 15;
y = 20;
alert(x + y);

// 12. Get value from prompt and log it
let input = prompt("Enter a value:");
console.log(input);

// 13. Multiply two values and display using write()
let data1 = 100, data2 = 200;
document.write(data1 * data2);

// 14. String concatenation
let str1 = "Ajay", str2 = "Vijay";
console.log(str1 + str2);

// 15. Check data type
let floatData = 10.90;
console.log(typeof floatData);

// 16. Multiplication in alert
let a = 10, b = 20;
alert(a * b);

// 17. Division using write()
document.write(a / b);

// 18. Remainder using modulus
let num = 10;
console.log(num % 3);

// 19. Function on button click
function myFunc() {
    console.log("Button clicked");
}

// 20. Function on keyup event
function keyUpFunc() {
    console.log("Keyup event triggered");
}

// 21. Function on resize event
function onResize() {
    console.log("Window resized");
}
window.addEventListener('resize', onResize);

// 22. Multiplication using button click
function multiplyValues() {
    console.log(10 * 20);
}

// 23. Change paragraph content on button click
function changeParaContent() {
    document.querySelector('#para').innerHTML = "Paragraph content changed!";
}

// 24. Change background color on double click
function changeParaBg() {
    document.getElementById('paraDouble').style.backgroundColor = "grey";
}

// 25. Change paragraph content on mouseover
function changeContent() {
    document.getElementById('mousePara').innerHTML = "Content changed!";
}

// 26. Change color on hover
function hoverGrey() {
    document.getElementById('hoverColor').style.color = "grey";
}
function hoverBlue() {
    document.getElementById('hoverColor').style.color = "blue";
}

// 27. Show numbers 1 to 5 with breaks
for (let i = 1; i <= 5; i++) {
    document.write(i + "<br>");
}

// 28. Show even numbers using while loop
let i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// 29. Check even or odd
let data = 15;
if (data % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 30. Get textbox value
function getValue() {
    let val = document.getElementById('txt').value;
    console.log(val);
}

// 31. Add two textbox values
function sumTextboxes() {
    let data1 = parseInt(document.getElementById('txt1').value) || 0;
    let data2 = parseInt(document.getElementById('txt2').value) || 0;
    document.getElementById('para').innerText = data1 + data2;
}

// 32. Check if input is number or string
function checkValue() {
    let val = document.getElementById('txt').value;
    console.log(isNaN(val) ? "String" : "Number");
}

// 33. Show border for empty textbox
function validateTextbox() {
    let textbox = document.getElementById('txt');
    if (textbox.value.trim() === "") {
        textbox.style.border = "2px solid red";
    }
}

// 34. Show error for string input
function validateNumber() {
    let val = document.getElementById('txt').value;
    if (isNaN(val)) {
        document.getElementById('errorPara').innerText = "Only numbers are allowed";
    }
}
