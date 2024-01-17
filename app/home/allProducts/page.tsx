import { Suspense } from 'react';
import { findAllProducts } from '../../lib/data';
import AllProducts from '../../ui/components/AllProducts/page';
import styles from './page.module.css'

export default async function Allproducts() {
  const products = await findAllProducts();

  return (
  <div className={`${styles['Main-container']}`}>
        <Suspense fallback={<>cargando</>}>
          <AllProducts products={products}></AllProducts>
        </Suspense>
  </div>
)}
