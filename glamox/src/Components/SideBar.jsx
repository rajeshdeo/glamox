import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialState || []); // [motivational]
  const [order, setOrder] = useState(initialOrder || "");

  const handleFilter = (e) => {
    let newCategory = [...category]; //[motivational, novel]
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
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    const params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input
          type="checkbox"
          value="Novel"
          onChange={handleFilter}
          checked={category.includes("Novel")}
        />
        <label>Novel</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Motivational"
          onChange={handleFilter}
          checked={category.includes("Motivational")}
        />
        <label>Motivational</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Thriller"
          onChange={handleFilter}
          checked={category.includes("Thriller")}
        />
        <label>Thriller</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Science_Fiction"
          onChange={handleFilter}
          checked={category.includes("Science_Fiction")}
        />
        <label>Science Fiction</label>
      </div>
      <h3>Sort By order</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="sort_by"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <input
          type="radio"
          name="sort_by"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};
