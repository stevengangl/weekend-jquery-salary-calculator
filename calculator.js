$(document).ready(readyNow);
//variables will be stores
let monthlyCost = [];
let employees = [];

//add Readynow() 
function readyNow() {
    console.log('DOM is loaded')
    // add a listener for the "submitEmployeeInfoBtn" button
    $("#submitEmployeeInfoBtn").on('click', addEmployeeInfo)
}

function addEmployeeInfo() {
    console.log('in employeeInfo()')
    const firstNameInputValue = $("#firstNameInput").val();
    const lastNameInputValue = $("#lastNameInput").val();
    const idInputValue = $("#idInput").val();
    const titleInputValue = $("#titleInput").val();
    const salaryInputValue = $("#salaryInput").val();
    console.log(`
    First Name:${firstNameInputValue}
    Last Name:${lastNameInputValue}
    ID:${idInputValue}
    Title:${titleInputValue}
    Salary:${salaryInputValue}
    `);
    const employeeInfo = {
        first: firstNameInputValue,
        last: lastNameInputValue,
        ID: idInputValue,
        title: titleInputValue,
        salary: salaryInputValue
    };
    employees.push(employeeInfo);
    console.log('stuff in employees', employeeInfo)

    render();
}

function render() {
 $("#loggedInfo").empty();
//im trying to reset my form after i click the button
for(let people of employees){
    // trying to update the dom with the submitted info
    $('#loggedInfo').append(`
 
    <tr>
        <td>${people.first}</td>
        <td>${people.last}</td>
        <td>${people.ID}</td>
        <td>${people.title}</td>
        <td>${people.salary}</td>
        <button id='deleteBtn'>Delete</button>
    </tr>
    
   
    `)
}
}