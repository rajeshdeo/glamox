import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import {
  EDIT_BOOK_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionType";

const getBooksRequestAction = () => {
  return { type: GET_BOOKS_REQUEST };
};

const getBooksSuccessAction = (payload) => {
  return { type: GET_BOOKS_SUCCESS, payload };
};

const getBooksFailureAction = () => {
  return { type: GET_BOOKS_FAILURE };
};

const editBookSuccess = () => {
  return { type: EDIT_BOOK_SUCCESS };
};



export const getBooks=(param = {}, category) =>

  (dispatch) => {
    dispatch(getBooksRequestAction());
//https://trends-api.onrender.com
    axios
      .get(`https://wild-ruby-hermit-crab-tam.cyclic.app/${category}`, param)
      .then((res) => {
        // console.log(res.data)
        dispatch(getBooksSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(getBooksFailureAction());
      });
  };

export const editBook = (id, bookData) => (dispatch) => {
  return axios.patch(`https://wild-ruby-hermit-crab-tam.cyclic.app/makeup/${id}`, bookData).then(() => {
    dispatch(editBookSuccess());
  });
};

// ?category=Novel&category=Motivational
