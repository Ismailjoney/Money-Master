 const  players =[];

 function setPlayersInList(element){
  //target  player body:
  const tbody = document.getElementById("select-player-list");
  tbody.innerHTML="";

 //here we selected maximaum 5 players 
  if(players.length <= 5){

    for(i = 0 ; i <  element.length; i++){
 
      const tr = document.createElement(`tr`);
      tbody.appendChild(tr);
      tr.innerHTML =
      `  
      <th> ${i+1}</th>
      <td>${ element[i]}</td>
      `;
      
      }
      player.push(element);
  } 
  else{
     alert(`You all ready added 5 players. You can not add more`)
  };

 }



//player
function  display(elements){
  
   
  const playerName =  elements.parentNode.parentNode.children[0].innerText;

 
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
   
    //maneger and coach value get utilitis file a common func....
    const manegerAmount =  manegerAndCoachamount(`manegerAmount`);
    const coachAmount = manegerAndCoachamount(`coachAmount`);

    
    let totalAmount = manegerAmount + coachAmount + perExpenceAmount;

    const finalTotalAmount= document.getElementById(`total`);
    const totalCoast = finalTotalAmount.innerText ;
    const totalBlance = parseInt(totalCoast);

     finalTotalAmount.innerText = totalAmount;
    })

















