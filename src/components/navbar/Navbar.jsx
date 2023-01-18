import React from 'react';
import { Link } from "react-router-dom";
import headerIcon from "../../assets/muse.png";
import Navitem from "./Navitem"

export default function Navbar() {

    const categories = [
        {id:0, name:"Nav1", route:"/"},
        {id:1, name:"Nav2", route:"/"}
    ]


    return (
        <header>
            <Link to={"/"} style={{ textDecoration: "none" }}>
                <div className="headerDiv">
                    <img src={headerIcon} className="headerIcon" alt="logo"/>
                    <h1 className="headerH1">Web Dev Muse</h1>
                </div>
            </Link>
            <Navitem categories={categories}/>
        </header>
    )
}