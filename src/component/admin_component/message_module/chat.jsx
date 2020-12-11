import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./message.css"

const Chat=({chatData,currentUser})=>{
    const [message,setMessage]=React.useState({
        message:"",
        sender:currentUser.username,
        reciever:chatData
    })
    var obj={
        sub:chatData,
        ...currentUser
    }
    React.useEffect(()=>{
        if(chatData){
            axios.post("/api/getchat",obj,{crossDomain: true}).then((res)=>{
                console.log(res.data);
            });
        }
    },[chatData]);
    
       
    
    const handleMessage=(event)=>{
        var {name,value}=event.target;
        setMessage(prevValue=>{
            return{
            ...prevValue,
            [name]:value
            }
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        message.reciever=chatData;
        axios.post("/api/sendmessage",message,{crossDomain: true}).then((res)=>{
          
        });

    }

    return(
        <div>
            {chatData?
            <div className="foot" >
                <Form style={{display:"flex"}} onSubmit={handleSubmit} >
                <Form.Group controlId="message">
                  <Form.Control name="message" className="in" onChange={handleMessage} type="text"  required/>
              </Form.Group>
              <Button variant="outline-primary" type="submit">send</Button>
                </Form>
            </div>:null}
        </div>
    )
}

const mapStateToProps=state=>({
    chatData:state.chat.chatData,
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps) (Chat);