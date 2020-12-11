import React from "react";
import {connect} from "react-redux";


import JobBar from "../../job_bar/job_bar";
import JobDetail from "../job_module/job_detail";

import './job.css';

const Job=({userData,selectJobData})=>{
    
    return(
        <div id="job0">
            <div id="job1">
                {userData.map((data)=>(<JobBar name={data.name} key={data._id} _id={data} />))}
            </div>
            <div id="job2">
                {selectJobData?<JobDetail/>:null}
            </div>
        </div>
    );
};

const mapStateToProps=state=>({
    userData:state.data.userData,
    selectJobData:state.select.selectJobData
})

export default connect(mapStateToProps)(Job);