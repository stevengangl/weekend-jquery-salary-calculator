$(document).ready(readyNow);

let employees = [];

// ⭐️TODO⭐️
//1️⃣ clear the input fields
//2️⃣ calculate monthly costs
//3️⃣ append monthly costs to the dom at below the table
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
    render();
    // than this resets the input form
    resetInputField();
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
    `)
    }
}