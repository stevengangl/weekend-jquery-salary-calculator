$(document).ready(readyNow);

let employees = [];
let employeeSalary = 0;

// KEY
// 🟢 = comments on what is confusing
// 🔴 problem areas within my code
// 🔵 fixed problem area
// ⭐️ Functions



// ⭐️TODO⭐️
//1️⃣ clear the input fields✅
//2️⃣ calculate monthly costs✅
//3️⃣ append monthly costs to the dom at below the table✅
//4️⃣ If totalMonthlyCost > $20,000, add red background to the total monthly cost.
//5️⃣ Create a delete button that removes an employee from the DOM
//6️⃣ Fix stuff on DOM so it has correct Data


//⭐️
function readyNow() {
    console.log('dom is loaded')
    // need to add click event that calls a function()
    // need to make a function to add the info 
    // also need a listener for when the button is clicked 
    $("#submitInfoBtn").on('click', addEmployeeInfo) 

}
// function to grab info from input fields 
// function needs to add new info onto the DOM
//⭐️
function addEmployeeInfo() {
    console.log('inside of addEmployeeInfo()');

    // Have to make variables to get the input info
    const firstName = $("#firstNameInput").val();
    const lastName = $("#lastNameInput").val();
    const id = $("#idInput").val();
    const title = $("#titleInput").val();
    const salary = $('#salaryInput').val();
    //console log the info to make sure it works correctly
    // console.log(`
    // Input Info: 
    // First Name: ${firstName}
    // Last Name: ${lastName}
    // ID #: ${id}
    // Title: ${title}
    // Salary: ${salary}
    // `);

    let employeeInfo = {
        employeeFirstName: firstName,
        employeeLastName: lastName,
        employeeId: id,
        employeeTitle: title,
        employeeSalary: salary
    };

    employees.push(employeeInfo);

    console.log(' employee array ', employees);
    //render puts the info onto the DOM
    // than this resets the input form
    //🔵I had render above the other functions so it wasnt working🔵
    resetInputField();
    totalMonthlyCost();
    render();//🔴this was in the wrong spot but it works now!!
}
//⭐️
function resetInputField() {
    //this is a "setter?" its job is to empty the input field
    // it basically adds an empty string to the input form
    $('#firstNameInput').val('');
    $("#lastNameInput").val('');
    $("#idInput").val('');
    $("#titleInput").val('');
    $('#salaryInput').val('');
}

//⭐️
function totalMonthlyCost(){
    console.log('in totalMonthlyCost()');
    console.log('this is the employee array:', employees);
    //checking to see if the function is grabbing the salary
    //the index is because this object is in the global array
    console.log('checking salary of employee array', employees[0].employeeId);//🟢I needed help on this, i didnt realize i needed to access the index

// the property "employeeSalary" of the object "employeeInfo"   is what i need to target to get the salary, 
//made a variable named employeeSalary
//that variable stores the salary by accessing its property within the object

//🟢this for loop took me about 1 hour to figure out...
let variableA = 0;           // 🟢I dont have a good grasp on this  for loop concept
                              //🟢 Ive had to get alot of help to work through this
for(let salary of employees){ // 🟢I didnt know I needed to add a new variable
    variableA +=  1 * salary.employeeSalary
}
employeeSalary = variableA;
console.log('employee salary:',employeeSalary);
}

//⭐️
function render() {

    // $('#employeeInfoForm').empty();
    for (let info of employees) {
        console.log('individual info', info)
        // need to append the info to the DOM
        $("#employeeInfoTable").append(`
    <tr>
        <td>${info.employeeFirstName}</td>
        <td>${info.employeeLastName}</td>
        <td>${info.employeeId}</td>
        <td>${info.employeeId}</td>
        <td>${info.employeeSalary}</td>
        <td>
             <button class ='deleteBtn'>
                 Delete
             </button>
         </td>
    </tr>
    `);
    };
    //🔴the DOM is not rendering this correctly, its 1 behind
    $("#employeeMonthlyCost").html(`total monthly costs <p>${employeeSalary}</p>`);
}