import React from "react";
import { NavLink } from "react-router-dom";

const Navitem = ({categories}) => {
    return(
        <nav>
            {categories.map((cat) =>{
                return <NavLink key={cat.id} to={cat.route} style={{textDecoration:"none"}} className="headerBtn">{cat.name}</NavLink>
            }
            )}
        </nav>
    )
};

export default Navitem;