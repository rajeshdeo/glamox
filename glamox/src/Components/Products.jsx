import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import styles from "../styles/Products.module.css"
import Sidebar from './Sidebar'
import Stars from './Stars'

const Products = () => {
  const [prod,setProd] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    
    axios.get("https://fine-puce-bison-cap.cyclic.app/makeup").then((res)=>{
      console.log(res.data)
      setProd(res.data)
      setLoading(false)
    }).catch((error)=>{
      alert("Api not working")
    })
  },[])

  // if(loading){
  //   return <div>
  //     <h1>Loading.........</h1>
  //   </div>
  // }
    
  return (
    <div className={styles.container}>
     <div className={styles.sidebar}><Sidebar/></div>
     <div className={styles.products_div}> {prod?.map((el)=> <ProductsCard loading={loading} key={el.id} {...el}/> )}</div>
    </div>
  )
}

export default Products