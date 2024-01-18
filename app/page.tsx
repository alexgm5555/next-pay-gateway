'use client'
import { Suspense } from 'react';
import { findAllProducts } from './lib/data';
import HomeLayout from './ui/layouts/HomeLayout/page';
import AllProducts from './ui/components/AllProducts/page';

export default async function Main() {
  const products = await findAllProducts();
  return (
    <main>
      <HomeLayout>
        <Suspense fallback={<>cargando</>}>
          <AllProducts products={products}></AllProducts>
        </Suspense>
      </HomeLayout>
    </main>
  )
}
