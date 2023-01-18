import React from 'react'
import styles from "../styles/ProductCard.module.css"

const ProductsCard = ({title,price,image1,rating}) => {

  // const ratingStars = Array.from({length:5},(elem,i)=>{
  //   var number = i + 0.5 ;
  // })

  return (
    <div className={styles.s_prod}>
      <img src={image1} alt="" />
      <p>Rating : {rating}</p>
      <p>{title}</p>
      <p><span>MRP:₹</span>{price}</p>
      <button>Add to Bag</button>
      
    </div>
  )
}

export default ProductsCard