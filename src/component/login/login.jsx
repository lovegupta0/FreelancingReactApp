import React,{useState} from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {connect} from "react-redux";

import {setCurrentUser} from "../../redux/user/user_action";


function Login({setCurrentUser}){
    let history=useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [status,setstatus]=useState("");
    
    const[login,setStateLogin]=React.useState({
        username:"",
        password:""
    })

    function handleChange(event){
        var {name,value}=event.target;
        setStateLogin(prevValue=>{
            return{
                ...prevValue,
                [name]:value
            }  
        });
    }

   

    function handleSubmit(event){
        
        axios.post("/api/clientLogin",login,{crossDomain: true})
          .then(function (response) {
            if(response.data.status==="sucess"){
                setstatus("is-valid");
                setCurrentUser(response.data);
                history.push("/client");

            }
            else{
                setstatus("is-invalid");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        event.preventDefault();
        
    }

    return(
        <div>
             <Button variant="outline-primary" onClick={handleShow}>
      Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Streaming Service</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className='center'>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-0 mt">
                    
                    <Form.Control type="email" className={status+" w-50"} name="username" onChange={handleChange} placeholder="Username" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-0">
                    <Form.Control type="password" className={status+" w-50"} name="password" onChange={handleChange} placeholder="Password" required />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Login
                </Button>
            </Form>
                
        </Modal.Body>
        <Modal.Footer>
        <div >
                <small>&copy; Copyright Streaming Service</small>
               
              </div>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

const mapDispatchToProps=(dispatch)=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(
    null,
    mapDispatchToProps
)(Login);

