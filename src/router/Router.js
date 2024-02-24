import React from "react";
import Home from "../pages/Home/Home";
import {Route, Routes} from "react-router-dom"
import Error from '../pages/Error/Errror.jsx'


const Router = () => {
  return (<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
  </>)

};

export default Router;
