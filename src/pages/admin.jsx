import React from "react";
import axios from "axios";

import Navbar from '../component/navbar/navbar';
import Jumbotron from '../component/jumbotron/jumbotron';
import Footer from "../component/footer/footer";
import Navs from "../component/admin_component/nav/nav";
import Logout from "../component/logout/logout";

const Admin=()=>{
    return(
        <div>
             <Navbar>
                    <Logout/>
                </Navbar>
                <Jumbotron>
                    <Navs/>
                    <Footer/>
                </Jumbotron>
        </div>
    )
}

export default Admin;