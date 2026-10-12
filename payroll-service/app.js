updateHours();

function addShift() {

    let employee =
        document.getElementById("employee").value;

    let shift =
        document.getElementById("shift").value;

    let hours =
        document.getElementById("hours").value;

    let table =
        document.getElementById("scheduleTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = employee;
    row.insertCell(1).innerHTML = shift;
    row.insertCell(2).innerHTML = hours;

    updateHours();
}

function removeShift() {

    let table =
        document.getElementById("scheduleTable");

    if(table.rows.length > 2){
        table.deleteRow(table.rows.length - 1);
    }

    updateHours();
}

function updateHours(){

    let table =
        document.getElementById("scheduleTable");

    let total = 0;

    for(let i=1;i<table.rows.length;i++){

        total += parseInt(
             table.rows[i].cells[2].innerHTML);
    }

    document.getElementById("usedHours")
        .innerHTML = total;
}
