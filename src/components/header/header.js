import React from 'react'
import Background from './header-bg.jpg'
import Typed from 'react-typed';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <div className="container">
                    <div style={textStyle}>
                        <center>
                            <Typed
                                style={{
                                size: 34,
                                fontSize: '34px',
                                fontFamily: 'Barlow Semi Condensed'
                            }}
                                strings={['End-to-end solution for talent management']}
                                typeSpeed={40}
                                backSpeed={50}/>
                        </center>
                        <br/>
                        <Typed
                            style={{
                            size: 24,
                            fontSize: '24px',
                            fontFamily: 'Barlow Semi Condensed'
                        }}
                            strings={['^1500', 'We provide development', 'We provide supply', 'We provide management']}
                            typeSpeed={50}
                            backSpeed={80}
                            backDelay={150}
                            loop></Typed>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
const headerStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'block'
}
const textStyle = {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 400
}