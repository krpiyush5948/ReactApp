    
import React from 'react'
import GoogleSignIn from './GoggleSignIn'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './Register'
import Header from './Header'
import LeftHeader from './LeftHeader.jsx'
import ShowCompany from './ShowCompany'




class Myapp extends React.Component {
    render() {
        return (
            <div className="Myapp">
                <Router>
                <Header/>
                    <>
                        <Route path="/" exact component={GoogleSignIn}/>
                        <Route path="/signIn" component={GoogleSignIn}/>
                        <Route path="/register" component={Register}/>
                        <Route path ="/header" component={Header}/>
                        <Route path ="/showCompnay" component={ShowCompany}/>
                      
                    </>
                 
                </Router>
            
            </div>
        )
    }
}

export default Myapp;