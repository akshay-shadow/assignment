import getData from './lib/data'
import { Suspense } from 'react';
import '@/app/assets/main.scss'
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header'
import Products from '@/app/components/Products';
import Filters from '@/app/components/Filters';

export default async function Home() {


  const data = await getData()



  // console.log(data)

  return (
    <main className="productMain">
      <Header />
      <Filters />
      <div className='productListingWrap'>
        
        {data.map((finalData: any) => (
            <>
              <Products products={finalData} key={finalData.id}  />
            </>
        ))}
      </div>
      
    </main>
  );
}
