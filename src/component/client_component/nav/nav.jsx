import React from "react";
import {connect} from "react-redux";

import CreateJob from '../job_module/create_job';
import Job from '../job_module/job';
import Message from "../message_module/message";
import Report from "../report_module/report";

import "./nav.css";

const Navs=({})=>{
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
            <h5 className="h5" onClick={nav1} >Project</h5>
          </div>
          <div id="nav2" className="box1">
            <h5 className="h51" onClick={nav2}>Create Project</h5>
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
        {Nav2?<CreateJob/>:null}
        {Nav3?<Message />:null}
        {Nav4?<Report/>:null}
        </div>
      </div>
    )
}

const mapStateToProps=state=>({
  userData:state.data.userData
})

export default connect(mapStateToProps)(Navs);