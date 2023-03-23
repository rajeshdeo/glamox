import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../ReduxStore/AppStore/action";
import { BookCard } from "./BookCard";
import styles from "../Styles/Booklist.module.css"


// import styled from "styled-components";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Skeleton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ProductNotFound from "../Pages/ProductNotFound";

export const BooksList = () => {
  const {books,isLoading} = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location)
  const [searchParams] = useSearchParams();
  const {category} = useParams();

// console.log(filterdData)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const [filterdData,seFilteredData] = useState([]||books);
// const [searchQuery,setSearchQuery] = useState("");

// useEffect(()=>{
//   const filterData = books.filter((el)=>{
//     return el.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
//   });
//   seFilteredData(filterData)
// },[searchQuery,category])

// const handleSearch = (e) =>{
//   setSearchQuery(e.target.value)
  
// };
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
        dispatch(getBooks(getBooksParams, category))
    }
   

},[location.search,category]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  
  return (
    <div  >
      <div className={styles.SearchDiv} style={{width:"100%",height:"5rem",display:"flex",alignItems:"center",justifyContent:"end"}}>
        <div style={{display:"flex",borderEndEndRadius:"none",alignItems:"center",border:"1px solid grey",width:"40%",borderRadius:"3rem",background:"#f5f5f5"}}>
          <SearchIcon style={{height:"3rem",width:"13%",paddingLeft:"1rem",paddingRight:"1rem"}} />
          <input  style={{width:"80%",height:"3rem",background:"#f5f5f5"}}  type="text" placeholder="Search Your Products"/>
        </div>
      </div>
      
       <div className={styles.booklist_div}>
        
       {books.length <= 0 ? <div style={{width:"300%",margin:"auto"}}><ProductNotFound/></div> :books?.map((el) =>
          isLoading? <Skeleton height='70vh' />:
          <BookCard key={el.id} book={el} />
        )}
       </div>

    </div>
  );
};



  
