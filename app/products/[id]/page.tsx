import '@/app/assets/main.scss'
import Image from 'next/image';
import Header from '@/app/components/Header';
import getProducts from '@/app/lib/products';
import StarRating from '@/app/components/StarRating'

const fetchProductById = async (id: number) => {
    const data = await getProducts(id);
    // console.log(data)
    if(!data){
        return "Product Not Found"
    }
    return data
}

export default async function Page({ params }: { params: { id: number } }) { 
    
    const data = await fetchProductById(params.id);

    // if(!data){
    //     <p>Product Not Found</p>
    // }

    


    return (
        <>
            <Header />
            <div className='productDetailsWrap'>
                <div className='productDetailsImg'>
                    <Image
                    src={data.image}
                    width={1000}
                    height={200}
                    className="productImg"
                    alt=""
                    />
                </div>
                <div className='productDetailsBox'>
                    <div className='categoryList'>
                        {/* <span>{params.category}</span> */}
                        {/* <span></span> */}
                    </div>
                    <h2>{data.title}</h2>
                    <div className="reviewWrap">
                        
                        <StarRating rating={data.rating.rate} />
                        <p className="reviewCount">{data.rating.count}+ Ratings</p>
                    </div>
                    
                    <h3>${data.price}</h3>
                    <p>{data.description}</p>

                    <button className='addToCartBtn'>Add To Cart</button>
                </div>
            </div>
        </>
    )
        
        
}
