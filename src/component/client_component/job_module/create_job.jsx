import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {connect} from 'react-redux';
import axios from 'axios';

import "./job.css";


const CreateJob=({currentUser})=>{
    const [file,setFile]=React.useState("");
    const [createJob,setJob]=React.useState({
        email:currentUser.username,
        name:"",
        type:"",
        language:"",
        instruction:"",
        date:"",
        cost:"",
        payment:""
    });

    function handleJob(event){
        var {name,value}=event.target;
        setJob(prevValue=>{
            return{
            ...prevValue,
            [name]:value
            }
        })
    }
    
    const handleFile=(event)=>{
        setFile(event.target.files[0]);
    }

    function handleSubmit(event){
        event.preventDefault();
    
        const formData=new FormData();
        formData.append("file",file);
        axios.post("/api/createProject",formData,{crossDomain:true},{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }).then((res)=>{
            if(res.data==="sucess"){
                axios.post("/api/createProject",createJob,{crossDomain:true})
             .then((res)=>{
            console.log(res);
        });
            }
        });
        
    }
    return(
        <div className="form">
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                  <Form.Label className="mt-3">Name of Project:</Form.Label>
                  <Form.Control name="name" className="w-50 " onChange={handleJob} type="text" required/>
              </Form.Group>
              <Form.Group controlId="type">
                  <select name="type" onChange={handleJob}>
                    <option value=''>select type of project</option>
                    <option value="web_development">Web Development</option>
                    <option value="typing">Typing</option>
                    <option value="machine_learning">Machine Learning</option>
                    <option value="data_science">Data Science</option>
                    <option value="game_development">Game Development</option>
                    <option value="coding">coding</option>
                    </select>
              </Form.Group>
              <Form.Group controlId="programming_language">
                  <Form.Label>Programing language Prefer:</Form.Label>
                  <Form.Control name="language" className="w-50" onChange={handleJob} type="text"/>
              </Form.Group>
              <Form.Group controlId="instruction">
                  <Form.Label>Instruction:</Form.Label>
                 <textarea name="instruction" id="" cols="60" onChange={handleJob} rows="6"></textarea>
              </Form.Group>
              <Form.Group controlId="date">
                  <Form.Label>Deadline Date:</Form.Label>
                  <Form.Control name="date" className="w-50" onChange={handleJob} type="date" required/>
              </Form.Group>
              <Form.Group controlId="cost">
                  <Form.Label>Price of Project:</Form.Label>
                  <Form.Control name="cost" className="w-50" onChange={handleJob} type="text" placeholder="$" required/>
              </Form.Group>
              <Form.Group controlId="file" className="mt-3" style={{display:"flex"}}>
                <Form.Label className="mt-2">Choose file to upload </Form.Label>
                <Form.Control type="file" onChange={handleFile} name="file" className="mt-2" required />        
            </Form.Group>
            <div className="center m mb-3 ">
                
                <Button variant="outline-primary" type="submit">Submit</Button>
              
            </div>
          </Form>
        </div>
    );
}

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(CreateJob);