var chalk = require("chalk");

function Dog(name) {
    this.name = name;
}

Dog.prototype.sayHi = function() {
    console.log("Hi! Im " + chalk.yellow(this.name));
};

module.exports = Dog;