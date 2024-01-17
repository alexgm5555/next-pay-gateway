'use client'
import styles from './page.module.css'
import { Products } from '../Products/page';
import { ProductsInterface } from '@/app/lib/data/interfaces';
import { FC } from 'react';

interface props {
  products?: ProductsInterface[];
}

export const AllProducts:FC<props> = ({products}) =>{

  return (
    <div className={`${styles['ListProducts-container']}`}>
    <Products
        products={products}
        title='Add product'
        action='add'
    />
    </div>

)}
