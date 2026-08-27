interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250
}

interface TaxCalculationOptions {
    tax: number;
    product: Product[];
}

function taxCalculation(options : TaxCalculationOptions): number[] {

    let total = 0;
    options.product.forEach((product ) => {
        total += product.price;
    }); 
    return [options.product[0].price, total];
}

const shopingCart: Product[] = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    product: shopingCart,
    tax: tax
});

console.log('Total: ', result[0]);

console.log('Total + Tax: ', result[1] * tax); 



export {}