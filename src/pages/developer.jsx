import React from 'react';
import Navbar from '../component/navbar/navbar';
import Jumbotron from '../component/jumbotron/jumbotron';
import Navs from "../component/developer_component/nav/nav";
import Footer from '../component/footer/footer';


class Developer extends React.Component{
    

    render(){
        return(
            <div>
                <Navbar/>
                <Jumbotron>
                    <Navs/>
                    <Footer/>
                </Jumbotron>
            </div>
        )
    }
}

export default Developer;