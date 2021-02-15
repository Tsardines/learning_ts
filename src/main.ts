class Greeter {
	greeting: string;
	constructor (message: string) {
		this.greeting = message;
	}
	greet() {
		return `Hello, ${this.greeting}`;
	}

	showGreeting() {
		return "Greeting: " + this.greeting;
	}
}

let greeter = new Greeter("world"); // passing "world" into the constructor

let button = document.createElement("button")
button.innerText = "Say Hello"
button.onclick = function() {
	console.log(greeter.greet())
}

document.body.appendChild(button)