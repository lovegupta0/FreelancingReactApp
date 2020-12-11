import React from "react";
import {connect} from "react-redux";
import axios from "axios";

import People from "./people";
import Spinner from "../../spinner/spinner";
import Chat from "./chat";

import "./message.css";
const Message=({currentUser})=>{
    const [isLoading,setisLoading]=React.useState(true);
    const [data,setData]=React.useState(null);

   if(!data){
    axios.post("/api/chatpeople",currentUser,{crossDomain: true}).then((res)=>{
        setData(res.data.connection);
        setisLoading(false);
    });
   }

    
    return(
        <div >
            {isLoading?<Spinner/>:
            <div className="box0">
                <div id="m1">
                {data.map((data)=>(<People name={data.sub_email} key={data._id} /> ))}
                </div>
                <div id="m2">
                    {isLoading?null:<Chat/>}
                </div>
            </div>
            }
        </div>
    )
}

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Message);