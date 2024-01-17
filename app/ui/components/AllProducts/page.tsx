
import styles from './page.module.css'
import { Products } from '../Products/page';
import { ProductsInterface } from '@/app/lib/data/interfaces';
import { NextPage } from 'next';

interface props {
  products?: ProductsInterface[];
}

const AllProducts:NextPage<props> = ({products}) =>{

  return (
    <div className={`${styles['ListProducts-container']}`}>
    <Products
        products={products}
        title='Add product'
        action='add'
    />
    </div>

)}

export default AllProducts;
