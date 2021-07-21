//// 👾GameTimer⏳

let gameTimer = 0;
let interval = null;

interval = setInterval(function() {
    gameTimer++
    console.log(gameTimer);
}, 1000);

clearInterval(interval); //Stop🛑

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

hunger = setInterval(function() {
   // if (gameTimer === 10) {
    //}
    
    hungerTimer++
    console.log(`Hunger: ${hungerTimer}`);
}, 10000);

clearInterval(hunger);


// 🍔 Feed button

// 🏃‍♀️ Energy counter
// 😴 Rest button

// 🤪 Happiness counter
// 🤽‍♀️ Play button