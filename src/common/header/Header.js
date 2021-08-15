
import { Button } from "@material-ui/core";
import React from "react";
import "./Header.css";
import Logo from "./Logo.js";




const Header=()=>{

        return(
            <div className="header">
             <Button  variant="contained" className="btn">Login</Button>
                <Logo/>
        
            </div>
        )
    }


export default Header;