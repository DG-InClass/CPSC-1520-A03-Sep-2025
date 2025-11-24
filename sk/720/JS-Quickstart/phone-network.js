// node --watch phone-network.js

// 1) Study the following classes.
// 2) Create a "Network" class which manages an array of phone numbers.
// 3) Add to the Phone class the following:
//    - ConnectToNetwork
//    - Send(message) {} function
// 4) Instantiate phones from the following list:
//    ['777-555-1212', '777-555-1234', '777-555-5678', '777-555-9101', '777-555-0000']
// 5) Send messages from one phone to another.
// 6) Read messages from a phone.
// 7) Imagine how you might use this in a web page.

/* **** Class Examples **** */
class Phone {
    #number;
    #messages = [];
    constructor(phoneNumber) {
        this.#number = phoneNumber;
    }
    get number() {
        return this.number;
    }
    get messages() {
        return this.#messages.length;
    }
    receive(message) {
        message.received = new Date();
        this.#messages.push(message);
    }
    read() {
        // Only return a copy of the messages
        return [...this.#messages];
    }
}

class Message {
    #text;
    #sender;
    #timestamp;
    constructor({text, sender, timestamp = new Date()}) {
        this.#text = text;
        this.#sender = sender;
        this.#timestamp = timestamp;
    }
    get text() {
        return this.#text;
    }
    get sender() {
        return this.#sender;
    }

    toString() {
        return `<from ${sender} on ${this.#timestamp}>: ${message}`;
    }
}

