import React from "react";
import {connect} from "react-redux";
import {setSelectJobData} from "../../redux/client_job/clientJob_action";

import "./job_bar.css";

const JobBar=({name,_id,setSelectJobData})=>{
    const handleclick=()=>{
        setSelectJobData(_id)
    }
    return(
        <div className="ml-3">
                <input type="button" className="in1" value={name} onClick={handleclick} />
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    setSelectJobData:select=>dispatch(setSelectJobData(select))
})

export default connect(null,mapDispatchToProps)(JobBar);