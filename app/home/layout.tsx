import { Suspense } from 'react';
import { findAllProducts } from '../lib/data';
import {
  AllProducts,
  SelectedProduct,
  ShoppingCar
 } from '../ui/components';
import styles from './page.module.scss'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await findAllProducts();
  
  return (
  <div className={`${styles['Main-container']}`}>
    <div className={`${styles['children-container']}`}>
      <div className={`${styles['panel-left']}`}>
        {children}
      </div>
        <div className={`${styles['panel-right']}`}>
          <ShoppingCar/>
          <SelectedProduct/>
        </div>
    </div>
  </div>
)}
