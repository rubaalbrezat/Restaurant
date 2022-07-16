`use strict`


    const allFood =[];
    
    function Food(FoodID,FoodName,FoodType,FoodPrice)
    {
  this.FoodID = FoodID;
  this.FoodName = FoodName;
  this.FoodType = FoodType;
  this.FoodPrice = FoodPrice; 
   allFood.push(this);
   

    }


   let newFood1 =document.getElementById("formFood "); 

    newFood.addEventListener("submit",handleSubmit) ;



   function handleSubmit(event){
    event.preventDefult();
     let Id = creatId();
     let FoodName = event.targert.FoodName.value;
     let FoodType =  event.targert.FoodType.value;
     let FoodPrice =  event.targert.FoodPrice.value;
   

     let newFood = new  foodObj (Id,FoodName,FoodType,FoodPrice);





   }


      
   
   Food.prototype.creatId = function(){
    this.FoodID = math.floor(math.random()*(2000 - 1000 +1)) +1000;
 }


 Food.prototype.table1 = function(){

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody); 
  














 }