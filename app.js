/*`use strict`
let newFood1 = document.getElementById("formFood");


const allFood = [];

let a = 0
function Food(FoodID,FoodName, FoodType, FoodPrice) {
   this.FoodID = a++;
   this.FoodName = FoodName;
   this.FoodType = FoodType;
   this.FoodPrice = FoodPrice;
   allFood.push(this);


}


 let s = new Food(FoodID,FoodName,FoodType,FoodPrice);
 s.render();


newFood1.addEventListener("submit", handleSubmit);



function handleSubmit(event) {
   event.preventDefult();

   let FoodName = event.targert.FoodName.value;
   let FoodType = event.targert.FoodType.value;
   let FoodPrice = event.targert.FoodPrice.value;


   let newFood = new Food(FoodName, FoodType, FoodPrice);
   newFood.render();

}







/*Food.prototype.render = function () {
   let trE = document.createElement("tr");

   trE.innerHTML = `
   <td>${this.FoodID}</td>
   <td>${this.FoodName}</td>
   <td>${this.FoodType}</td>
   <td>${this.FoodPrice}</td>
   
   
   
  `;

   newTable.appendChild(trE);


}

Food.prototype.render = function () {
   /*let bd = document.getElementById("body");
   let trE = document.createElement("tr");
   let tdata1 = document.createElement("td");
   let tdata2 = document.createElement("td");
   let tdata3 = document.createElement("td");
   let tdata4 = document.createElement("td");
   tdata1.textContent=this.FoodID;
   tdata2.textContent=this.FoodName;
   tdata3.textContent=this.FoodType;
   tdata4.textContent=this.FoodPrice;
   trE.appendChild(tdata1);
   trE.appendChild(tdata2);
   trE.appendChild(tdata3);
   trE.appendChild(tdata4);
   
   bd.appendChild(trE);

   let q= document.getElementById("mn");
   let b =document.createElement("p");
   b.textContent = this.FoodName;
    q.appendChild(b);


   





}*/

'use strict';
const allFood=[];

function Food(foodID ,foodName,foodtype,foodprice) {
    
    this.foodID = foodID; 
    this.foodName=foodName;
    this.foodtype=foodtype;
    this.foodprice=foodprice;

    allFood.push(this);
}

function randomIDNumber () {
      return (Math.floor(Math.random()*(9999-1000+1))+1000);
    }


/*Food.prototype.render = function() {

    let tablePlace = document.getElementById("table");

    let tableRow = document.createElement("tr");
    let tableData1st = document.createElement("td");
    let tableData2nd = document.createElement("td");
    let tableData3rd = document.createElement("td");
    let tableData4th = document.createElement("td");

    tableData1st.textContent = this.foodID;
    tableData2nd.textContent = this.foodName;
    tableData3rd.textContent = this.type;
    tableData4th.textContent = this.price;

    tableRow.appendChild(tableData1st);
    tableRow.appendChild(tableData2nd);
    tableRow.appendChild(tableData3rd);
    tableRow.appendChild(tableData4th);
    tablePlace.appendChild(tableRow);
}
*/

let newFood = document.getElementById("formID");
newFood.addEventListener("submit",Submit);
function Submit(event) {
event.preventDefault();
let foodID = randomIDNumber();
let foodName = event.target.foodNameID.value;  
let foodtype = event.target.foodTypeID.value;
let foodprice = event.target.priceID.value;

let newFoodOnMenu = new Food (foodID,foodName,foodtype,foodprice);
//newFoodOnMenu.render();
 save();

}



 function save(){
let saveArr = JSON.stringify(allFood);
localStorage.setItem("saveKey", saveArr);


 }



