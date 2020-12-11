import React from "react";
import {useHistory} from "react-router-dom";

import './Main.css'


export default function Main(){
    let history=useHistory();
    
    const clientSignup=()=>{
        history.push("/clientSignup");
    }
    const developerSignup=()=>{
        history.push("/developerSignup");
    }

    return(
        <div className="background">
        <div className="main">
   
      <div className="main__content">
        <div className="main__desc">
          <p className="para">Hire the best<br /> freelancers for any job,<br/> online. </p>
          <p className="para1">People should use Freelances to turn their ideas into reality.</p>
       </div>
       <div className="main__action">
           <button className='submit' onClick={clientSignup}> Hire a Freelancer</button>
           <button className='submit1' onClick={developerSignup}> Earn Money Freelancing</button>
       </div>
   </div>
</div>
</div>

    )
}