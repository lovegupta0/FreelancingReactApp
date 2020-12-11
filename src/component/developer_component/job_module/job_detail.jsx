import React from "react";
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import Applied from "./applied";
import "./job.css";

const JobDetail=({selectJobData,currentUser})=>{
  const [bid,setBid]=React.useState({
    bid:""
  });

  const handleBid=(event)=>{
    setBid({bid:event.target.value});
  }

  const handleSubmit=(event)=>{
    var data={
      bid:bid.bid,
      project_id:selectJobData._id,
      dev_email:currentUser.username,
      client_email:selectJobData.email,
      project_name:selectJobData.name
    }
    axios.post("/api/apply",data,{crossDomain: true}).then((res)=>{
    })
  }
    return(
       <div>
          <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title className="h511">Name: {selectJobData.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">by {selectJobData.email.split("@")[0]} </Card.Subtitle>
                <h6>Instruction:</h6>
                <Card.Text>
                  {selectJobData.instruction}
                </Card.Text>
                <div className="box0">
                <p>cost:$ {selectJobData.cost}</p>
                <p style={{margin:'0 0 0 6rem'}}>Language prefered: {selectJobData.language} </p>
                </div>
                <p>Selected: {selectJobData.select} </p>
               
                  {selectJobData.file?<div>
                    <a href={selectJobData.file} download>
                      <Button>Download Source file</Button>
                    </a>
                    </div>:null
                    }
            </Card.Body>
            </Card>
            <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title className="h511">Apply</Card.Title>
                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="Bid"  style={{display:'flex'}}>
                            <Form.Label className="mr-3 mt-1">Bid: </Form.Label>  
                            <Form.Control name="bid" className="box" onChange={handleBid} type="text" placeholder={selectJobData.cost} required />
            </Form.Group>
            <div>
              <Button variant="outline-primary" type="submit">Apply</Button>
            </div>
            </Form>
            </Card.Body>
            </Card>
            {selectJobData.applied?selectJobData.applied.map((data)=>(<Applied bid={data.bid} key={data._id} name={data.dev_email} />)):null }
       </div>
    );
}


const mapStateToProps=state=>({
    selectJobData:state.select.selectJobData,
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(JobDetail);