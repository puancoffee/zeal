import React from 'react';
import {Navbar} from 'reactstrap';
import {NavLink} from 'react-router-dom'

import Logo from './logo.png'

import SideBar from './navbarSlide'
import "./styles.css";

export default class NavMenu extends React.Component {
    constructor(props) {
        super();
        this.state = {
            width: window.innerWidth
        };
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth})
    }
    render() {
        const {width} = this.state
        const isMobile = width <= 500

        if (isMobile) {
            return (
              <div color='white' style={{height:100}} className='fixed-top' id='App'>
                  <center>
                  <img src={Logo} alt='...' style={{width:30, paddingTop:20,}} />
                  </center>
                  <div>
                <SideBar/>
                  </div>
              </div>
            )
        } else {
            return (
                <div>
                    <Navbar color='white' className='fixed-top' style={{position: ' ', width:'100%',boxShadow:'0 2px 6px 0 rgba(0,0,0,.2)'}} light expand="md">
                        <NavLink className="navbar-brand" to="/">
                            <img src={Logo} width={50} alt="..."/>
                        </NavLink>
                        <ul
                            className="ml-auto navbar-nav"
                            style={{
                            padding: 10
                        }}>
                            <li
                                className="nav-item"
                                style={{
                                padding: 10
                            }}>
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li
                                className="nav-item"
                                style={{
                                padding: 10
                            }}>
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li
                                className="nav-item"
                                style={{
                                    padding: 10,
                                    backgroundColor: 'rgb(31, 43, 82)',
                                    borderRadius:10,
                                    marginRight:10
                                }}>
                                <NavLink style={{color:'white'}} className="nav-link" to="/signin">Signin</NavLink>
                            </li>
                            <li
                                className="nav-item"
                                style={{
                                padding: 10,
                                backgroundColor: 'rgb(31, 43, 82)',
                                borderRadius:10,
                            }}>
                                <NavLink style={{color:'white'}} className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                        </ul>
                    </Navbar>
                </div>
            );

        }

    }
}
