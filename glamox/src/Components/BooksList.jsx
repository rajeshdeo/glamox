import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BookCard } from "./BookCard";

import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import { getBooks } from "../ReduxStore/Books/action";

export const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.bookReducer.books);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order");
    let paramObj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: order && "release_year",
        _order: order, //acs or desc
      },
    };
    dispatch(getBooks(paramObj));
  }, [location.search]);
  return (
    <DivWrapper>
      {books.length > 0 &&
        books.map((el) => {
          return <BookCard key={el.id} book={el} />;
        })}
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 10px;
`;

// conditional csss

// module.css
