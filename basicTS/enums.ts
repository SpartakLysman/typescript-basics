enum Role {
    ROLE_USER = 5, // we can change index. So the index of next one (ROLE_ADMIN) going to be 6
    ROLE_ADMIN = 'admin', // we can also do like this 
    ROLE_TEACHER = 'teacher' // can be in UPPER case as well
}

let user: { name: string, role: Role };
user = { name: 'Junior', role: Role.ROLE_ADMIN };
console.log(user);

console.log();
console.log();

enum AppState {
    LOADING_STATE,
    LOADED_STATE,
    READY_STATE
}