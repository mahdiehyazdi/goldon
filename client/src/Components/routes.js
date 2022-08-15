import { BrowserRouter, Routes, Route, Link, Navigate, HashRouter, Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Assessment from "./Pages/Assessment/Assessment";
import App from "./Pages/App/App";


// function PrivateRoute({ children }) {
//   const [cookies, setCookies] = useCookies("simaauth");

//   return cookies.simaauth ? children : <Navigate to="/login" />;
// }




export default function AppRoutes(props) {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/app/assessment" element={<Assessment />} />
        <Route exact path="/app" element={<App />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
}
