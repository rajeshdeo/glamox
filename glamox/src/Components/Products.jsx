import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import styles from "../styles/Products.module.css"
import Sidebar from './Sidebar'
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import Stars from './Stars'
import { useLocation, useSearchParams } from 'react-router-dom'

const Products = () => {
  const [prod,setProd] = useState(null)
  const [loading,setLoading] = useState(true)
  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams();
  

  useEffect(()=>{
    let paramObj = {
      param:{
        category:searchParams.getAll("category")
      }
    }
    
    getData();
    
    
  },[location.search])

  const getData = () =>{
    axios.get(`https://fine-puce-bison-cap.cyclic.app/makeup`).then((res)=>{
      // console.log(res.data)
      setProd(res.data)
      setLoading(false)
    }).catch((error)=>{
      alert("Api not working")
    })
  }

  if(loading){
    return <div>
     <h1>loading...........</h1>
    </div>
  }
    
  return (
    <div className={styles.container}>
     <div className={styles.sidebar}><Sidebar/></div>
     <div className={styles.products_div}> {prod?.map((el)=> <ProductsCard loading={loading} key={el.id} {...el}/> )}</div>
    </div>
  )
}

export default Products