function filterTable(){

    let filter =
        document.getElementById(
        "searchBox"
        ).value.toLowerCase();

    let table =
        document.getElementById(
        "inventoryTable");

    let rows =
        table.getElementsByTagName("tr");

    for(let i=1;i<rows.length;i++){

        let text =
            rows[i].cells[0]
            .innerHTML.toLowerCase();

        if(text.includes(filter)){
            rows[i].style.display="";
        }
        else{
            rows[i].style.display="none";
        }
    }
}

function adjustInventory(){

    let item =
        document.getElementById(
        "itemName").value;

    let count =
        document.getElementById(
        "itemCount").value;

    let table =
        document.getElementById(
        "inventoryTable");

    for(let i=1;i<table.rows.length;i++){

        if(
        table.rows[i].cells[0]
        .innerHTML.toLowerCase()
        ==
        item.toLowerCase()
        ){

            table.rows[i]
            .cells[1]
            .innerHTML = count;
        }
    }
}
