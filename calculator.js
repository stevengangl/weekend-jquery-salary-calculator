$(document).ready(readyNow);

let employees = [];


function readyNow(){
    console.log('dom is loaded')
// need to add click event that calls a function()
// need to make a function to add the info 
// also need a listener for when the button is clicked 
$("#submitInfoBtn").on('click', addEmployeeInfo) 

}
// function to grab info from input fields 
// function needs to add new info onto the DOM
function addEmployeeInfo(){
    console.log('inside of addEmployeeInfo()');

// Have to make variables to get the input info
const firstName = $("#firstNameInput").val();
const lastName = $("#lastNameInput").val();
const id =$("#idInput").val();
const title = $("#titleInput").val();
const salary =$('#salaryInput').val();
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

console.log(' employee array ',employees);
render();

}

function render(){
    for(let info of employees){
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