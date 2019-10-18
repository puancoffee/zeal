import React, {Component} from "react";
import { withRouter} from "react-router-dom";
import withLoading from '../loading/Loading'

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../action/auth";
import classnames from "classnames";
import Logo from './logo.png'

import '../../App.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            email: "",
            password: "",
            errors: {}
        };
    }
    componentDidMount() {
        this.setState({isLoading: true})
        // If logged in and user navigates to Register page, should redirect them to
        // dashboard
        if (this.props.auth.isAuthenticated) {
            this
                .props
                .history
                .push("/");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this
                .props
                .history
                .push("/"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }
    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this
            .props
            .loginUser(userData);
        console.log(userData);
    };
    render() {
        const {errors} = this.state;
        return (
            <div className='App-login'>
                <main>
                    <center>
                        <div
                            style={{
                            padding: '80px'
                        }}>
                            <div className="container">
                                <div
                                    className="z-depth-1  lighten-4"
                                    style={{
                                    display: 'inline-block',
                                    padding: '32px 48px 0px 48px',
                                    border: '1px solid #EEE'
                                }}>
                                    <img
                                        src={Logo}
                                        className="responsive-img"
                                        style={{
                                        width: '150px', margin:20
                                    }} alt='...'/>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                placeholder=' email'
                                                id="email"
                                                size='25'
                                                type="email"
                                                className={classnames("form-control", {
                                                invalid: errors.email || errors.emailnotfound
                                            })}/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                placeholder=' password'
                                                id="password"
                                                size='25'
                                                type="password"
                                                className={classnames("form-control", {
                                                invalid: errors.password || errors.passwordincorrect
                                            })}/>
                                        </div>
                                        <div style={{margin:20}} className="text-center pt-4">
                                            <button type="submit" className="btn btn-outline-dark">Login</button>
                                        </div>
                                        {/* <div className="text-center pt-2">
                                            <a className="btn btn-link text-primary" href="#">Forgot Your Password?</a>
                                        </div> */}
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </center>
                </main>
            </div>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth, errors: state.errors});
export default connect(mapStateToProps, {loginUser})(withRouter(Login));