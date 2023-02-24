$(document).ready(readyNow);


//add Readynow() 
function readyNow(){
    console.log('DOM is loaded')
// add a listener for the "submitEmployeeInfoBtn" button
$("#submitEmployeeInfoBtn").on('click', employeeInfo)
}

function employeeInfo(){
    console.log('in employeeInfo()')
}