
import React, { Components } from 'react'
import GoogleSignIn from './GoggleSignIn'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './Register'
import Header from './Header'


class Myapp extends React.Component {
    render() {
        return (
            <div className="Myapp">
                <Router>
                    <>
                        <Route path="/" exact component={GoogleSignIn}/>
                        <Route path="/signIn" component={GoogleSignIn}/>
                        <Route path="/register" component={Register}/>
                        <Route path ="/header" component={Header}/>
                      
                    </>
                </Router>
                {/* <GoogleSignIn/> */}
            </div>
        )
    }
}

export default Myapp;