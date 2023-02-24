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
$('#employeeInfoForm').empty();
//im trying to reset my form after i click the button
for(let people of employees){
    // trying to update the dom with the submitted info
    $('#employeeInfoForm').append(`
 
    <tr>
        <th>${people.first}</th>
        <th>${people.last}</th>
        <th>${people.ID}</th>
        <th>${people.title}</th>
        <th>${people.salary}</th>
        <button id ='deleteBtn'>Delete</button>people
    </tr>
    
   
    `)
}
}