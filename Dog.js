var chalk = require("chalk");

function Dog(name, fast) {
    this.name = name;
    this.fast = fast;
}

Dog.prototype.sayHi = function() {
    console.log("Hi! Im " + chalk.yellow(this.name));
};

Dog.prototype.run = function() {
    if (this.fast >= 50) {
        console.log("dog run fast with speed " + this.fast + "s");
    } else {
        throw new Error("dog run slow!!!");
    }
};

module.exports = Dog;