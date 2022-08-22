 const  players =[];

 function setPlayersInList(everyPlayers){
const tbody = document.getElementById("select-player-list");

tbody.innerHTML="";

  for(i = 0 ; i < everyPlayers.length; i++){
    // console.log(everyPlayers[i]);

    const tr = document.createElement(`tr`)
    tr.innerHTML =
    `  
    <th> ${i + 1 }</th>
    <td>${everyPlayers[i]}</td>
    `;

    tbody.appendChild(tr);

 
  }
 }



function  display(player){
  
  const playerName = player.parentNode.parentNode.children[0].innerText;
  players.push(playerName);

  setPlayersInList(players);
 
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

















