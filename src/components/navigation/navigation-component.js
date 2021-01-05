import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super()
    }

    adminLinks() {
        
    }

    render() {
        return (
            <div className="nav-wrapper">
                
                <div className="left-side">

                    <NavLink exact to ="/" activeClassName='nav-link-active'>Home</NavLink>

                    <NavLink exact to ="/about-me" activeClassName='nav-link-active'>About</NavLink>

                    <NavLink exact to ="/contact" activeClassName='nav-link-active'>Contact</NavLink>

                    <NavLink exact to ="/blog" activeClassName='nav-link-active'>Blog</NavLink>

                    {false ? <button>Add Blog</button> : null }

                </div>

                <div className="right-side">
                    MATTHEW RICKLEFS
                </div>

            </div>
        )
    }
}