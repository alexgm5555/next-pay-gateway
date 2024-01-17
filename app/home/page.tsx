import { findAllProducts } from '../lib/data';
import {
  AllProducts,
  SelectedProduct,
  ShoppingCar
 } from '../ui/components';
import styles from './page.module.css'

export default async function Home() {
  const products = await findAllProducts();
  
  return (
  <div className={`${styles['Main-container']}`}>
    <div className={`${styles['children-container']}`}>
      <div className={`${styles['panel-left']}`}>
          <AllProducts products={products}></AllProducts>
      </div>
      {products.length  !== 0 && 
        <div className='panel-right'>
          <ShoppingCar/>
          <SelectedProduct/>
        </div>
      }
    </div>
  </div>
)}
