function submitOrder(){

    let type =
        document.getElementById(
        "type").value;

    let product =
        document.getElementById(
        "product").value;

    let quantity =
        document.getElementById(
        "quantity").value;

    let table =
        document.getElementById(
        "ordersTable");

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML = type;
    row.insertCell(1).innerHTML = product;
    row.insertCell(2).innerHTML = quantity;
}
