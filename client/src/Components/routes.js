import { BrowserRouter, Routes, Route, Link, Navigate, HashRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Assessment from "./Pages/Assessment/Assessment";


// function PrivateRoute({ children }) {
//   const [cookies, setCookies] = useCookies("simaauth");

//   return cookies.simaauth ? children : <Navigate to="/login" />;
// }




export default function AppRoutes(props) {
  return (
    <HashRouter>
      <Routes>

        <Route exact path="/assessment" element={<Assessment />} />
 
      </Routes>
    </HashRouter>
  );
}
