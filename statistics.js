function saveData(){
    let stringifyedData = JSON.stringify(foodArr)
    localStorage.setItem("food",stringifyedData)
  
};




function getData(){
    let retrievedData = localStorage.getItem("food");
    let parsedData = JSON.parse(retrievedData);
    if (parsedData != null){
    for (i = 0; i < parsedData.length; i++){
        newType = new Food (parsedData[i].foodID,parsedData[i].foodName,parsedData[i].type,parsedData[i].price);
        newType.tableRender();
    }
   
}
}
getData();