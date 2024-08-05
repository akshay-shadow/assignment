import { ok } from "assert";

async function getData(id?: string) {
    const response_data = await fetch('https://fakestoreapi.com/products');
    if(!response_data.ok){
        throw new Error('Failed to fetch data')
    }
    return response_data.json()
}

// const singleProduct = ({params}: any) =>{
//     const idString = params?.id
//     const id = Number(idString)
//     const singleProduct = getData(id)
// }



export default getData

