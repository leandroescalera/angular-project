export class Person {

    public firstName: string;
    private lastName?: string;

    constructor(
        public firstName: string,
        public lastName: string,
        public address: string
    ) {
    }
}

// export class Hero extends Person {

//     constructor(alterEgo: string, age: number, realName: string) {
//         super(realName, 'New York');
//     }

// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

    }

}

const tony = new Person('Tony','Stark', 'New York');
const iroman = new Hero('Ironman', 45, 'Tony', tony);

console.log(iroman); // Tony Stark
