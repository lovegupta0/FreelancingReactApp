import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import axios from "axios";

import "./ongoing.css";


const OngoingCard=({client,cost,project,status,pid,userData})=>{
  const [file,setFile]=React.useState("");
  const handleFile=(event)=>{
    setFile(event.target.files[0]);
    }
  function getData(id){
    var i=0;
    var n=userData.length;
    for(i=0;i<n;i++){
      if(id===userData[i]._id){
        return userData[i];
      }
    }
  }
  function handleSubmit(event){
    event.preventDefault();

    const formData=new FormData();
    formData.append("file",file);
    axios.post("/api/uploadProjectData",formData,{crossDomain:true},{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then((res)=>{
        if(res.data==="sucess"){
            axios.post("/api/uploadProjectData",{id:pid},{crossDomain:true})
         .then((res)=>{
        console.log(res);
    });
        }
    });
  }

  var Data=getData(pid);
 
    return(
        <Card>
    <Card.Header style={{display:"flex"}}>
      <Accordion.Toggle as={Button} eventKey={pid}>
       {project}
      </Accordion.Toggle>
      <div style={{ margin: "0 0 0 75%"}} >
          {status==="No"?<p >status: pending</p>:<p>status: seleted</p>}
      </div>
    </Card.Header>
    <Accordion.Collapse eventKey={pid}>
      <Card.Body>
      <p>Name: {project} </p>
      <small>By {client} </small>
      <p className="mt-2">Instruction : {Data.instruction} </p>
      <div className="box0 mt-2">
                <p>cost:$ {cost}</p>
                <p style={{margin:'0 0 0 60%'}}>Language prefered: {Data.language} </p>
       </div>
       <a  href={Data.file} download>
                      <Button className="mt-2">Download Source file</Button>
        </a>
        <div>
          {status==="Yes"?<div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="file" className="mt-3" style={{display:"flex"}}>
                <Form.Label className="mt-2">Upload Project here: </Form.Label>
                <Form.Control type="file" onChange={handleFile} name="file" className="mt-2" required />        
            </Form.Group>
            <div className="text-center mb-1 ">
                
                <Button variant="outline-primary" type="submit">Submit</Button>
              
            </div>
            </Form>
          </div>
          :null}
          </div>       
      </Card.Body>
    </Accordion.Collapse>
  </Card>
    )
}

const mapStateToProps=state=>({
  userData:state.data.userData
})

export default connect(mapStateToProps)( OngoingCard);