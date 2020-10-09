import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './jumbotron.css'

function Jumbotro(props){
    return(
        <div className="container">
            <Jumbotron>
                {props.children}
            </Jumbotron>

        </div>
    );
}

export default Jumbotro;