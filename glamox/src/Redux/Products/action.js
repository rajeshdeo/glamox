import axios from "axios";
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

export const getBooks =
  (param = {}) =>
  (dispatch) => {
    dispatch(getBooksRequestAction());

    axios
      .get("http://localhost:8080/books", param)
      .then((res) => {
        dispatch(getBooksSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(getBooksFailureAction());
      });
  };

export const editBook = (id, bookData) => (dispatch) => {
  return axios.patch(`http://localhost:8080/books/${id}`, bookData).then(() => {
    dispatch(editBookSuccess());
  });
};

// ?category=Novel&category=Motivational
