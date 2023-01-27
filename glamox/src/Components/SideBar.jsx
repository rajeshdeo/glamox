import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/Sidebar.module.css"

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const initialBrand = searchParams.getAll('brand');
    const initialSort = searchParams.get('sort');
    const [brand, setBrand] = useState(initialBrand || []);
    const [sort, setSort] = useState(initialSort || '');

  const handleFilter = (e) => {
    let newCategory = [...brand]; 
    
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
    setSort(e.target.value);
  };

  // useEffect(() => {
  //   const params = {
  //     brand,
  //   };

  //   sort && (params.sort = sort);
  //   setSearchParams(params);

  // }, [brand, sort, setSearchParams]);

  useEffect(()=>{
    if(brand || sort){
        let params={};
        brand && (params.brand = brand)
        sort && (params.sort = sort)
        setSearchParams(params)
    }
},[brand, setSearchParams, sort]);

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
      
      <h3 className={styles.sortByPrice}>Sort By Price</h3>

      <div className={styles.sortBox}>
        <div className={styles.sortBoxIn}>
          <input
            onChange={handleSort}
            className={styles.radio_btn}
            type="radio"
            name="sortBy"
            value={"desc"}
            defaultChecked={sort === "desc"}
          />
          <label className={styles.radio_label}>High to Low</label>
        </div>

        <div className={styles.sortBoxIn}>
          <input className={styles.radio_btn}
            onChange={handleSort}
            type="radio"
            name="sortBy"
            value={"asc"}
            defaultChecked={sort === "asc"}
          />
          <label className={styles.radio_label}>Low to High</label>
        </div>
      </div>
    </div>
  );
};
