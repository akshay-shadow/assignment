export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  const getProducts = async (id?: number) => {
    // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    // const data: Product[] = await response.json();
    // return data;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!res){
        throw new Error
    }else{
        const singleProduct = await res.json();
        return singleProduct
    }
    
    
  };
  
  export default getProducts;