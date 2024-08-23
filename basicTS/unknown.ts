let customerInput: unknown;
// customerInput = 10;
customerInput = 'age value';
console.log(customerInput);

console.log();

let customerAge: string;
customerAge = customerInput as string; // 'as string' - type assertion, error without it
if (typeof customerInput === 'string') { // another way to assign
    customerAge = customerInput;
}
