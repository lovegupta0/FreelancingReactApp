import React from 'react';
import {connect} from "react-redux";
import axios from "axios";

import {setUserData} from "../redux/userData/userData_action";
import Navbar from '../component/navbar/navbar';
import Jumbotron from '../component/jumbotron/jumbotron';
import Navs from "../component/developer_component/nav/nav";
import Footer from '../component/footer/footer';
import Spinner from "../component/spinner/spinner";
import {setAppliedData} from "../redux/appliedData/applied_action";
import Logout from "../component/logout/logout";

class Developer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true
        }
        
    }
    componentDidMount(){
        axios.post("/api/appliedData",this.props.currentUser,{crossDomain: true}).then((res)=>{
           this.props.setAppliedData(res.data)
        })

        axios.get("/api/projectData",{crossDomain:true}).then((res)=>{
            this.props.setUserData(res.data);
            this.setState({isLoading:false});
        })
    }

    render(){
        return(
            <div>
                <Navbar>
                    <Logout/>
                </Navbar>
                <Jumbotron>
                    {this.state.isLoading?<Spinner/>:<Navs/>}
                    <Footer/>
                </Jumbotron>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    setUserData:data=>dispatch(setUserData(data)),
    setAppliedData:applied=>dispatch(setAppliedData(applied))
})

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Developer);