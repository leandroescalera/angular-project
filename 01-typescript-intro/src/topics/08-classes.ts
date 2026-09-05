export class Person {

    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

const iroman = new Person('Tony Stark', 'Malibu, California');

console.log(iroman.name); // Tony Stark
console.log(iroman.address); // Error: Property 'address' is private and only accessible within class 'Person'.