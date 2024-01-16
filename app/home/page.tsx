import { findAllProducts } from '../lib/data';
import AllProducts from '../ui/AllProducts/page';
import styles from './page.module.css'

export default async function Home() {
  
  return (
  <div className={`${styles['Main-container']}`}>
    <div className={`${styles['children-container']}`}>
      <div className={`${styles['panel-left']}`}>
          <AllProducts></AllProducts>
      </div>
          ShoppingCar
          SelectedProducts
    </div>
  </div>
)}
