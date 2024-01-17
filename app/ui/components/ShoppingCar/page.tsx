'use client'
import { useSelector } from 'react-redux';
import styles from './page.module.css'
import Image from 'next/image';


export const ShoppingCar = () => {
  const data = useSelector((state: any) => state.user);

  return (
    <div className={`${styles['ShoppingCar-container']}`}>
      <span className={`${styles['dot']}`}>
        <span className={`${styles['_span']}`}>
          {data.products.length | 0}
        </span>
      </span>
      <Image 
        className={`${styles['img-car']}`}
        src='/images/shoppin_car.png'
        alt=""
        width={100}
        height={100}
        />
      <br />
      <div className={`${styles['total-span']}`}>${data.total}</div>
    </div>
)}
