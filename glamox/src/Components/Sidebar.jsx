import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <h3>Sort By</h3>
        <form>  
        <label> Sort By Price </label>
        <select>  
        <option value = "LH"> High to Low </option>  
        <option value = "HL"> Low to Hign </option>  
        </select>  
        </form>
        <div>
            <h2>filter By Brands</h2>
            <p>Lakme</p><input type="checkbox" />
            <p>2</p><input type="checkbox" />
        </div>
         
    </div>
  )
}

export default Sidebar