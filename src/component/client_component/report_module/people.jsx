import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import axios from "axios";


const People=({name})=>{
   const handleClick=()=>{
    axios.post("/api/report",{email:name},{crossDomain: true}).then((res)=>{
        console.log(res.data);
    });
   }
    return(
        <div>
                <Card style={{ width: '100%' }}>
                <Card.Body className="p">
                   
                    <div className="box0">
                        <h5>{name.split("@")[0]}</h5>
                   <Button className="mlp" variant="outline-primary" onClick={handleClick}>Report</Button>
                   </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default People;