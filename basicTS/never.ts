let myFruit: never; // we can not assign it to any type

function alwaysProcessign(): never {
    while(true) {
        console.log('I am processing...');
    }
}

function throwAnException(message: string): never {
    throw new Error(message);
}

throwAnException('exception occured');