import React from "react";
import Card from 'react-bootstrap/Card';
import {connect} from "react-redux";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import {Form,Table} from "react-bootstrap";

import "./job.css";



const Applied=({name,bid,id,selectJobData})=>{
    const [state,setState]=React.useState(selectJobData.select);
    const [payment,setPayment]=React.useState(selectJobData.payment);
    const [file,setfile]=React.useState("");
    const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    var obj={
        project_id:selectJobData._id,
        applied_id:id,
        cost:bid,
        email:selectJobData.email,
        select:"Yes",
        name:name
    }
    if(selectJobData.payment==="Yes"){
        axios.post("/api/getFile",obj,{crossDomain:true})
             .then((res)=>{
            if(res.data){
                setfile(res.data.file);
            }
        })
    }
    const handleClick=()=>{
        axios.post("/api/selectDeveloper",obj,{crossDomain:true})
             .then((res)=>{
            console.log(res);
        });
        setState("Yes");
    }
    const handleSubmit=()=>{
        axios.post("/api/fileandpayment",{
            payment:"Yes",
            ...obj
        },{crossDomain:true})
             .then((res)=>{
            setPayment("Yes");
            if(res.data){
                setfile(res.data.file);
            }
        })

    }
    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title className="h511">{name?name.split("@")[0]:null}</Card.Title>
                    <div className="box0">
                    <p>Bid: ${bid} </p>
                    {state==="No"?<Button className="mlp" onClick={handleClick} variant="outline-primary">Accept</Button>:
                    payment==="No"?
                    <div className="mlp">
                         <Button variant="primary"  onClick={handleShow}>
                            pay
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Pay: {bid} </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                
                            <Form onSubmit={handleSubmit}>
            <h3 className="mb">Payment</h3>
            <label className="mr" >Accepted Cards:</label>
           <img src="/card.jpg" alt="img" />
            <Table className="mt">
                <tbody>
                    <tr>
                        <td>
                        <Form.Label >Name on Card:</Form.Label>
                        </td>
                        <td>
                        <Form.Control type="text" id="cname" name="cardname"   placeholder="John More Doe" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Label >Credit card number:</Form.Label>
                        </td>
                        <td>
                            <Form.Control type="text" id="ccnum" name="cardnumber"  placeholder="1111-2222-3333-4444" />  
                        </td>
                    </tr>
                    <tr>
                            <td>
                                <Form.Label >Exp Date:</Form.Label>
                            </td>
                            <td>
                                <Form.Control type="text" id="expdate" name="expdate"   placeholder="MM/YYYY" />
                            </td>
                    </tr>
                    
                    <tr>
                            <td>
                                <Form.Label >CVV:</Form.Label>
                            </td>
                            <td>
                                <Form.Control type="text" id="cvv" name="cvv"  placeholder="352" />
                            </td>
                    </tr>
                </tbody>
            </Table>
            <hr/>
            <div className=" text-center">
                <Button variant="outline-primary" type="submit">pay: {bid} </Button>
            </div>

        </Form>

                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </div>:file?<a style={{margin:"0 0 0 50%"}} href={file} download>
                                        <Button className="mt-2">Download Project</Button>
                                    </a>: <p className="mlp" >File has not uploaded Yet</p>
                    }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps=state=>({
    selectJobData:state.select.selectJobData
})

export default connect(mapStateToProps)(Applied);