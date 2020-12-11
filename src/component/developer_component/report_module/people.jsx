import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


const People=({name})=>{
   
    return(
        <div>
                <Card style={{ width: '100%' }}>
                <Card.Body className="p">
                   
                    <div className="box0">
                        <h5>{name.split("@")[0]}</h5>
                   <Button className="mlp" variant="outline-primary">Report</Button>
                   </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default People;