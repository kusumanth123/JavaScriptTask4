//1. Create a function named hello that prints "Hello Everyone".
function hello(){
    console.log("Hello Everyone");
    
}
hello()

//2.Create a function named welcome that prints "Welcome to JavaScript" and call it.
function welcome(){
    console.log("Welcome to JavaScript");
    
}
welcome()

//3.Create a function named navi that prints your name.
function navi(){
    console.log("Sanam Kusumanth Reddy");
    
}
navi()

//4.Create a function named message that prints three different messages.
function message(){
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Night");  
}
message()

//5.Create a function named numbers that prints numbers from 1 to 5 using a for loop.
function numbers(){
    for(let i = 1;i<=5;i++){
        console.log(i)
    }
}
numbers()

//6.Create a function named check that contains an if condition and prints a message when the condition is true.
function check(){
    if(10 > 2){
        console.log("condition is true");
    }
}
check()

//7.Create a function named details that prints your name, qualification, and role.
function details(){
    let name = "Sanam Kusumanth Reddy"
    let qualification = "BE-ECE"
    let role = "Developer"
    console.log(name)
    console.log(qualification)
    console.log(role)
}
details()

//8.Create a function named company that prints your company name.
function company(){
    let companyName= "Stackly"
    console.log(companyName)
}
company()

//9.Create a function named welcomeUser and call it three times.
function welcomeUser(){
    console.log("Hey User");
}
welcomeUser()
welcomeUser()
welcomeUser()

//10.Create two different functions and call both functions.
function user1(){
    console.log("Hello User1");
}
function user2(){
    console.log("Hello User2");
}
user1()
user2()

//11.Create a function with one parameter and print the parameter value.
function bank(user){
    console.log(`welcome ${user}`);  
}
bank("Kusumanth")

//12.Create a function with two parameters and print both values.
function loginDetails(name,password){
    console.log(`name : ${name}`);
    console.log(`password : ${password}`);
}
loginDetails("kusu",1234)

//13.Create a function add(a,b) that prints the addition of two numbers.
function add(a,b){
    console.log(a+b);
}
add(2,4)

//14.Create a function sub(a,b) that prints the subtraction of two numbers.
function sub(a,b){
    console.log(a-b);
}
sub(20,10)

//15.Create a function multiply(a,b) that prints the multiplication of two numbers.
function multiply(a,b){
    console.log(a*b);   
}
multiply(14,7)

//16.Create a function divide(a,b) that prints the division of two numbers.
function divide(a,b){
    console.log(a/b);  
}
divide(20,5)

//17.Create a function student(name, age) and print the student's details.
function student(name,age){
    console.log(name);
    console.log(age); 
}
student("Krishna", 23)

//18.Create a function employee(name, role, salary) and print all three values.
function employee(name,role,salary){
    console.log(name);
    console.log(role);
    console.log(salary);   
}
employee("Lokesh","Developer",90000)

//19.Create a function with four parameters and pass four arguments while calling it.
function bankAccount(bankName,holderName,accountNumber,balance){
    console.log(bankName);
    console.log(holderName);
    console.log(accountNumber);
    console.log(balance)   
}
bankAccount("ICICI","Aishu",38648900024,50000)

//20.Create a function with six parameters and pass six different values
function info(name,age,city,course,college,cgpa){
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`City : ${city}`);
    console.log(`Course : ${course}`);
    console.log(`College : ${college}`);
    console.log(`cgpa : ${cgpa}`);
}
info("Kusumanth",24,"Coimbatore","Electronics","Anna University",8.78)

//21.Create a function student(name, department, cgpa) with a default value for department.
function student(name,department = "NONE",cgpa,){
    console.log(name);
    console.log(department);
    console.log(cgpa);   
}
student("Rajeswari","CSE",10)

//22.Create a function user(name, age = 18) and call it without passing the age.
function user(name,age =18){
    console.log(name);
    console.log(age);   
}
user("Virat")

//23.Create a function employee(name, role = "Developer") and call it with only the name.
function employee(name,role = "Developer"){
    console.log(name);
    console.log(role);   
}
employee("Jaggu")

//24.Create a function form(name, department, cgpa, disability = "no") similar to the function in your notes. Call it twice with different arguments.
function form(name,department,cgpa,disability = "no"){
    console.log(`Name : ${name}`);
    console.log(`Department : ${department}`);
    console.log(`CGPA : ${cgpa}`);
    console.log(`Disability : ${disability}`);   
}
form("Chinnu","CSE",9.2,"yes")
form("Kanna","ECE",8.2)

//25.Create a function with two normal parameters and one default parameter.
function employeeDetail(empName,role,training = "yes"){
    console.log(`Employee Name : ${empName}`);
    console.log(`Employee role : ${role}`);
    console.log(`Training : ${training}`);
}
employeeDetail("Sanam","Web Developer")

//26.Create a function that accepts two numbers and returns their addition.
function addition(x,y){
    return x + y;
}
let res1 = addition(100,200)
console.log(res1);

