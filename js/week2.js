let days = ["sunday","monday","tuesday","wednesday","thursday","friday","sunday"]
let maleNames = ["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame",]
let femaleNames = ["akosua","adwoa","abenaa","akua","yaa","afua","ama"]

function getUserInput(){
    var userInput = [];
    var date = prompt("Enter your date of birth:")
    userInput.push(date);
    var month = prompt("Enter your month of birth:")
    userInput.push(month);
    var year = prompt("Enter your year of birth:")
    userInput.push(year);
    var month = prompt("Enter your gender (M/F):")
    userInput.push(gender);
    return userInput;
    
}
function getInput(){
    var userInput = []
    var date = document.getElementById("date").value
    userInput.push(date);
    var date = document.getElementById("month").value
    userInput.push(month);
    var date = document.getElementById("year").value
    userInput.push(year);
    var date = document.getElementById("gender").value
    userInput.push(gender);
}
function calculateDay(){
    // var data =getUserInput
    var data = getInput() ;
    var cloneList = []; //temporary pointer list
    var CC = parseInt(data[2].split(data[2][2])[0]);
    var YY = parseInt(data[2].split(data[2][1])[1]);
    var MM = parseInt(data[1];
    //ensure month is valid
    if (MM<1 || MM>12) {
        alert("incorrect month.try again!")
        return;
    }
    //ensure day is valid
    var DD = parseInt(data[0]);
    if(DD<0 || DD>31){
        alert("incorrect date.try again")
        return;
    }
    var gender = getGender(data[3]);
    //check gender and determine the list of names to use
    if (gender) {
        if (gender === 1){
            cloneList = maleNames;
        }
        if (gender === 2) {
            cloneList = femaleNames;
        }
    }else {
        return;
    }
    //calculate day of birth-formula 
    var dayIndex = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    var dayIndex = dayIndex.toFixed();
    dob = days[dayIndex];
    userAkanName = cloneList[dayIndex];
    //if user input is empty,alert and give user a chance to enter details again
    if(userAkanName === "" || dob ===""){
        alert("enter your details first");
        calculateDay();
    }
    var msg = "your Akan name is:".concat(userAkanName);
    msg.concat("\n you were born on a: ").concat(dob);
    alert(msg);
}
function getGender(genderInput){
    var gender= genderInput.toUpperCase();
    var isMale=1;
    var isFemale=2;
    if (gender.startswith("M")){
        //male logic
        return isMale; //1
    }else {
        if (gender.startswith("F")){
            //female logic
            return isFemale; //2
        } else {
            alert("gender not known");
            return false
        }
    }