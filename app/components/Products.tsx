'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface products {
    id: number;
    title: string;
    description: string;
    price: number;
    image: any;
}

export default function Products({products}: any ){

    const value = products.price;
    const discountvalue = ((value * 20) / 100)
    let finalPrice = discountvalue + products.price;
    finalPrice = Math.round(finalPrice)

    const [orginalPrice, setOrginalPrice] = useState(finalPrice); 

    // const orginalPrice2 = Math.round((products.price * 20) / 100)

    // setOrginalPrice(orginalPrice2)

    return(
        <div className='productList' key={products.id}>
            <Image
              src={ products.image }
              width={200}
              height={200}
              className="productImg"
              alt={products.title}
            />
            <div className='productDetails'>
              <h4>{ products.title }</h4>
              {/* <h5><s>${ ((products.price * 20) / 100) + products.price }</s>${ products.price }</h5> */}
              <h5><s>${ orginalPrice }</s>${ products.price }</h5>
              <p>{ products.description }</p>
            </div>
            <Link 
              href={`/products/${products.id}`}>
              <button>View Product</button>
            </Link>
        </div>
    )
}