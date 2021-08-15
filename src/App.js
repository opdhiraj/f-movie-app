
import React from "react";
import Details from "./screens/details/Details"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Home from "./screens/home/Home";

const App = () => {
   
    return (  
        <Router>
        <Switch>
            
            {/* <Route path="/details/:id" component={Details}/> */}

            <Route path="/" component={Home} />

        </Switch>

        </Router>


    );
}
 
export default App;