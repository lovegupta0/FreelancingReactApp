import React from "react";
import {connect} from "react-redux";

const JobDetail=({selectJobData})=>{
    
    return(
        <div>

        </div>
    );
}

const mapStateToProps=state=>({
    selectJobData:state.select.selectJobData
})

export default connect(mapStateToProps)(JobDetail);