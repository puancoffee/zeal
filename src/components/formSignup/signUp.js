import React, {Component} from "react";
import { withRouter} from "react-router-dom";

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../../action/auth";
import classnames from "classnames";

import Logo from '../formSignin/logo.png'
import '../../App.css'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    componentDidMount() {
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
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            password2: this.state.password2
        };
        this
            .props
            .registerUser(newUser, this.props.history);
        console.log(newUser);
    };
    render() {
        const {errors} = this.state;
        return (
            <div className='App-login'>
                <main>
                    <center>
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
                                    width: '150px',
                                    margin: 20
                                }}
                                    alt='...'/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input
                                            className='form-control'
                                            onChange={this.onChange}
                                            value={this.state.name}
                                            error={errors.name}
                                            placeholder=' fullname'
                                            id="name"
                                            size='25'
                                            type="name"/>
                                    </div>
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
                                            value={this.state.phone}
                                            error={errors.phone}
                                            placeholder=' phone'
                                            id="phone"
                                            size='25'
                                            type="number"
                                            className={classnames("form-control", {
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
                                    <div className="form-group">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password2}
                                            error={errors.password2}
                                            placeholder=' password'
                                            id="password2"
                                            size='25'
                                            type="password"
                                            className={classnames("form-control", {
                                            invalid: errors.password2 || errors.passwordincorrect
                                        })}/>
                                    </div>
                                    <div
                                        style={{
                                        margin: 20
                                    }}
                                        className="text-center pt-4">
                                        <button type="submit" className="btn btn-outline-dark">Signup</button>
                                    </div>
                                    {/* <div className="text-center pt-2">
                                            <a className="btn btn-link text-primary" href="#">Forgot Your Password?</a>
                                        </div> */}
                                </form>
                            </div>
                        </div>
                    </center>
                </main>
            </div>
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth, errors: state.errors});
export default connect(mapStateToProps, {registerUser})(withRouter(Register));