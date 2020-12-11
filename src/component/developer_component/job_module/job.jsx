import React from "react";
import {connect} from "react-redux";

import JobDetail from "./job_detail";
import JobBar from "../../job_bar/job_bar";
import './job.css';

const Job=({userData,selectJobData})=>{
    return(
        <div className="job0">
            <div id="job3">
            {userData.map((data)=>(data.select==="No"?<JobBar name={data.name} key={data._id} _id={data} />:null))}
            </div>
            <div id="job4">
            {selectJobData?<JobDetail/>:null}
            </div>
        </div>
    );
};

const mapStateToProps=state=>({
    userData:state.data.userData,
    selectJobData:state.select.selectJobData
})

export default connect(mapStateToProps) (Job);