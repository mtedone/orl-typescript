import 'reflect-metadata';
import { validate } from 'class-validator';
// import { plainToClass } from 'class-transformer';
import { Product } from './product.model';

// const products = [
//   { title: 'A carpet', price: 29.99 },
//   { title: 'A book', price: 12.99 },
// ];
// const loadedProducts: Product[] = plainToClass(Product, products);
// loadedProducts.forEach((product) => console.log(product.getInformation()));
const newProd = new Product('', -14.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log(`validation errors: ${errors}`);
  } else {
    console.log(newProd.getInformation());
  }
});
