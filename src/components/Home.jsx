import { useState } from "react"
import Data from "./Data.js"
import ProductCard from "./ProductCard.jsx"

const Home = () => {

  const [productData, setProductData] = useState([...Data])
  const [allProductData, setAllProductData] = useState([...Data])
  const [searchQuery, setSearchQuery] = useState("")
  let handleRating =()=>{
    let filteredRatingData = allProductData.filter((obj)=>{
      return obj.rating > 4
    });
    setProductData(filteredRatingData)
  }

  let handleCategory =(category)=>{
    let filteredfurniture = allProductData.filter((obj)=>{
      return obj.category == category
    });
    setProductData(filteredfurniture)
  }

  let handleSearch=()=>{
    let filteredData = allProductData.filter((obj)=>{
      return obj.title.toLowerCase().includes(searchQuery.toLowerCase())
    });
    setProductData(filteredData)
  }
  return (
      <div className="h-[91vh] w-screen flex flex-col">

      <div className="utility flex w-100 justify-around mt-2"> 
      <button className="btn btn-primary"onClick={handleRating}>Top-Rating</button>
      <button className="btn btn-primary"onClick={()=>handleCategory("furniture")}>Furniture</button>
      
      <div className="searchbar">
        <input type="text" placeholder="Search" className="h-9 rounded-2xl" value={searchQuery} onChange={(event)=>{
        setSearchQuery(event.target.value)
        }}></input>
        <button className="btn btn-success mx-2" onClick={handleSearch}>Search</button>
      </div>
      <button className="btn btn-primary" onClick={()=>handleCategory("beauty")}>Beauty</button>
      <button className="btn btn-primary" onClick={()=>handleCategory("groceries")}>Grocery</button>
      </div>
      <div className="flex flex-wrap justify-around">
      {
        productData.map((obj)=>{
          return <ProductCard obj={obj}></ProductCard>
        })
      }
      </div>
      
      </div>
   
  )
}

export default Home
                                   