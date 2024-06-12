//Mutable - Se modifica el estado inicial
// const updateAge = (userInfo) => {
//     userInfo.age = userInfo.age +1;
//     return userInfo;
// }

//Inmutable: Object.assign - Puede ser complicado de Leer
// const updateAge = (userInfo) => {
//     return Object.assign({}, userInfo,{age: userInfo.age +1})
// }

//Inmutable: Spread Operator
const updateAge = (userInfo) => {
    return {...userInfo, age: userInfo.age+1}
}

const userInfo = {
    name: 'Juana',
    age:22,
    email: 'Jn@mail.com'
};

console.log('userInfo ANTES', userInfo);

const updatedUserInfo = updateAge(userInfo);

console.log('userInfo DESPUES', userInfo);
console.log('updatedUser', updatedUserInfo);