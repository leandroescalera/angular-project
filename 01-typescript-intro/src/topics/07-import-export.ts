import { taxCalculation, type Product } from './06-function-destructuring';

const shopingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 100
    },
    {
        description: 'iPad Air',
        price: 150
    }
];

const [total, tax] = taxCalculation({
    products: shopingCart,
    tax: 0.15
});

console.log('Total: ', total);

console.log('Tax: ', tax);
