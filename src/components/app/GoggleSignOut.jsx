import React from 'react'
import { withRouter } from "react-router"
import { GoogleLogout } from 'react-google-login';




class GoggleSignOut extends React.Component {
    constructor(props) {
        super()


    }
    onLogoutSuccess = () => {
        const { history } = this.props;
        if (history) history.push('/signIn');
    }

    render() {
        const logout = (res) => {

            this.onLogoutSuccess();
        }

        return (

            <div>

                <GoogleLogout
                    clientId="440206651313-apod0sn7jjs16mj4vo79v969hgmnh9c0.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout} 
                    className=" logout"
                >
                </GoogleLogout>
            </div>
        )
    }

}

export default withRouter(GoggleSignOut); 