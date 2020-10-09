import React from "react";
import axios from "axios";
import {connect} from "react-redux";

import {setUserData}from "../redux/userData/userData_action";
import Navbar from '../component/navbar/navbar';
import Jumbotron from '../component/jumbotron/jumbotron';
import Navs from '../component/client_component/nav/nav'
import Footer from "../component/footer/footer";
import Spinner from "../component/spinner/spinner";

class Client extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true
        }
        
    }
    
    componentDidMount(){
        axios.post("/api/clientData",this.props.currentUser,{crossDomain: true}).then((res)=>{
            this.props.setUserData(res.data.project);
            this.setState({isLoading:false});
        })
    }

    render(){
        
        return(
            <div>
                <Navbar/> <Jumbotron>
                {this.state.isLoading?<Spinner/>:
                <div>
                    <Navs/>
                </div>
                    
                }
                <Footer/>
                </Jumbotron>
               
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    setUserData:data=>dispatch(setUserData(data))
})

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Client);