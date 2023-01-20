import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookCard } from "../Components/BookCard";

export const SingleBook = () => {
  const { id } = useParams();
  const books = useSelector((store) => store.bookReducer.books);
  const [book, setBook] = useState({});

  // fetch request
  // store

  useEffect(() => {
    let bookData = books.find((el) => el.id === +id);
    bookData && setBook(bookData);
  }, []);

  return (
    <div>
      <h1>Single Book {id}</h1>
      <BookCard book={book} />
    </div>
  );
};
