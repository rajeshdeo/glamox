import React from "react";
import { BooksList } from "../Components/BooksList";
// import { Navbar } from "../Components/Navbar";
import { SideBar } from "../Components/SideBar";
import styles from "../Styles/Books.module.css"

export const Books = () => {
  return (
    <div className={styles.Prod_div}>
      {/* <Navbar /> */}
      <div className={styles.innerDiv}>
        <div className={styles.SideBar}>
          <SideBar />
        </div>
        <div className={styles.allProduct_div}>
          <BooksList />
        </div>
      </div>
    </div>
  );
};
