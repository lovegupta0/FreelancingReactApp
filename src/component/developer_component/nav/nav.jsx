import React from "react";

import Job from "../job_module/job";
import OngoingJob from "../ongoing_job_module/ongingJob";
import Message from "../../client_component/message_module/message";
import Report from "../../client_component/report_module/report";

import "./nav.css";

const Navs=(props)=>{
  const [Nav1,setNav1]=React.useState(true);
  const [Nav2,setNav2]=React.useState(false);
  const [Nav3,setNav3]=React.useState(false);
  const [Nav4,setNav4]=React.useState(false);
  const nav1=()=>{
    setNav1(true);
    setNav2(false);
    setNav3(false);
    setNav4(false);
    
  }
  const nav2=()=>{
    setNav1(false);
    setNav2(true);
    setNav3(false);
    setNav4(false);
    
  }
  const nav3=()=>{
    setNav1(false);
    setNav2(false);
    setNav3(true);
    setNav4(false);
    
  }
  const nav4=()=>{
    setNav1(false);
    setNav2(false);
    setNav3(false);
    setNav4(true);
    
  }

    return(
      <div>
        <div className="box0">
          <div id="nav1" className="box1">
            <h5 className="h5" onClick={nav1} >Job</h5>
          </div>
          <div id="nav2" className="box1">
            <h5 className="h51" onClick={nav2}>OnGoing Job</h5>
          </div>
          <div id="nav3" className="box1">
            <h5 className="h5" onClick={nav3}>Message</h5>
          </div>
          <div id="nav4" className="box1">
            <h5 className="h5" onClick={nav4}>Report</h5>
          </div>
        </div>
        <div>
        {Nav1?<Job/>:null}
        {Nav2?<OngoingJob/>:null}
        {Nav3?<Message/>:null}
        {Nav4?<Report/>:null}
        </div>
      </div>
    )
}
export default Navs;