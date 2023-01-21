import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Books } from "./Books";
import { EditBook } from "./EditBook";
import { Login } from "./Login";
import { SingleBook } from "./SingleBook";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route
        path="/books/:id"
        element={
          <PrivateRoute>
            <SingleBook />
          </PrivateRoute>
        }
      />
      <Route
        path="/books/:id/edit"
        element={
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};
