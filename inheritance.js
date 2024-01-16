// inheritance practice

// in a class
class Person {
    meet() {
        return 'lets get coffee'
    }
}

// extending properties
class SuperHuman extends Person {
    fly() {
        return 'Flying';
    }
}


// new objects
const me = new Person();
const you = new Person();
const theincredibles = SuperHuman();

me.talk();
you.talk();
theincredibles.fly();


// used as a constructor function
function PersonConstructor() {
    this.meet = function () {
        return 'lets get coffee';
    }
}

const him = new PersonConstructor();
const her = new PersonConstructor();

him.meet();
her.meet();


//inheriting withing a new object
const person = {
    talk() {
        return 'talking';
    }
}

const colleage = Object.create(person);

colleage.talk();

// inheriting to an empty object

const oneMore = {
    talk() {
        return 'talking';
    }
}

const inheritHere = {};
Object.setPrototypeOf(inheritHere, oneMore);

inheritHere.talk();