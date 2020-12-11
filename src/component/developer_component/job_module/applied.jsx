import React from "react";
import Card from 'react-bootstrap/Card';

import "./job.css";


const Applied=({name,bid})=>{
    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title className="h511">{name.split("@")[0]} </Card.Title>
                    <div>
                    <p>Bid: ${bid} </p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Applied;