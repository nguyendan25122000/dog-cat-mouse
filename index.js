var Dog = require("./Dog");
var dog = new Dog("Nguyen", 20);

dog.sayHi();
try {
    dog.run();
} catch (error) {
    console.log("Dog run very slow!!!");
}