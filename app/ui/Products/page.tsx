'use client'
import { FC } from 'react';
import styles from './page.module.css'
import { ProductsInterface } from '@/app/lib/data/interfaces/products.interface';

interface props {
  products?: ProductsInterface[];
}

export const Products:FC<props> = ({products}) =>{

  const handleClick = (product: any)=>{
    // productSelected(product);
    console.log(product);
    
  };

  return (
    <div className={`${styles['Products-container']}`}>
      {products && products.map((product: any)=>(
        <div
          key={product.id}
          onClick={()=>handleClick(product)}
          className='item'
          // title={title}
          data-testid={`item${product.id}`}
        >
          <p className={`${styles['pItem']}`}> {product.name}</p>
          <p> {product.description}</p>
          <p> ${product.cost}</p>
          {product.quantity && <p> 
            Quatity: {product.quantity}
          </p>}
        </div>
      ))}
    </div>
)}
