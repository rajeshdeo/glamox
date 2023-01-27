import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../ReduxStore/AppStore/action";
import { BookCard } from "./BookCard";
import styles from "../Styles/Booklist.module.css"
import styled from "@emotion/styled";

// import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

export const BooksList = () => {
  const books = useSelector((store) => store.AppReducer.books);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [cat,setCat] = useState('makeup')

  // useEffect(() => {
  //   const order = searchParams.get("order");
  //   let paramObj = {
  //     params: {
  //       brand: searchParams.getAll("brand"),
  //       _sort: order ,
        
  //       _order: order, //acs or desc
  //     },
  //   };
  //   console.log(order);
  //   dispatch(getBooks(paramObj, cat));
  // }, [location.search]);

  useEffect(()=>{
    if(location || books.length===0){
        const sortBy = searchParams.get('sort');
        const getBooksParams = {
            params: {
                brand: searchParams.getAll('brand'),
                _sort: sortBy && 'price',
                _order: sortBy,
            },
        };
        dispatch(getBooks(getBooksParams, cat))
    }
},[location.search]);
  
  return (
    <div  className={styles.booklist_div}>
      {books.length > 0 &&
        books.map((el) => {
          return <BookCard key={el.id} book={el} />;
        })}
    </div>
  );
};

// const DivWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3,1fr);
//   grid-gap: 2rem;
//   text-align: center;
  
  
// `;

// conditional csss

// module.css