//27.Create a function that accepts two numbers and returns their subtraction.
function subtraction(x,y){
    return x - y;
}
let res2 = subtraction(20,10)
console.log(res2);

//28.Create a function that accepts two numbers and returns their multiplication.
function multiplication(x,y){
    return x * y;
}
let res3 = multiplication(12,5)
console.log(res3);

//29.Create a function that accepts two numbers and returns their division.
function division(x,y){
    return x/y;
}
let res4 = division(10,5)
console.log(res4);

//30.Create a function salary() that returns 40000. Store the returned value in a variable and print it.
function salary(){
    return 40000;
}
let sal = salary()
console.log(sal);

//31.Create a function that accepts an employee's salary and returns the salary.
function empInfo(salary){
    return salary;
}
let empSal = empInfo(50000)
console.log(empSal);

//32.Create a function that returns a person's name. Store the returned value in a variable and print it.
function user(name){
    return name;
}
let res5 = user("Dhoni")
console.log(res5);

//33.Create a function that returns "Pass" if marks are 35 or above and "Fail" otherwise.
function validation(marks){
    if(marks >= 35){
        return "Pass";
    }
    else{
        return "Fail"
    }
}

let result = validation(88)
console.log(result);

//34.Create a function that accepts price and discount and returns the discount value.
function shopping(price,discount){
    return ` Discount : ${discount}%`
}
let result1 = shopping(200,10)
console.log(result1);

//35.Create a function that returns the result of an arithmetic operation and use that returned value in another function.
function fun1(a,b){
    return a+b;
}
let resultAdd = fun1(10,20)

function fun2(){
    console.log(resultAdd);
}
fun2()

//36.Create a variable outside a function and access it inside the function.
var name = "Sachin"
function outVar(){
    console.log(`${name} has 100 centuries`);
}
outVar()

//37.Create an object outside a function containing name and designation. Create a function that prints those values.
let obj = {
    name : "Dhoni",
    designation : "WicketKeeper"
}
function cricketerDetails(){
    console.log(obj.name);
    console.log(obj.designation);   
}
cricketerDetails()

//38.Create a variable salary outside a function. Create a function that adds a bonus to that salary and prints the result.
let salary1 = 30000
function sall(bonus){
    console.log(salary1 + bonus);
}
sall(5000)

//39.Create an object containing employee details outside a function. Access its properties inside a function.
let empObject = {
    name : "Raja",
    role : "Full Stack Developer",
    sal  : 60000,
    city : "Chennai"
} 
function empDet(){
    console.log(empObject.name);
    console.log(empObject.role);
    console.log(empObject.sal);
    console.log(empObject.city);
}
empDet()

//40.Create two functions that access the same variable created outside both functions.
let str = "Frnds"
function sample1(){
    console.log(`Hello ${str}`);
}
function sample2(){
    console.log(`Bye ${str}`);   
}
sample1()
sample2()

//41.Create a named function that accepts a parameter and prints it.
function myInfo(surname){
    console.log(surname);
}
myInfo("sanam")

//42.Create an anonymous function stored inside a variable and call it.
let anonymous = function(){
    console.log("Have a nice day mitrama");
}
anonymous()

//43.Create an arrow function that accepts one parameter and prints it.
let arrow = (gameName)=>{
    console.log(`I will play ${gameName}`);  
}
arrow("Cricket")

//44.Create an arrow function with two parameters that adds two numbers.
let arrow1 = (num1,num2) =>{
    console.log(num1 + num2);
}
arrow1(1000,2000)

//45.Create a named function, anonymous function, and arrow function that all perform the same addition operation.
function additionOper(a1,b1){
    console.log(a1 + b1);
}

let anonymousfun = function(a1,b1){
    console.log(a1 + b1);
}

let arrowfun = (a1,b1)=>{
    console.log(a1 + b1)
}

additionOper(10,20);
anonymousfun(2,7);
arrowfun(23,9);

//46.Create an IIFE that immediately prints "Hello JavaScript" when the program runs.
(function (){
    console.log("Hello JavaScript");  
})();

//47.Create an IIFE that accepts a name parameter and prints "Hello" followed by the name.
(function (name){
    console.log(`Hello ${name}`); 
})("Kusumanth");

//48.Create an IIFE that accepts product and discount parameters and displays a special-offer message, similar to the example in your notes
(function (product,discount){
    alert(`for product ${product}, discount will be ${discount}%`)
})("Iphone",30);

//49.Create an add function that accepts a callback and two numbers. Add the numbers and then call the callback function with two numbers.
function combo(call, a, b) {
    let res = a + b;
    call(res);
}
function show(res) {
    console.log(res);
}
combo(show, 10, 20);

//50.Create a sub function and pass it as a callback to the add function. The add function should first print the addition result and then execute the subtraction callback, following the structure from your notes.
function adds(callback,x,y){
    console.log(x + y);
    callback(x,y)
}
function subs(a,b){
    console.log(a - b);
}
adds(sub,10,5)