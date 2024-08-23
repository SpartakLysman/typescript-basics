let userType: 'USER' | 'ADMIN';
userType = 'ADMIN' // or 'ADMIN' are only two possible values for this

function saveUser(userId: number, type: 'USER' | 'ADMIN'): void {
    if(type === 'USER') {
        console.log(`Saving new user: \n ${userId}, ${type}`)
    } else {
        console.log(`Saving new admin: \n ${userId}, ${type}`)
    }
}

saveUser(10, 'USER');
saveUser(50, 'ADMIN');

type BINARY = 0 | 1;
let clientId: BINARY;
clientId = 1;