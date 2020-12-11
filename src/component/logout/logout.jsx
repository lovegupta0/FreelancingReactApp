import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";

import {setCurrentUser} from "../../redux/user/user_action";

function Logout({setCurrentUser}){
    let history=useHistory();
    function handleClick(){
      history.push("/");
        setCurrentUser(null);
    }

    return(
        <Button variant="outline-primary" onClick={handleClick}>Logout</Button>
    )

}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(Logout);