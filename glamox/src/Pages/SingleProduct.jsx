import data from "@iconify/icons-akar-icons/pinterest-fill";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookCard } from "../Components/BookCard";

const SingleProduct = ()=>{
    const {id} = useParams();
    console.log(id);
    const [cat, setCat]=useState('makeup');
    // const [prod, setProd]=useState([])

    // useEffect(()=>{
    //     let data = axios.get(`https://fine-puce-bison-cap.cyclic.app/${cat}/${id}`).then((r)=>{
    //       
    //         // console.log(r.data);
    //     }).catch((e)=>{console.log(e);})
    // },[])

    // console.log(prod);

    return <div>
        <h1>Product Details</h1>
    </div>
}

export default SingleProduct;