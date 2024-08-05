import Image from 'next/image';
import Link from 'next/link';

export interface products {
    id: number;
    title: string;
    description: string;
    price: number;
    image: any;
}

export default function Products({products}: any ){

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
              <h5><s>${ ((products.price * 20) / 100) + products.price }</s>${ products.price }</h5>
              <p>{ products.description }</p>
            </div>
            <Link 
              href={`/products/${products.id}`}>
              <button>View Product</button>
            </Link>
        </div>
    )
}