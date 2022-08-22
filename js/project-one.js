// display("btn-1","playerName-1");

// display("btn-2","playerName-2");
// display("btn-3","playerName-3");
// display("btn-4","playerName-4");
// display("btn-5","playerName-5");
// display("btn-6","playerName-6");
 
const  emptyArray = [];
 

function setPlayerList(reciveUpdateArray){

  const selectPlayer = document.getElementById(`select-player-list`);
  selectPlayer.innerHTML="";


for(let i = 1; i < reciveUpdateArray.length; i++){
  
  const al = reciveUpdateArray[i];
 
  const li = document.createElement(`li`);
  li.innerHTML = `<li>${al}</li>`;
 
  
  selectPlayer.appendChild(li);


}
}
 
 function  display(player){
  
  const playerName = player.parentNode.parentNode.children[0].innerText;
  emptyArray.push(playerName);
  setPlayerList(emptyArray)
 
 }

 
///////////////////////////////////////////////////

document.getElementById(`playerRateCalculate`).addEventListener(`click`,function(){
    const player = document.getElementById(`per-player`);
    const playerRate =player.value;

    const perPlayerTotalAmount = playerRate * 5;


    // per-expeence
    const perExpence = document.getElementById(`per-expence`);
    const perExpenceString = perExpence.innerText;
    const perExpenceAmount = parseInt(perExpenceString);

    perExpence.innerText = perPlayerTotalAmount;

  })


 

  document.getElementById(`calculateTotal`).addEventListener(`click`,function(){

    const perExpence = document.getElementById(`per-expence`);
    const perExpenceString = perExpence.innerText;
    const perExpenceAmount = parseInt(perExpenceString);
   
    const manegerAmount =  manegerAndCoachamount(`manegerAmount`);
    const coachAmount = manegerAndCoachamount(`coachAmount`)

    let totalAmount = manegerAmount + coachAmount + perExpenceAmount;

    const finalTotalAmount= document.getElementById(`total`);
    const totalCoast = finalTotalAmount.innerText ;
    const totalBlance = parseInt(totalCoast);

    console.log(finalTotalAmount.innerText = totalAmount) ;

 
    })


















 