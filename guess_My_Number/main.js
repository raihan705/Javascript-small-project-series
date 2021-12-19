'use strict';
 
 let secretNumber = Math.trunc(Math.random()*25)+1;
 let score = 25;
 let highscore = 0;
 
 // check the number funcionality

 document.querySelector('.check').addEventListener(
     'click', function(){
         const guess =Number(document.querySelector('.guess').value);
         
         // when input no number and click, run this blog

         if (!guess) {
             document.querySelector('.message').textContent = 'No Number';

            // when match the number, run this block

         } else if(guess == secretNumber){
             document.querySelector('.message').textContent = 'Correct Number';
             document.querySelector('.number').textContent = secretNumber;
             document.querySelector('.score').textContent = score;
             document.querySelector('body').style.backgroundColor = 'green';
             document.querySelector('.number').style.width = '30rem';

             if (score>highscore) {
                 highscore = score;
                 document.querySelector('.highscore').textContent = highscore;
             }
             

             // when number is too high

         }

         else if(guess !== secretNumber){
            if (score > 1) {
                document.querySelector('.message').textContent = 
                guess > secretNumber ? 'Input number is too high' : 'Input number is too low';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
               document.querySelector('.message').textContent = 'you loose the game';
               document.querySelector('.score').textContent = 0;
            }
       }  }
 )

 //  play again  option that make the scenario as a new.

 document.querySelector('.again').addEventListener(
     'click', function(){
         score = 25;
         secretNumber = Math.trunc(Math.random()*25)+1;
         document.querySelector('.message').textContent = 'Start Guessing...';
         document.querySelector('body').style.backgroundColor = 'gray';
         document.querySelector('.number').textContent = '?';
         document.querySelector('.guess').value = '';
         document.querySelector('.score').textContent = score;
         document.querySelector('.number').style.width = '15rem';


     }
 )

 

// else if(guess>secretNumber){
//     if (score > 1) {
//        document.querySelector('.message').textContent = 'Input Number is too high';
//        score --;
//        document.querySelector('.score').textContent = score;
//     }else{
//         document.querySelector('.message').textContent = 'you loose the game';
//         document.querySelector('.score').textContent = 0;
//     }


//     // when number is too low
    
// } else if(guess<secretNumber){
//    if (score > 1) {
//       document.querySelector('.message').textContent
//       = 'Input Number is too low';
//       score --;
//       document.querySelector('.score').textContent = score;
//    } else{
//        document.querySelector('.message').textContent ='you loose the game';
//        document.querySelector('.score').textContent = 0;
//    }

// }

// }