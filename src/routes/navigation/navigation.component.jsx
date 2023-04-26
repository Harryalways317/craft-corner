import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CraftCornerLogo} from "../../assets/crown.svg"
import "./navigation.styles.scss"

const Navigation = () => {
    return (
        <Fragment>
           
           <div className="navigation">
           <Link className="logo-container" to='/'>
           <div><CraftCornerLogo className="logo"/></div>
           </Link>
           <div className="nav-links-container">

            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            <Link className="nav-link" to="/sign-in">
                Sign In
            </Link>
           </div>
           </div>
               <Outlet />
        </Fragment>
     
    );
}

export default Navigation;