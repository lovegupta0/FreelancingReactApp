import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import {connect} from "react-redux";

import OngoingCard from "./ongoingcard";

const OngoingJob=({appliedData})=>{
    return(
        <Accordion>
            {appliedData.map((data)=>(<OngoingCard key={data._id}  
            pid={data.project_id} 
            client={data.client_email.split("@")[0]} 
            cost={data.bid} 
            status={data.select}
            project={data.project_name} 
            />))}
        </Accordion>
    )
}

const mapStateToProps=state=>({
    appliedData:state.applied.appliedData
})

export default connect(mapStateToProps) (OngoingJob);