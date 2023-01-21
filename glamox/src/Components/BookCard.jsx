import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ book }) => {
  console.log(book)
  return (
    <div style={{ border: "1px solid gray" }}>
      <Link to={`/books/${book.id}`}>
        <img
          src={book.image1}
          alt="book_cover"
          width="100%"
        />
      </Link>
      <h3>{book.title}</h3>
      <p>Rating: {book.rating}</p>
      <p>MRP: ₹{book.price}</p>
      <p>Brand: {book.brand}</p>
      <button>Add To Cart</button>
      
    </div>
  );
};
