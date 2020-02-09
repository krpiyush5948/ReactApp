import React  from 'react'
import myApp from "./myApp.css";
import GoggleSignOut from './GoggleSignOut'


class Header extends React.Component{
    render(){
        return(
            <div  className = "header">
                <div className="container">
              <div>
                   <GoggleSignOut/>
              </div>
              </div>
            </div>
        )
    }
}

export default Header;