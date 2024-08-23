class Person {
    private readonly id: number // can not be reassigned because of the 'readonly'
    private name: string;
    private age: number;
    private email: string

    constructor(id: number, name: string, age: number, email: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // All of the fields(id, name, age, email) can be passed in the constuctor with a private keyword. 
    // That way, we can omit writing those fiels in 2-5 lines at all: 
   
    printName() {
        console.log(`Your name is ${this.name}, and you are ${this.age} years old`);
    }
}

const junior = new Person(5, 'Jamila', 30, 'jamila@gmail.com');
// junior.firstName = 'new name'; |<-- won't be accessible when the fields are rivate
junior.printName();


console.log();
console.log();


class UsCitizen extends Person {

    constructor(id: number, name: string, age:number, email: string, private ssn: string) {
        super(id, name, age, email);
    }
}

const john = new UsCitizen(10, 'Jamila', 20, 'jamila@gmail.com', '203929293865630');
console.log(john);


console.log();
console.log();


class Car{

    static MAX_NUM_OF_WHEEL = 6;

    constructor(private make: string, private model: string) {
    }

    set carMakeS(value: string) {
        this.make = value;
    }

    get carMakeG() {
        return this.make;
    }

    static carStats(mile: number) {
        console.log(this.MAX_NUM_OF_WHEEL); // when inside of an static block, with 'this' keyword 'MAX_NUM_OF_WHEEL' can be accessible. 
                                            // Outside, 'Car.' should be used!
        return { mileage: mile, type: 'Hybrid' }
    }
}

const acura = new Car('Acura', 'TL');
console.log(acura.carMakeG);
acura.carMakeS = 'Mercedes-Benz';
console.log(acura.carMakeG);
console.log(Car.MAX_NUM_OF_WHEEL);
console.log(Car.carStats(10));



console.log();
console.log();



abstract class Animal {

    constructor(private name: string){}

    abstract printSound(sound: string): void;

}

class Dog extends Animal {
    
    printSound(sound: string): void {
        console.log(`${sound}...`);
    }
}

const blaki = new Dog('Blaki');
blaki.printSound('Barking.....')
console.log(blaki);



console.log();
console.log();