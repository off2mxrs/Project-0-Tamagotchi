//// 👾GameTimer⏳

let gameTimer = 0;
let game = null;
const gameOverEl = document.getElementById('gameover')

game = setInterval(function() {
    gameTimer++
    console.log(gameTimer);
    if (blueChao.hunger >= 9) {
        clearInterval(game); //Stop🛑
        gameOverEl.textContent = `GAME OVER: Your Chao has starved! 😵`
        console.log(`GAME OVER: Your Chao has starved! 😵`)
    }
}, 1000);


//📅 days increase +1 every 60,000 milisec of gameTimer
let dayTimer = 0;
let day = null;
const dayEl = document.getElementById('day')

day = setInterval(function() {
    dayTimer++
    console.log('🗓 Day ' + dayTimer);
    dayEl.textContent = `🗓 ${dayTimer}`
}, 60000)
//🎂 age increases +1 every 10days (600,000)

//💬 user types in name

//////////////////
// TAMAGOTCHI CLASS

class Tamagotchi {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.sleep = 0;
        this.happiness = 0;
        
    }
    // use a method() to make character say random phrase once clicked
}

/// Instantiate Chao ////////
class Chao extends Tamagotchi {
    constructor(name){
        super(name)
      
    }
   
}  

const blueChao = new Chao('Blue')
//blueChao.hunger = 5
console.log(blueChao);


// 🍔 Feed button///////////////////////////////
const feedEl = document.getElementById('feed')
feedEl.addEventListener('click', handleFeed)
let burger = 5

function handleFeed() {
    blueChao.hunger = blueChao.hunger - burger;
    hungerEl.textContent = `🍔🍟🥤 ${blueChao.hunger}`
    console.log(`fed 🍔`);
    if (blueChao.hunger <= 0) {
        hungerEl.textContent = `🍔🍟🥤 0`
        return blueChao
        clearInterval(hunger)
        // console.log(blueChao.hunger);

    }
}
// 🤤 Hunger counter
// scale 1-10
// increases every 15,000 milisec of Gametimer
// once counter hits 10 stop
// Gameover message pops up
blueChao.hunger = 0;
let hunger = null;
const hungerEl = document.getElementById('hunger')

hunger = setInterval(function() {

    blueChao.hunger++
    //console.log(`Hunger: ${blueChao.hunger}`);
    hungerEl.textContent = `🍔🍟🥤  ${blueChao.hunger}`
    
    if (blueChao.hunger === 10) {
        clearInterval(hunger);
        console.log(blueChao);
        return

     }
        
}, 1000);
        

// 🏃‍♀️ Energy counter
// 😴 Rest button

// 🤪 Happiness counter
// 🤽‍♀️ Play button