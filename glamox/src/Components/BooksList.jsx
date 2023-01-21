import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../ReduxStore/AppStore/action";
import { BookCard } from "./BookCard";
import styled from "@emotion/styled";

// import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

export const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.AppReducer.books);
  const [cat,setCat] = useState('makeup')
  // console.log(books);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order");
    let paramObj = {
      params: {
        brand: searchParams.getAll("brand"),
        _sort: order ,
        
        _order: order, //acs or desc
      },
      
    };
    console.log(order);
    dispatch(getBooks(paramObj, cat));
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
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2rem;
  text-align: center;
  
  
`;

// conditional csss

// module.css
