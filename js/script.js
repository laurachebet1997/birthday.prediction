var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame",]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]


var dob = ""; //day index 0-6
var userAkanName = "";
//BDD1; get user information

function getInput() {
    //user inputs data using a form.return a list/array of input data
    var userInput = [];
    var date = document.getElementById("date").value;
    userInput.push(date);
    var month = document.getElementById("month").value;
    userInput.push(month);
    var year = document.getElementById("year").value;
    userInput.push(year);
    var gender = document.getElementById("gender").value;
    userInput.push(gender);
    return userInput;
}
//BDD2. Calculate the day of birth given the user details
function calculateDay() {
    // var data = getInput
    var data = getInput();
    var cloneList = []; //temporary pointer list
    var CC = parseInt(data[2].split(data[2][2])[0]);
    var YY = parseInt(data[2].split(data[2][1])[1]);
    var MM = parseInt(data[1]);
    //ensure month is valid
    if (MM < 1 || MM > 12) {
        alert("incorrect month.try again!")
        return;
    }
    //ensure day is valid
    var DD = parseInt(data[0]);
    if (DD < 1 || DD > 31) {
        alert("incorrect date.try again")
        return;
    }
    var gender = getGender(data[3]);
    console.log(getGender);
    //check gender and determine the list of names to use
    if (gender) {


        if (gender === 1) {
            cloneList = maleNames;
        }
        if (gender === 2) {
            cloneList = femaleNames;
        }
    }
    else {
        return;
    }
    //calculate day of birth-formula 
    var number = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    var number = number.toFixed(); //number
    dob = days[number];
    userAkanName = cloneList[number]; //kwasi
    submit(userAkanName, dob);


    if (userAkanName === "" || dob === "") {
        alert("Enter details first")
        calculateDay();
    }

    var msg = "Your Akan name is: ".concat(userAkanName);
    msg.concat("\n You were born on a: ").concat(dob);
    alert(msg);
}

function submit() {
    //function to display Akan name
    if (userAkanName === "" || dob === "") {
        alert("enter your details first");
        calculateDay();
    }

    var msg = "Your Akan name is: ".concat(userAkanName);
    msg.concat("\n You were born on a: ").concat(dob);
    alert(msg);
}

//BDD3;get gender to determine the names used
function getGender(genderInput) {
    var gender = genderInput.toUpperCase();
    var isMale = 1;
    var isFemale = 2;

    if (gender.startsWith("M")) {
        //male logic
        return isMale; //1
    }
    else {
        if (gender.startsWith("F")) {
            //female logic
            return isFemale; //2
        }
        else {
            alert("gender not known");
            return false;
        }
    }
}
