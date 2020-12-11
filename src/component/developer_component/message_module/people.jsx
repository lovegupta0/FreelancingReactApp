import React from "react";
import Card from 'react-bootstrap/Card';
import { connect } from "react-redux";

import {setChatData} from "../../../redux/chat/chat_action";

const People=({name,setChatData})=>{
    const handleClick=()=>{
        setChatData(name);
    }
    return(
        <div>
                <Card style={{ width: '100%' }}>
                <Card.Body className="p">
                    <Card.Title className="h511 text-center" onClick={handleClick}>{name.split("@")[0]} </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    setChatData:chat=>dispatch(setChatData(chat))
})

export default connect(null,mapDispatchToProps) (People);