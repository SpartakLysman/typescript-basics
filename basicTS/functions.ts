function add(a: number, b: number) {
    return a + b;
};

let multiply = (a: number, b: number): number => {
    return a * b; 
};// long version
// or
// let multiply = (a: number, b: number) => a * b; | <-- for simple operation


console.log(add(10, 10));
console.log(multiply(5, 4));

console.log();

function formatName(firstName: string, lastName?: string): string { // '?' -> it makes the lastName optional
    return `${firstName} ${lastName}`
};
console.log(formatName('Junior', 'Smith'));


console.log();


function formatName2(firstName: string, lastName = "Unknown") {
    return `${firstName} ${lastName}`
};

console.log(formatName2('Jamila', 'Alila')); // will be 'Jamila Unknown' if lastName won't be passed


console.log();


function printNames(firstName: string, ...allTherest: string[]) {
    return firstName + ' ' + allTherest.join(' ');
};

console.log(printNames('Jamila', 'Alex', 'Anton', 'Joseph', 'Smith', 'Raymond'));


console.log();
console.log();



function addValues(val1: number, val2: number): number;
function addValues(val1: string, val2: string): string;
function addValues(a: any, b: any) {
    return a + b;
}
console.log(addValues(5, 8));
console.log(addValues('Jamila ', 'Alex'));


