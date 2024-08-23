function updateUser<T, V>(oldUser: T, newUser: V): T & V {

return { ...oldUser, ...newUser };

}

function makeAdmin<T>(user: T): T {

    return { ...user, admin: true };
    
}

let userAge = [55, 20];
let user1 = { name: 'Jamila' };
let user2 = { age: 24, gender: 'M'};

console.log(updateUser(user1, userAge));
console.log(makeAdmin(user2));



console.log();
console.log();



class Planet<Z> {

    private closestStar: Z;

    constructor(closestStar: Z) {
        this.closestStar = closestStar;
    }

}

const earth = new Planet<string>('Sun');
const planetX = new Planet<{ name: string, distance: number }>({ name: 'Xorox', distance: 10 });

interface UserData {

    size: number;
    data: string[];

}
const planetC = new Planet<UserData>({ data: ['Xorox', 'Xorax'], size: 10 });



interface CustomerData<K> {

    size: number;
    data: K[];
//  report: { file: K };

}
let newUser1: CustomerData<number>;
newUser1 = { size: 77, data: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
console.log(newUser1);
