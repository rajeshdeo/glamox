import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/BookCard.module.css"
import { FaBeer } from 'react-icons/fa';
import { AiFillStar,AiOutlineStar,BsStarHalf } from 'react-icons/fa';
import { BooksList } from "./BooksList";
import axios from "axios";

export const BookCard = ({ book }) => {

  const [cartData,setCartData] = useState();

  const cartInitial = {
    image1:book.image1,
    title:book.title,
    price:book.price,
    rating: 4.3,
    review: 1969,
    stock: true,
    qty: 25
  }

  const addtoCart = () => {
    let res = axios.post("https://fine-puce-bison-cap.cyclic.app/cart",{cartData}).then((res)=>{
      
      setCartData(cartInitial)
      console.log(cartData)
    })
    // console.log(res)
  }
  
  return (
    <div className={styles.prodCard} style={{ boxShadow:" rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", cursor:"pointer" }}>
      <Link to={`/books/${book.id}`}>
        <img style={{width:"100%"}}
          src={book.image1}
          alt="book_cover"
          width="100%"
        />
      
      <p className={styles.prod_title}>{book.title}</p>
      {/* <p>Rating: {book.rating}</p> */}
      <p>MRP:<span className={styles.cutPrice}>₹{book.MRP}</span> ₹{book.price}</p>
      <p>Brand: {book.brand}</p>
      <button onClick={()=>navigate(`/single/${book.id}`)}
      style={{background:"#FC7CB8"}}>Add</button>
      
    </div>
  );
};
