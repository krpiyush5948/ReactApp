import React, {Component} from 'react'
import GoggleSignOut from './GoggleSignOut'


class Register extends React.Component{
    render(){
        return(
            <div>
               <input type ="text" placeholder="name"/>
                <GoggleSignOut/>
            </div>
        )
    }
}

export default Register;