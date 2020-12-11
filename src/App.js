import React from 'react';
import {Route} from "react-router-dom";

import Index from "./pages/index";
import Client from "./pages/client";
import ClientSignup from "./component/client_component/signup/signup";
import DeveloperSignup from "./component/developer_component/signup/signup";
import Developer from "./pages/developer";
import Admin from "./pages/admin";


function App() {
  return (
    <div >
      <Route exact path="/" component={Index} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/clientSignup" component={ClientSignup} />
      <Route exact path="/developerSignup" component={DeveloperSignup} />
      <Route exact path="/developer" component={Developer} />
      <Route exact path="/admin" component={Admin} />
    </div>
  );
}

export default App;
