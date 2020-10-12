var chalk = require("chalk");

function Dog(name, fast) {
    this.name = name;
    this.fast = fast;
}

Dog.prototype.sayHi = function() {
    console.log("Hi! Im " + chalk.yellow(this.name));
};

Dog.prototype.run = function() {
    console.log("dog run" + this.fast + "s");
};

module.exports = Dog;