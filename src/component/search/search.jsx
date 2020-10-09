import React from "react";
import {Form} from "react-bootstrap";

const Search=({handleChange})=>{
    return(
            <Form.Control type="text" placeholder="Search" className="width mr" onChange={handleChange} />
        
    )
}

export default Search;