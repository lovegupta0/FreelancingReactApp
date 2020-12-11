import React from "react";
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card';

import Applied from "./applied";



import "./job.css";

const JobDetail=({selectJobData})=>{
  
    
    return(
       <div>
          <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title className="h511">Name: {selectJobData.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> {selectJobData.email.split("@")[0]} </Card.Subtitle>
                <h6>Instruction:</h6>
                <Card.Text>
                  {selectJobData.instruction}
                </Card.Text>
                <div className="box0">
                <p>cost:$ {selectJobData.cost}</p>
                <p style={{margin:'0 0 0 6rem'}}>Language prefered: {selectJobData.language} </p>
                </div>
                <p>Selected: {selectJobData.select} </p>
            </Card.Body>
            </Card>
            {selectJobData.applied?selectJobData.select==="Yes"?selectJobData.applied.map((data)=>(data.select==="Yes"?<Applied
            bid={data.bid} 
            key={data._id} 
            name={data.dev_email} 
            id={data._id}
            />:null))
            :selectJobData.applied.map((data)=>( <Applied 
            bid={data.bid} 
            key={data._id} 
            name={data.dev_email} 
            id={data._id} />
            )):null }
            
       </div>
    );
}

const mapStateToProps=state=>({
    selectJobData:state.select.selectJobData
})

export default connect(mapStateToProps)(JobDetail);