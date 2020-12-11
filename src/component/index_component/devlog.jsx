import React,{useState} from 'react'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {connect} from "react-redux";
import {setCurrentUser} from "../../redux/user/user_action";

const Devlogin=({setCurrentUser})=>{
    let history=useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow1 = () => setShow(true);

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
    function handleDevSubmit(event){
        axios.post("/api/developerLogin",login,{crossDomain: true})
          .then(function (response) {
            if(response.data.status==="sucess"){
                setstatus("is-valid");
                setCurrentUser(response.data);
                history.push("/developer");

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
            <button className="navbar__item1" onClick={handleShow1}>
                 Login <br/>
                 <small>As Developer</small>
             </button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Freelancing</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className='text-center'style={{padding:"0 15% 0 15%"}} >
            <Form onSubmit={handleDevSubmit}>
                <Form.Group  className="mb-1 mt-3">
                    
                    <Form.Control type="email" className={status} name="username" onChange={handleChange} placeholder="Username" required/>
                </Form.Group>

                <Form.Group  className="mb-2">
                    <Form.Control type="password" className={status} name="password" onChange={handleChange} placeholder="Password" required />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Login
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <div >
                <small>&copy; Copyright Freelancing</small>
               
              </div>
        </Modal.Footer>
      </Modal>
        </div>
    )
}


const mapDispatchToProps=(dispatch)=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(
    null,
    mapDispatchToProps
)(Devlogin);