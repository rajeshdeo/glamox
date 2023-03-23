import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editBook, getBooks } from "../Redux/Books/action";

export const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const books = useSelector((store) => store.bookReducer.books);
  const dispatch = useDispatch();

  useEffect(() => {
    const bookData = books.find((el) => el.id === +id);
    if (bookData) {
      setTitle(bookData.book_name);
      setAuthor(bookData.author);
    }
  }, []);

  const handleEdit = () => {
    let newData = {
      author,
      book_name: title,
    };

    dispatch(editBook(id, newData)).then(() => dispatch(getBooks()));
  };

  return (
    <div>
      <h1>Edit Book Id: {id}</h1>
      <div>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button onClick={handleEdit}>Submit</button>
    </div>
  );
};
