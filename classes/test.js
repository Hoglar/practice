// Class declarations
// Does not host, so need to be in upper level or something, maybe requore?
// Stor bokstav tror jeg på classes, men det er en slags pynt.

class Boss {
    // this is the body of a class! here we define class members, such as methods or constructor.
    constructor(health, damage) {
        this.health = health;
        this.damage = damage;
    }
}

//Class expression is another way of define a class.

// unnamed

var BigBoss = class {
    constructor(health, damage) {
        this.health = health;
        this.damage = damage;
    }
};

// named

var Snake = class Snake {
    constructor(health, damage) {
        this.health = health;
        this.damage = damage;
    }
};


let bowser = new Boss(100, 5);
let luigi = new BigBoss(200, 10);

console.log(luigi.damage);
