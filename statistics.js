
'use strict';



function get1() {
    let getArr = localStorage.getItem("saveKey");
    let newArr = JSON.parse(getArr);

   
     if(newArr != null){
    for (let i = 0 ; i < newArr.length ; i++) {

        let tablePlace = document.getElementById("table");

        let tableRow = document.createElement("tr");
        let tableData1st = document.createElement("td");
        let tableData2nd = document.createElement("td");
        let tableData3rd = document.createElement("td");
        let tableData4th = document.createElement("td");

        tableData1st.textContent = newArr[i]["foodID"];
        tableData2nd.textContent = newArr[i]["foodName"];
        tableData3rd.textContent = newArr[i]["foodtype"];
        tableData4th.textContent = newArr[i]["foodprice"];

        tableRow.appendChild(tableData1st);
        tableRow.appendChild(tableData2nd);
        tableRow.appendChild(tableData3rd);
        tableRow.appendChild(tableData4th);
        tablePlace.appendChild(tableRow);




    }



}





}
get1();



