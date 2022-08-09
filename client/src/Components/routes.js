import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Assessment from "./Pages/Assessment/Assessment";


// function PrivateRoute({ children }) {
//   const [cookies, setCookies] = useCookies("simaauth");

//   return cookies.simaauth ? children : <Navigate to="/login" />;
// }




export default function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/assessment" element={<Assessment />} />
 
      </Routes>
    </BrowserRouter>
  );
}
