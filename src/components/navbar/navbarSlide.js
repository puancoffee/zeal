import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {slide as Menu} from "react-burger-menu";

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Menu style={{
                    backgroundColor: 'white'
                }}>
                    <NavLink className="menu-item" to="/">
                        Home
                    </NavLink>

                    <NavLink className="menu-item" to="/about">
                        About Us
                    </NavLink>

                    <NavLink className="menu-item" to="/signin">
                        Signin
                    </NavLink>
                    <NavLink className="menu-item" to="/signup">
                        Signup
                    </NavLink>
                </Menu>
            </div>
        )
    }
}
