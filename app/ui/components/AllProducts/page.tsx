
import styles from './page.module.css'
import { Products } from '../Products/page';
import { ProductsInterface } from '@/app/lib/data/interfaces';

interface props {
  products?: ProductsInterface[];
}

const AllProducts:React.FC<props> = ({products}) =>{

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
