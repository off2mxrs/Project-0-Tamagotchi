//// 👾GameTimer⏳

let gameTimer = 0;
let game = null;
const gameOverEl = document.getElementById('gameover')

game = setInterval(function() {
    gameTimer++
    console.log(gameTimer);
    if (hungerTimer === 10) {
        clearInterval(game); //Stop🛑
        gameOverEl.textContent = `GAME OVER: Your Chao has starved! 😵`
        console.log(`GAME OVER: Your Chao has starved! 😵`)
    }
}, 1000);


//📅 days increase +1 every 60,000 milisec of gameTimer

//🎂 age increases +1 every 10days

//💬 user types in name

//////////////////
// TAMAGOTCHI CLASS

class Tamagotchi {
    constructor(name, age, color){
        this.name = name;
        this.age = 0;
        this.color = color;
    }
    // use a method() to make character say random phrase once clicked
}

/// Instantiate Chao ////////
class Chao {
    constructor(name){
        this.name = name;
        this.chaos = [];
    }
    createChao() {
        const newChao = new Tamagotchi(this.name, this.chaos.length)
    }
}  


// 🤤 Hunger counter
// scale 1-10
// increases every 15,000 milisec of Gametimer
// once counter hits 10 stop
// Gameover message pops up
let hungerTimer = 0;
let hunger = null;
const hungerEl = document.getElementById('hunger')

hunger = setInterval(function() {

    hungerTimer++
    console.log(`Hunger: ${hungerTimer}`);
    hungerEl.textContent = `🍔🍟🥤  ${hungerTimer}`
    
    if (hungerTimer === 10) {
        clearInterval(hunger);
    }
}, 1000);
        



// 🍔 Feed button

// 🏃‍♀️ Energy counter
// 😴 Rest button

// 🤪 Happiness counter
// 🤽‍♀️ Play button