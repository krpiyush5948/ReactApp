import React from 'react';
import { GoogleLogin } from 'react-google-login';

class GoggleSignIn extends React.Component {
    constructor(props){
        super()
        
    }   
    render() {
        const responseGoogle = (response) => {
            // console.log(Object.keys(response));
            console.log(response);
           this.onSuccessfulLogin(response.profileObj);
        }

        const oresponseFailure = ()=>{
            console.log("unsuccesful login")
        }

        return (
            <div>

                <GoogleLogin
                    clientId="440206651313-apod0sn7jjs16mj4vo79v969hgmnh9c0.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    onFailure={oresponseFailure}
                    cookiePolicy={'single_host_origin'}
                    
                />  
            </div>
        );
    }


    onSuccessfulLogin(data){
        // localStorage.setItem('email',data.email)
        // localStorage.setItem('name',data.name)
        this.props.history.push("/Register")
    }
    
}

export default GoggleSignIn