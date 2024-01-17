'use client'
import { FC } from 'react';
import styles from './page.module.css'
import { ProductsInterface } from '@/app/lib/data/interfaces';
import { addProduct, removeProduct } from '@/provider/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

interface props {
  products?: ProductsInterface[];
  title?: string,
  action: 'add' | 'remove'
}

export const Products:FC<props> = ({products, title, action}) =>{
  const dispatch =  useDispatch();
  const data = useSelector((state: any) => state.user.products);

  const handleRemoveProduct = (product: ProductsInterface)=>{
    const index = data.findIndex((prod: ProductsInterface) => prod.id === product.id );
    let _data = [ ...data ]
    _data.splice(index, 1);
    dispatch(removeProduct({
      products: _data
    }));
  };

  const handleAddProduct = (product: ProductsInterface)=>{
    dispatch(addProduct({
      product
    }));
  };

  const handleClick = (product: ProductsInterface)=>{
    if(action === 'add')
      handleAddProduct(product)
    if(action === 'remove')
      handleRemoveProduct(product)
  };

  return (
    <div className={`${styles['Products-container']}`}>
      {products && products.map((product: any)=>(
        <div
          key={product.id}
          onClick={()=>handleClick(product)}
          className='item'
          title={title}
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