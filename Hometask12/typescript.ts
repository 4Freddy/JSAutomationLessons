// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
interface IUser {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const users: IUser[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
children: 2
    }
];

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

interface IUser2{
    name: string,
    email: string,
    password: string,
    changePassword(oldPassword: string, newPassword: string, confirmNewPassword: string) : boolean,
    logout() : void;
}

interface IAdmin {
    name: string,
    email: string,
    password: string,
    changePassword(oldPassword: string, newPassword: string, confirmNewPassword: string) : boolean,
    logout() : void;
    createUser(user: IUser2) : IUser2,
    changeUserData(user: IUser2) : IUser2,
    deleteUser(user: IUser2) : void,
}

type Person = {
    name: string,
    age: number
    occupation?: string;
    role?: string;
};

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


// 3. Напишите анотации типов к этому классу.
interface IObjectManipulator {
    set(key: string,value: number) : ObjectManipulator
    get(key: number) : string
    delete(key: number) : ObjectManipulator
    getObject() : {[key: number] :string}
}

export class ObjectManipulator implements IObjectManipulator {

    constructor(protected obj : {[key: number] : string}) {}

    public set(key: string, value: number) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: number) {
        return this.obj[key];
    }

    public delete(key: number) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
// 4. Обеспечьте правильную типизацию для указанных функций.

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map(mapper: ()=> [], input : []) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput : []) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer: () => [], input : []) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput : []) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b: number) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB : number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}