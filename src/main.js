var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement("button");
button.innerText = "Say Hello";
button.onclick = function () {
    console.log(greeter.greet());
};
document.body.appendChild(button);
//# sourceMappingURL=main.js.map