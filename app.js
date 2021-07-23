//// 👾GameTimer⏳
let gameTimer = 0;
let game = null;
const gameOverEl = document.getElementById('gameover')

game = setInterval(function() {
    gameTimer++
    console.log(gameTimer);
    if (blueChao.hunger >= 10) {
        clearInterval(game); //Stop🛑
        //prompt('GAME OVER')
        gameOverEl.textContent = `GAME OVER: Your Chao has starved! 😵`
        console.log(`GAME OVER: Your Chao has starved! 😵`)
    }
    if (blueChao.hunger <= -1) {
        clearInterval(game); //Stop🛑
        //prompt('GAME OVER')
        gameOverEl.textContent = `GAME OVER: Your Chao was over fed! 😵`
        console.log(`GAME OVER: Your Chao was over fed! 😵`)
    }
}, 1000);


//📅 days increase +1 every 60,000 milisec of gameTimer
let dayTimer = 1;
let day = null;
const dayEl = document.getElementById('day')

day = setInterval(function() {
    dayTimer++
    console.log('Chao Garden: Day ' + dayTimer);
    dayEl.textContent = `🗓 ${dayTimer}`
    if (blueChao.hunger >= 9) {
        clearInterval(day)
        return
    } if (blueChao.hunger <= -1) {
        clearInterval(day);
        return
    }
}, 30000)

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

const blueChao = new Chao(this.name)
//blueChao.hunger = 5
console.log(blueChao);

//💬 user types in name//////////
const nameEl = document.getElementById('name')
blueChao.name = prompt('Name your Chao')
nameEl.textContent = `NAME: ${blueChao.name}` 

//🎂 age increases +1 every 5days (300,000)
blueChao.age = 0;
let age = null;
const ageEl = document.getElementById('age')

age = setInterval(function() {

    blueChao.age++
    console.log(`age: ${blueChao.age}`);
    ageEl.textContent = `${blueChao.age} yrs`
    if (blueChao.hunger === 10) {
        clearInterval(age)
    } if (blueChao.hunger <= -1) {
        clearInterval(age);
    }
        
}, 60000);
// 🍔 Feed button///////////////////////////////
const feedEl = document.getElementById('feed')
feedEl.addEventListener('click', handleFeed)
let burger = 1

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
    console.log(`Hunger: ${blueChao.hunger}`);
    // if (blueChao.hunger === 1 || 2 || 3) {
    //     hungerEl.textContent = `🍔🍟🥤  🤩`
    // }
    // else if (blueChao.hunger === 4 || 5 || 6) {
    //     hungerEl.textContent = `🍔🍟🥤  ☹️`
    // }
    // else if (blueChao.hunger === 7 || 8 || 9) {
    //     hungerEl.textContent = `🍔🍟🥤  😖`
    // }
        
    hungerEl.textContent = `🍔🍟🥤 ${blueChao.hunger}`
    if (blueChao.hunger === 10) {
        clearInterval(hunger);
        //console.log(blueChao);
        return

     } if (blueChao.hunger <= -1) {
        clearInterval(hunger);
       
        gameOverEl.textContent = `GAME OVER: Your Chao was over fed! 😵`
        //console.log(`GAME OVER: Your Chao has starved! 😵`)
    }
        
}, 1000);
        

// 🏃‍♀️ Energy counter
// 😴 Rest button

// 🤪 Happiness counter
// 🤽‍♀️ Play button