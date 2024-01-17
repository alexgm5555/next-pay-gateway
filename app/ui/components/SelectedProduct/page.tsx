'use client'
import { FC, useEffect, useState } from 'react';
import styles from './page.module.scss'
import { ProductsInterface } from '@/app/lib/data/interfaces';
import { removeProduct, sumTotal } from '@/provider/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from '../Products/page';

export const SelectedProduct = () =>{
  const [products, setProducts] = useState<ProductsInterface[]>();

  const data = useSelector((state: any) => state.user.products);
  const dispatch =  useDispatch();
  console.log(data);


  const sortPerQuatity = (arrayOld: ProductsInterface[]) => {
    const arrayNew: ProductsInterface[] = [];
    arrayOld.forEach((e: ProductsInterface)=> {
      const a = data.filter((a: ProductsInterface)=>a.id === e.id);
      if(!arrayNew.find((b: ProductsInterface)=>b.id === e.id))
        arrayNew.push({ ...e, quantity: a.length})
    });
    return arrayNew;
  }


  useEffect(() => {
    setProducts(sortPerQuatity(data));
    
    let result = 0;
    for (let i in data) {
      result += parseFloat(data[i].cost) ;
    }
    dispatch(sumTotal({
      total: result.toString()
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={`${styles['SeletedProducts-container']}`}>
      <Products
        products={products}
        title='Remove product'
        action='remove'
      />
    </div>
)}
