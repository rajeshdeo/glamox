import data from "@iconify/icons-akar-icons/pinterest-fill";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookCard } from "../Components/BookCard";

const SingleProduct = ()=>{
    const {id} = useParams();
    console.log(id);
    const [cat, setCat]=useState('makeup');
    const [cartData,setCartData] = useState();

    return <div>
        <h1>Product Details</h1>
    </div>
}

export default SingleProduct;