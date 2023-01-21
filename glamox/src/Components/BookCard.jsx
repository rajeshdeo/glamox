import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/BookCard.module.css"

export const BookCard = ({ book }) => {
  
  return (
    <div className={styles.prodCard} style={{ border: "1px solid gray" }}>
      <Link to={`/books/${book.id}`}>
        <img style={{width:"15rem"}}
          src={book.image1}
          alt="book_cover"
          width="100%"
        />
      </Link>
      <h3>{book.title}</h3>
      <p>Rating: {book.rating}</p>
      <p>MRP: ₹{book.price}</p>
      <p>Brand: {book.brand}</p>
      <button style={{background:"#FC7CB8"}}>Add</button>
      
    </div>
  );
};
