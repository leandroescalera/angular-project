export interface Passenger {
    name: String;
    children?: String[];
}

const passenger1: Passenger = {
    name: 'Jhobany',
}

const passenger2: Passenger = {
    name: 'Leandro',
    children: ['Matthias', 'Maurito'],
}


const printChildrenNumber = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

printChildrenNumber(passenger1);