import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontQris from "./component/FrontQris";
import About from "./component/About";
import Navbar from "./component/Navbar";
import ShowQris from "./component/ShowQris";
import NotFound from "./component/NotFound";
import QrScan from "./component/QrScan";


function App() {
  return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<FrontQris></FrontQris>}></Route>
              <Route path="/about" element={<About></About>}  ></Route>
              <Route path="/qris" element={<ShowQris></ShowQris>} ></Route>
              <Route path="/scan" element={<QrScan />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
         </BrowserRouter>
      </>
  );
}

export default App; 