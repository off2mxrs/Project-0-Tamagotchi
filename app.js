//// 👾GameTimer⏳
let gameTimer = 0;
let game = null;
const gameOverEl = document.getElementById('gameover')

game = setInterval(function() {
    gameTimer++
    console.log(gameTimer);
    if (blueChao.hunger >= 10 || (blueChao.sleep >= 10) || (blueChao.happiness >= 10)) {
        clearInterval(game); //Stop🛑
        //prompt('GAME OVER')
        gameOverEl.textContent = `GAME OVER: Your Chao has popped! 😵`
        console.log(`GAME OVER: Your Chao has starved! 😵`)
    }
    if (blueChao.hunger <= -1 || (blueChao.sleep <=-1) || (blueChao.happiness <= -1)) {
        clearInterval(game); //Stop🛑
        //prompt('GAME OVER')
        gameOverEl.textContent = `GAME OVER: Your Chao has popped! 😵`
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
    dayEl.textContent = `Chao Garden: Day ${dayTimer}`
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
nameEl.textContent = `${blueChao.name}` 

//🎂 age increases +1 every 5days (300,000)
blueChao.age = 0;
let age = null;
const ageEl = document.getElementById('age')

age = setInterval(function() {

    blueChao.age++
    console.log(`age: ${blueChao.age}`);
    ageEl.textContent = `Age: ${blueChao.age}🔺`
    if (blueChao.hunger === 10) {
        clearInterval(age)
    } if (blueChao.hunger <= -1) {
        clearInterval(age);
    }
        
}, 60000);

// 🍎 Feed button///////////////////////////////
const feedEl = document.getElementById('feed')
feedEl.addEventListener('click', handleFeed)
let apple = 1

function handleFeed() {
    blueChao.hunger = blueChao.hunger - apple;
    hungerEl.textContent = `🍎 ${blueChao.hunger}`
    console.log(`fed 🍎`);
    if (blueChao.hunger <= 0) {
        hungerEl.textContent = ' Hunger ☠️'
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
    if (blueChao.hunger <= 3) {
        hungerEl.textContent = `Hunger 🤩`

    }
    else if (blueChao.hunger <= 6) {
        hungerEl.textContent = ` Hunger 🤤`
    }
    
    else if (blueChao.hunger <= 9) {
        hungerEl.textContent = ` Hunger 😖`
    }
        
     else {   
        hungerEl.textContent = ' Hunger ☠️'
        clearInterval(hunger);
        //console.log(blueChao);
        return

     } if (blueChao.hunger <= -1) {
        clearInterval(hunger);
        hungerEl.textContent = ' Hunger ☠️'
        gameOverEl.textContent = `GAME OVER: Your Chao was over fed! 😵`
        //console.log(`GAME OVER: Your Chao has starved! 😵`)
    }
        
}, 1000);
        

// 🏃‍♀️ Sleep counter
blueChao.sleep = 0;
let sleep = null;
const sleepEl = document.getElementById('sleep')

sleep = setInterval(function() {

    blueChao.sleep++
    console.log(`sleep: ${blueChao.sleep}`);
    if (blueChao.sleep <= 3) {
        sleepEl.textContent = `Energy 🏃‍♀️`

    }
    else if (blueChao.sleep <= 6) {
        sleepEl.textContent = ` Energy 🥱`
    }
    
    else if (blueChao.sleep <= 9) {
        sleepEl.textContent = ` Energy 😪`
    }
        
     else {   
        (sleepEl.textContent = ` Energy ☠️`) || (hungerEl.textContent = ' Hunger ☠️')
        clearInterval(sleep);
        //console.log(blueChao);
        return

     } if (blueChao.sleep <= -1 || (blueChao.hunger <= -1)) {
        clearInterval(sleep);
        sleepEl.textContent = ` Energy ☠️`
        gameOverEl.textContent = `GAME OVER: Your Chao has popped! 😵`
        //console.log(`GAME OVER: Your Chao was exhausted! 😵`)
    }
        
}, 3000);

// 🛏 bed button
const bedEl = document.getElementById('rest')
bedEl.addEventListener('click', handleSleep)
let bed = 1

function handleSleep() {
    blueChao.sleep = blueChao.sleep - bed;
    sleepEl.textContent = `🛏 ${blueChao.sleep}`
    console.log(`slept 🛏`);
    if (blueChao.sleep <= 0) {
        sleepEl.textContent = ` Energy ☠️`
        return blueChao
        clearInterval(sleep)
        // console.log(blueChao.sleep);

    }
}
// 🤪 Happiness counter
blueChao.happiness = 0;
let happiness = null;
const happinessEl = document.getElementById('happiness')

happiness = setInterval(function() {

    blueChao.happiness++
    console.log(`happiness: ${blueChao.happiness}`);
    if (blueChao.happiness <= 3) {
        happinessEl.textContent = `Happiness 🤪`

    }
    else if (blueChao.happiness <= 6) {
        happinessEl.textContent = ` Happiness 😥`
    }
    
    else if (blueChao.happiness <= 9) {
        happinessEl.textContent = ` Happiness 😭`
    }
        
     else {   
        (happinessEl.textContent = ` Happiness ☠️`) || (hungerEl.textContent = ' Hunger ☠️')
        clearInterval(happiness);
        //console.log(blueChao);
        return

     } if (blueChao.happiness <= -1 || (blueChao.hunger <= -1)) {
        clearInterval(happiness);
       
        gameOverEl.textContent = `GAME OVER: Your Chao has popped! 😵`
        //console.log(`GAME OVER: Your Chao was exhausted! 😵`)
    }
        
}, 2000);

// 🤽‍♀️ Play button