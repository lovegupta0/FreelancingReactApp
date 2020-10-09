import React from 'react';
import {Route} from "react-router-dom";

import Client from "./pages/client";
import Signup from './pages/signup';

function App() {
  return (
    <div >
      <Route exact path="/" component={Signup} />
      <Route exact path="/client" component={Client} />
    </div>
  );
}

export default App;
