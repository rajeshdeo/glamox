
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from "axios";
import styles from "../Styles/SingleProducts.module.css"
import { color, Skeleton, Toast } from "@chakra-ui/react";

import { addCart } from "../ReduxStore/CartStore/acton";

import { useDispatch, useSelector } from "react-redux";

import { SearchIcon } from "@chakra-ui/icons";
import Alert from "../Components/Alert";



const SingleProduct = () => {
    const { category, P_id } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    useEffect(() => {
        axios.get(`https://trends-api.onrender.com/${category}/${P_id}`).then((res) => {
            // alert("Success")
            setData(res.data)
            setLoading(false)
        }).catch(() => {
            alert("Error")
        })
    }, [P_id])
    const dispatch = useDispatch();
    const {books,isLoading} = useSelector((store) => store.AppReducer);
    const product = ()=>{
        // console.log(typeof(book));
    
        // let res= axios.post('https://fine-puce-bison-cap.cyclic.app/cart', book).then((r)=>{
          
        // }).catch((e)=>{alert('added succesfully');})
    
        dispatch(addCart(books))
        let alertdata = {
          title: 'Item added to cart ',
          description: "",
          status: 'success',
      }
      Toast(Alert(alertdata))
      }
      

    return (
        <>

            <div className={styles.mainDiv}>
                <div className={styles.p_div}>
                {loading ? <Skeleton height='90%' width={"90%"} margin={"auto"} /> :  
                    <div className={styles.image_div} >
                        <div className={styles.mult_images}>
                            <img src={data?.image2} alt="" />
                            <img src={data?.image3} alt="" />
                            <img src={data?.image4} alt="" />

                        </div>
                        <img style={{ width: "98%" }} src={data?.image1} alt="single image" />
                    </div>
}
{loading ? <Skeleton height='90%' width={"90%"} margin={"auto"}/> : 
                    <div className={styles.details}>
                        <h1>{data?.title}</h1>
                        <p>({data?.brand})</p>
                        <img src="https://i.postimg.cc/fTV2bDtM/image.png" alt="" />
                        <br />
                        <p style={{ fontWeight: "bold" }}><span>MRP:₹{data?.MRP}</span> <span style={{ fontWeight: "bold", color: "black", textDecoration: "none", fontSize: "20px" }}>₹{data?.price}</span>  <span style={{ color: "green" }}>{Math.floor(100 - (data?.price / data?.MRP) * 100)}% Off</span></p>
                        <p style={{ color: "grey" }}>inclusive of all taxes</p>
                        <br /><br /><br /><br /><br />
                        <button onClick={product}>Add to Bag</button>
                    </div>
}
                </div>

            </div>

        </>
    )
}

export default SingleProduct

