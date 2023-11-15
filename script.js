let myNumDiv =document.getElementById('num');
let scoreDiv = document.getElementById('score');
let highscoreDiv= document.getElementById('highscore');
let numInp = document.getElementById('my-number');
let checkBtn = document.getElementById('check');
let alertDiv = document.getElementById('alert');
let restartButton = document.getElementById('restart');


let guessNum = 0 ;
let number = Math.round(Math.random()*20);
let score = 10;
let highscore = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;
scoreDiv.innerText= `Score - ${score}`
highscoreDiv.innerText=`High Score - ${highscore}`


numInp.addEventListener('input', (e)=>{
    guessNum = e.target.value;
})



checkBtn.addEventListener('click', ()=>{
    if (score>0){
        if(guessNum>number){
            alertDiv.innerText="too low";
            score --;
            scoreDiv.innerText= `Score - ${score}`
        }else if(guessNum<number){
            alertDiv.innerText="too high";
            score --;
            scoreDiv.innerText= `Score - ${score}`
        }else{
            alertDiv.innerText="True Number";
            document.body.style.backgroundColor = "green";
            myNumDiv.innerText = number;
            numInp.disabled= true;
            if(highscore<score){            
                highscore = score;
                localStorage.setItem('highscore',highscore)
                highscoreDiv.innerText=`High Score - ${highscore}`
            }
            
        }
    }else {
        alertDiv.innerText="Game Over"
        document.body.style.backgroundColor = "red";
        numInp.disabled= true;
    }
})

restartButton.addEventListener('click',()=>{
    numInp.disabled= false;
    document.body.style.backgroundColor = '';
    guessNum = 0 ;
    number = Math.round(Math.random()*20);
    score = 10;
    myNumDiv.innerText = '?'
    scoreDiv.innerText= `Score - ${score}`
    alertDiv.innerText= ''
    numInp.value = ''
})
