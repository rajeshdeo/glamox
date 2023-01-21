import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/Sidebar.module.css"

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("brand");
  const initialOrder = searchParams.get("order");
  const [brand, setBrand] = useState(initialState || []); 
  const [order, setOrder] = useState(initialOrder || "");

  const handleFilter = (e) => {
    let newCategory = [...brand]; //[motivational, novel]
    // If a user changes any category it should be stored in state
    // If the category is already present pop out of the state

    // arr = [1,2,3,4,5]
    // arr.splice(arr.indexOf(3),1); arr.indexOf(el)

    if (newCategory.includes(e.target.value)) {
      //filter
      //splice, slice
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setBrand(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    const params = {
      brand,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [brand, order]);

  return (
    <div className={styles.sidebar_div}>
      <h2 className={styles.filter_text}>Filters</h2>
      <h3>Brand</h3>
      <div>
        <input className={styles.brand_checkbox}
          type="checkbox"
          value="Lakme"
          onChange={handleFilter}
          checked={brand.includes("Lakme")}
        />
        <label className={styles.label}>Lakme</label>
      </div>
      <div>
        <input className={styles.brand_checkbox}
          type="checkbox"
          value="Loreal"
          onChange={handleFilter}
          checked={brand.includes("Loreal")}
        />
        <label className={styles.label}>Loreal</label>
      </div>
      {/* <div>
        <input
          type="checkbox"
          value="Thriller"
          onChange={handleFilter}
          checked={category.includes("Thriller")}
        />
        <label>Thriller</label>
      </div> */}
      {/* <div>
        <input
          type="checkbox"
          value="Science_Fiction"
          onChange={handleFilter}
          checked={category.includes("Science_Fiction")}
        />
        <label>Science Fiction</label>
      </div> */}

      
      <h3 className={styles.sortByPrice}>Sort By Price</h3>
      <div onChange={handleSort}>
        <input
          className={styles.radio_btn}
          type="radio"
          name="sort_by"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label className={styles.radio_label}>High to Low</label>
        <input className={styles.radio_btn}
          type="radio"
          name="sort_by"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label className={styles.radio_label}>Low to High</label>
      </div>
    </div>
  );
};
