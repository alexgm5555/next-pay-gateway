import styles from './page.module.css'

export default function Home() {
  return (
  <div className={`${styles['Main-container']}`}>
    <div className={`${styles['children-container']}`}>
      <div className={`${styles['panel-left']}`}>
          AllProducts
      </div>
          ShoppingCar
          SelectedProducts
    </div>
  </div>
)}
