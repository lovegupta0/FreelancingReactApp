import React from "react";

import Message from "../message_module/message";
import Report from "../report_module/report";

import "./nav.css";

const Navs=(props)=>{
  const [Nav1,setNav1]=React.useState(true);
  const [Nav2,setNav2]=React.useState(false);
  const nav1=()=>{
    setNav1(true);
    setNav2(false);
  }
  const nav2=()=>{
    setNav1(false);
    setNav2(true);
  }

    
  

    return(
      <div>
        <div className="box0">
          <div id="nav1" className="box1">
            <h5 className="h5" onClick={nav1} >Reported</h5>
          </div>
          <div id="nav2" className="box1">
            <h5 className="h51" onClick={nav2}>Message</h5>
          </div>
        </div>
        <div>
        {Nav1?<Report/>:null}
        {Nav2?<Message/>:null}

        </div>
      </div>
    )
}
export default Navs;