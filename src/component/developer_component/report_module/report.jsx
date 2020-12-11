import React from "react";
import {connect} from "react-redux";
import axios from "axios";

import People from "./people";
import Spinner from "../../spinner/spinner";



const Report=({currentUser})=>{
    const [isLoading,setisLoading]=React.useState(true);
    const [data,setData]=React.useState(null);

   if(!data){
    axios.post("/api/chatpeople",currentUser,{crossDomain: true}).then((res)=>{
        setData(res.data.connection);
        setisLoading(false);
    });
   }

    
    return(
        <div style={{marginTop:"0.5rem"}}>
            {isLoading?<Spinner/>:
            <div style={{minHeight:"45rem"}}>
                
                {data.map((data)=>(<People name={data.sub_email} key={data._id} /> ))}
      
            </div>
            }
        </div>
    )
}

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Report);