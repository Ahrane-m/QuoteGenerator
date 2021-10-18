let quotes=['The purpose of our lives is to be happy','Life is what happens when you are busy making other plans.','Get busy living or get busy dying.','Many of failures  in life are  due to people who did not realize how close they were to success when they gave up.','If you want to live a happy life, tie it to a goal, not to people or things.','Your time is limited, so donot waste it living life of someone else. Donot be trapped by dogma,which is living with the results of thinking of other people.','The unexamined life is not worth living.'];


var btn = document.querySelector('.button');
if(btn){
  btn.addEventListener('click', displayQuote);
}


function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icon.png">
    <p>${quotes[index]}</p>
    <img src="icon.png">
   </div>

    `;
    div.innerHTML=quote;
    
}
