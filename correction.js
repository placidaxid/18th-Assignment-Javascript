//Takes two numbers and sums up
//Question one
//var num1 = parseInt(prompt("Input first Number"));
//var num2 = parseInt(prompt("Input second Number"));
//sum = num1 + num2
//output1 = "The sum of " + num1 + " & " + num2 + " = " + sum 
//alert(output1)

//Question two

var fname = prompt("enter your Firstname");
var lname = prompt("enter your Lastname")
var fourchar = fname.slice(0,4);
var lastchar = lname.slice(0,1);
var combine = fourchar + lastchar;

var userID = combine.toLowerCase();
var output2 = "Your capacity userID is " + userID;
alert(output2)