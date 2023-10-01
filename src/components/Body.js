import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import React from "react";

import { Outlet } from "react-router-dom";
const Body = ()=>{
  return(
    <div className="flex">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}
export default Body;