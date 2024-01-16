'use client'
import { findAllProducts } from '@/app/lib/data';
import styles from './page.module.css'
import { Products } from '../Products/page';

export default async function AllProducts() {
  const products = await findAllProducts();
  console.log(products);

  const handleClick = (product: any)=>{
    // productSelected(product);
  };

  return (
    <div className={`${styles['ListProducts-container']}`}>
    <Products
        products={products}
      />
    </div>
)}
