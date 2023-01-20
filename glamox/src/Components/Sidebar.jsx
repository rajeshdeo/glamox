import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category")
  const [category,setCategory] = useState(initialState || [])
  // console.log(category)
  const handleFilter = (e) => {
    let newCategory = [...category]
    // new category from all catg
    if(newCategory.includes(e.target.value)){
      newCategory.splice(newCategory.indexOf(e.target.value),1)
    }else{
      newCategory.push(e.target.value)
    }
    setCategory(newCategory)
  }

  useEffect(()=>{
    const params = {
      category,
    };
    setSearchParams(params)
  },[category])

  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input
          type="checkbox"
          value="Lakme"
          onChange={handleFilter}
          checked={category.includes("Lakme")}
        />
        <label>Lakme</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Loreal"
          onChange={handleFilter}
          checked={category.includes("Loreal")}
        />
        <label>Loreal</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Nykaa"
          onChange={handleFilter}
          checked={category.includes("Nykaa")}
        />
        <label>Nykaa</label>
      </div>
      
      <h3>Sort By order</h3>
      <div >
        <input
          type="radio"
          name="sort_by"
          // value={"asc"}
          // defaultChecked={order === "asc"}
        />
        <label>High To Low</label>
        <input
          type="radio"
          name="sort_by"
          // value={"desc"}
          // defaultChecked={order === "desc"}
        />
        <label>Low to High</label>
      </div>
    </div>
  )
}

export default Sidebar