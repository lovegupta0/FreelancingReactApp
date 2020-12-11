import React,{useState} from 'react'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {connect} from "react-redux";

import {setCurrentUser} from "../../redux/user/user_action";
import DevLog from "./devlog"
import logo from './Images/logo.png'
import './Navbar.css'

 function NavbarItem({setCurrentUser}){
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
        <div className="navbar">
            <div className="navbar__header">
               <img src={logo} alt="Logo" title="Freelances" />        </div>
         <ul className="navbar__menu">
             <li className="navbar__item"><a href="https://www.google.com/">How It Works </a></li>
             <li className="navbar__item"><a href="https://www.google.com/">Browse Jobs </a></li>
             <div>
             
             <DevLog/>
             </div>
             <div>
             <button className="navbar__item1" onClick={handleShow}>
                 Login <br/>
                 <small>As Client</small>
             </button>
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Freelancing</Modal.Title>
        </Modal.Header>
        
        <Modal.Body  >
            <div className='text-center' style={{padding:"0 15% 0 15%"}}>
            <Form onSubmit={handleSubmit} className='text-center ' >
                <Form.Group controlId="formBasicEmail" className="mb-1 mt text-center ">
                    
                    <Form.Control type="email" className={status} name="username" onChange={handleChange} placeholder="Username" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-0 text-center">
                    <Form.Control type="password" className={status} name="password" onChange={handleChange} placeholder="Password" required />
                </Form.Group>
                <Button variant="outline-primary" className="mt-2" type="submit">
                    Login
                </Button>
            </Form>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <div >
                <small>&copy; Copyright Freelancing</small>
               
              </div>
        </Modal.Footer>
      </Modal>
             </div>
         </ul>
         </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(
    null,
    mapDispatchToProps
)(NavbarItem);