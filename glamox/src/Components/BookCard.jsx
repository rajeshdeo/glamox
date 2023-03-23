import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../Styles/BookCard.module.css"
import { FaBeer } from 'react-icons/fa';
import { AiFillStar,AiOutlineStar,BsStarHalf } from 'react-icons/fa';
import { BooksList } from "./BooksList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../ReduxStore/CartStore/acton";
import { useToast } from "@chakra-ui/toast";
import Alert from "./Alert";

export const BookCard = ({ book }) => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {category} = useParams()
  const toast = useToast()
  const product = ()=>{
    // console.log(typeof(book));

    // let res= axios.post('https://fine-puce-bison-cap.cyclic.app/cart', book).then((r)=>{
      
    // }).catch((e)=>{alert('added succesfully');})

    dispatch(addCart(book))
    let alertdata = {
      title: 'Item added to cart ',
      description: "",
      status: 'success',
  }
  toast(Alert(alertdata))
  }
  
  
  return (
    <div className={styles.prodCard} style={{ boxShadow:" rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", cursor:"pointer" }}>
      <Link to={`/books/${book.id}`}/>
        <Link to={`/${category}/${book.id}`}>
        <img style={{width:"100%"}}
          src={book.image1}
          alt="book_cover"
          width="100%"
        />
        </Link>
      <p className={styles.prod_title}>{book.title}</p>
      <p>MRP:<span className={styles.cutPrice}>₹{book.MRP}</span> ₹{book.price}</p>
      <p>Brand: {book.brand}</p>

      <div className={styles.sideAddButtonBox}>
        <button className={styles.sideAddButton}
        onClick={product}>Add to Cart</button>
      </div>
    </div>
  );
};
