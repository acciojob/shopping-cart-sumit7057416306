//your code here
let grandtotal = 0;
function addData(){
    let name=document.querySelector("#item-name-input").value;
    let qty=document.querySelector("#item-qty-input").value;
    let price=document.querySelector("#item-price-input").value;
    console.log(name, qty, price);
    let item=document.createElement("tr");
    let td1=document.createElement("td");
    td1.textContent=name;
    let td2=document.createElement("td");
    td2.textContent=qty;
    let td3=document.createElement("td");
    td3.textContent=price;
    let td4=document.createElement("td");
    td4.textContent=qty*price;
    item.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(item);
    grandtotal+=qty*price;
    document.querySelector("#grand_total").textContent=grandtotal;
    document.querySelector("#myinputs").reset();
}
