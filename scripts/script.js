let playButton = document.getElementById("but")
let startCount = document.getElementById("start-count")
let countDown = document.getElementById("count-down")
let keyboard = document.getElementById("keyboard")
let back1 = document.getElementById("back")
let game1 = document.getElementById("game")
let gameover = document.getElementById("game-over")
let tryagain = document.getElementById("tryagain")
let highScore = document.getElementById("high-score")
let infoText = document.getElementById("infoText")
let input = document.getElementById("input")
let yourscore = document.getElementById("yourscore")
let game2 = document.getElementById("game2")
let highScore2 = document.getElementById("high-score2")
let infoText2 = document.getElementById("infoText2")
let input2 = document.getElementById("input2")
let yourscore2 = document.getElementById("yourscore2")
let time3 = document.getElementById("time3")
let gameOverScore = document.getElementById("game-over-score")
let end = document.getElementById("end")
let time1 = document.getElementById("time")

playButton.addEventListener("click", startgame)

var score = 0;
var score2 = 0;


function startgame () {
    center.style.display="none"
    type.style.display = "block"
    tryagain.style.display = "none"
}

let center = document.getElementById("center")
let type = document.getElementById("type")
tryagain.addEventListener("click",Tryagain)
back1.addEventListener("click", back)


function Tryagain(){
    tryagain.style.display = "none"
    gameover.style.display = "none"
    center.style.display = "block"
    rac.style.display = "block"
    
}

function back(){
    type.style.display = "none"
    center.style.display = "block"
}

let one = document.getElementById("one")
one.addEventListener("click", game)
let two = document.getElementById("two")
two.addEventListener("click",game)
let three = document.getElementById("three")
three.addEventListener("click",game)



function game(){
    type.style.display = "none"
    rac.style.display = "none"
    startCount.style.display = "block"
    countDown.style.display = "block"
    game1.style.display = "none"
    if (this.id == "one") {
        countDown.style.display = "block"
        countDownValue() 
        generalGame()   
    }else if(this.id == "two"){
        keyboard.style.display = "block"
        countDown.style.display = "none"
        keyboardPart()
    }else if(this.id == "three"){
        countDown.style.display = "none"
        game2.style.display = "block"
        generalGame2()
        time2()
    }
}

let rac = document.getElementById("figure-jumping")
let countdown = document.getElementById("count-down")

function time2(){
    time3.innerHTML = 0
    let id2 = setInterval(function ft(){
        if(game2.style.display = "block"){
            if(time3.innerHTML == 60){
                clearInterval(id2)
                game2.style.display = "none"
                gameover.style.display = "block"
                tryagain.style.display = "block"
                end.style.display = "block"
                gameOverScore.innerHTML = score2
            }else{
                time3.innerHTML = +time3.innerHTML + 1
            }
        }
    }, 1000)
}

function countDownValue() {
    startCount.innerHTML = 3
    let id =  setInterval(function cdv(){
        if(startCount.innerHTML == 0){
            clearInterval(id)
            countDown.style.display = "none"
            game1.style.display = "block"
            time()
        }else{
            startCount.innerHTML = startCount.innerHTML - 1
        }
    }, 1000)
    
}

function keyboardPart(){
    let falseEl;
    type.style.display = "none"
    keyboard.style.display = "block"

    let oneLetter = randomLetter()
    let letterEl = document.getElementById(oneLetter)

    letterEl.classList.add("selected")

    document.addEventListener("keyup", function(e){

        if(falseEl){
            setTimeout(()=> falseEl.classList.remove("hit"), 100)
        }

        
        if(e.code == oneLetter){
            letterEl.classList.remove("selected")
            oneLetter = randomLetter()
            letterEl = document.getElementById(oneLetter)
            letterEl.classList.add("selected")
        }else{
            falseEl = document.getElementById(e.code)
            falseEl.classList.add("hit")
        }
    }
    
    )

}


function randomLetter(){
    let b = Math.floor(Math.random() * letter.length)
    return letter[b]
}

function time(){
        time1.innerHTML = 5
        let id1 = setInterval(function cdw(){
            if(game1.style.display = "block"){
                if(time1.innerHTML == 0){
                    clearInterval(id1)
                    game1.style.display = "none"
                    gameover.style.display = "block"
                    tryagain.style.display = "block"
                    end.style.display = "block"
                    gameOverScore.innerHTML = score
                }else{
                    time1.innerHTML = time1.innerHTML - 1
                }
            }
        }, 1000)
    }


function  generalGame(){
 score = 0;
    
    let oneWord;
    
    if(!localStorage.score ){
        localStorage.score = 0
        highScore.innerHTML = localStorage.score
    } else{
        highScore.innerHTML = localStorage.score
    }
    let hScore = localStorage.score
    oneWord = randomWords()
    infoText.innerHTML = oneWord

    input.onchange = function (){
        if(oneWord == input.value){
            score += 1
            time1.innerHTML = +time1.innerHTML + 3
            yourscore.innerHTML = score;
            if(hScore < score){
                localStorage.score = score
                highScore.innerHTML = localStorage.score;
            }
            input.value = ""    
            oneWord = randomWords()
            infoText.innerHTML = oneWord
        }
        
        
    }
}


function  generalGame2(){
    score2 = 0; 
    let oneWord2;

    if(!localStorage.score2){
        localStorage.score2 = 0
        highScore2.innerHTML = localStorage.score2
    } else{
        highScore2.innerHTML = localStorage.score2
    }
    let hScore2 = localStorage.score2
    oneWord2 = randomWords2()
    infoText2.innerHTML = oneWord2
    

    input2.onchange = function (){
        if(oneWord2 == input2.value){
            score2 += 1
            yourscore2.innerHTML = score2;
            if(hScore2 < score2){
                localStorage.score2 = score2
                highScore2.innerHTML = localStorage.score2;
            }
            input2.value = ""    
            oneWord2 = randomWords2()
            infoText2.innerHTML = oneWord2
        }
        
        
    }
}

function randomWords(){
    let a =  Math.floor(Math.random() * words.length)   
    return  words[a]
}


function randomWords2(){
    let b =  Math.floor(Math.random() * words.length)
    return  words[b]
}

