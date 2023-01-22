import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/BookCard.module.css"
import { FaBeer } from 'react-icons/fa';
import { AiFillStar,AiOutlineStar,BsStarHalf } from 'react-icons/fa';
import { BooksList } from "./BooksList";
import axios from "axios";

export const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const product = ()=>{
    console.log(typeof(book));

    let res= axios.post('https://fine-puce-bison-cap.cyclic.app/cart', book).then((r)=>{
      console.log('added succesfully');
    }).catch((e)=>{console.log(e);})
  }
  
  
  return (
    <div className={styles.prodCard} style={{ boxShadow:" rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", cursor:"pointer" }}>
      <Link to={`/books/${book.id}`}/>
        <img style={{width:"100%"}}
          src={book.image1}
          alt="book_cover"
          width="100%"
        />
      <p className={styles.prod_title}>{book.title}</p>
      <p>MRP:<span className={styles.cutPrice}>₹{book.MRP}</span> ₹{book.price}</p>
      <p>Brand: {book.brand}</p>

      <button onClick={product}
      style={{background:"#FC7CB8"}}>Add</button>
    </div>
  );
};
