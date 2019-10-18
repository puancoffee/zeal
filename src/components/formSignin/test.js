import React, {useState} from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
    const [activeTab,
        setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) 
            setActiveTab(tab);
        }
    
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                        active: activeTab === '1'
                    })}
                        onClick={() => {
                        toggle('1');
                    }}>
                        Tab1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                        active: activeTab === '2'
                    })}
                        onClick={() => {
                        toggle('2');
                    }}>
                        Moar Tabs
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <form>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                required
                                autofocus/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                required/>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                className="custom-control-input"
                                id="customCheck1"
                                defaultChecked
                                type="checkbox"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Check me out</label>
                        </div>
                        <div className="text-center pt-4">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className="text-center pt-2">
                            <a className="btn btn-link text-primary" href="#">Forgot Your Password?</a>
                        </div>
                    </form>
                </TabPane>
                <TabPane tabId="2">
                    
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Example;
