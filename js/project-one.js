 const  players =[];

 function setPlayersInList(everyPlayers){
  const tbody = document.getElementById("select-player-list");

  tbody.innerHTML="";

  
//here we add player in player List :
  for(i = 0 ; i < everyPlayers.length; i++){
 
  const tr = document.createElement(`tr`)
  tbody.appendChild(tr);
  tr.innerHTML =
  `  
  <th> ${i+1}</th>
  <td>${everyPlayers[i]}</td>
  `;

  }

  //here we selected maximaum 5 players 
  if(everyPlayers.length <= 5 ){
    return everyPlayers;
   }else{
    alert (`you selected 5 players`)
   }
 }




function  display(player){
  
  const playerName = player.parentNode.parentNode.children[0].innerText;
  players.push(playerName);

  setPlayersInList(players);
 
 }

 
 

///amount
document.getElementById(`playerRateCalculate`).addEventListener(`click`,function(){
    //Per player expence 
   const playersCounter = players.length;
   

    const player = document.getElementById(`per-player`);
    const playerRate =player.value;
    player.value="";

    const perPlayerTotalAmount = playerRate * playersCounter;


    // per player expence set total pleyer Expence
    const perExpence = document.getElementById(`per-expence`);
    const perExpenceString = perExpence.innerText;
    const perExpenceAmount = parseInt(perExpenceString);
    
    perExpence.innerText = perPlayerTotalAmount;

  })


 

//Final total amount :
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

     finalTotalAmount.innerText = totalAmount;
    })

















