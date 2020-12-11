import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import axios from 'axios';

import Navbar from '../../navbar/navbar';
import Jumbotron from '../../jumbotron/jumbotron';
import Login from "../../login/login";


import './signup.css';

const Signup=()=>{
    const [validity,setValidity]=React.useState("");
    const [profile,setProfile]=React.useState({
        fullname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:"",
        dob:""
    });
    function handleProfile(event){
        var {name,value}=event.target;
        
        setProfile( prevValue=>{
             return{
                 ...prevValue,
                [name]:value
            }
           
        }
        );

        if(name==="cpassword"  || (name==="password" && profile.Cpassword) ){
            if(name==="cpassword" && value===profile.password){
                setValidity("is-valid");
            }

            else if(name==="password" && profile.Cpassword===value){
                setValidity("is-valid");
            }
            else {
                setValidity("is-invalid");
            }
        }
 
    }

    function submitProfile(event){
        event.preventDefault();
        axios.post("/api/clientSignup",profile,{crossDomain: true})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
            
     }

    return(
        <div>
            <Navbar>
                <Login/>
            </Navbar>
            <Jumbotron>
            <Form onSubmit={submitProfile}>
            <Form.Group controlId="fullname">
                            <Form.Label className="mt-7">Full Name: </Form.Label>  
                            <Form.Control name="fullname" className="box" onChange={handleProfile} type="text" placeholder="Full name" required />
            </Form.Group>
            
            <Form.Group  controlId="email">
                        <Form.Label className="mt-7">Email: </Form.Label>
                        <Form.Control name="email" className="box" onChange={handleProfile} type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group  controlId="password">
                        <Form.Label className="mt-7">Create Password: </Form.Label>
                        <Form.Control name="password" className={validity+" box"}  onChange={handleProfile} type="password" placeholder="Create Password" required />
            </Form.Group>
            <Form.Group  controlId="Cpassword">
                        <Form.Label className="mt-7">Confirm Password: </Form.Label>
                        <Form.Control name="cpassword" className={validity+" box"} onChange={handleProfile} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group  controlId="mobile">
                        <Form.Label className="mt-7">Mobile No: </Form.Label>
                        <Form.Control name="mobile" className="box" onChange={handleProfile} type="text" placeholder="Mobile No." required /> 
                    </Form.Group>
                    <Form.Group  controlId="dob">
                        <Form.Label className="mt-7">Date of Birth: </Form.Label>
                        <Form.Control name="dob" className="box" onChange={handleProfile}  type="date" min="1950-01-01" max="2018-12-31" required /> 
                    </Form.Group>
                    <div className="text-center">
                        
                    <Button variant="outline-primary" type="submit"  >Submit</Button>
                    
                    </div>
                    </Form>

                    </Jumbotron>
        </div>
    )
}

export default Signup;