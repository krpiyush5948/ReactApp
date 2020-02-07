import React, { Components } from 'react'
import { GoogleLogout } from 'react-google-login';

class GoggleSignOut extends React.Component {
    
    render() {
        const logout = (res)=>{
            console.log(res)
            console.log("logout successfully")
        }
        
        return (
            
            <div>
                <h3> sign out</h3>
                <GoogleLogout
                    clientId="440206651313-apod0sn7jjs16mj4vo79v969hgmnh9c0.apps.googleusercontent.com"
                    buttonText="Logout"
                     onLogoutSuccess={logout}
                >
                </GoogleLogout>
            </div>
        )
    }
}

export default GoggleSignOut;