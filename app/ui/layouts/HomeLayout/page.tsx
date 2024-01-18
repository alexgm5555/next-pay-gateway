import styles from './page.module.css'
import SelectedProduct from '../../components/SelectedProduct/page';
import ShoppingCar from '../../components/ShoppingCar/page';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
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
