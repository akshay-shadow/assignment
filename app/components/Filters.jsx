import getData from "../lib/data"
import Search from '@/app/components/Search'


export default async function Filters() {
   
    const data = await getData()
    const uniqueCategories = Array.from(new Set(data.map(product => product.category)));
    // console.log(uniqueCategories)

    // const categoryHandler = (e) =>{
    //     const selectedCategory = e.target.value;
    //     console.log(selectedCategory)
    // }

    return(
        <div className="filterWrap">
            <Search />
            <div className="filterType">
                <div className="filterTypeIn">
                    <label>Sort By</label>
                    <select>
                        <option>None</option>
                        <option>Price: High to Low</option>
                        <option>Price: Low to High</option>
                        <option>Name</option>
                    </select>
                </div>
                <div className="filterTypeIn">
                    <label>Category</label>
                    <select>
                        <option>All</option>
                        
                        {
                            uniqueCategories.map((cat) => (
                                <option 
                                    key={cat}
                                    value={cat}
                                    // onChange={categoryHandler}
                                >
                                    {cat}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>


    )
}