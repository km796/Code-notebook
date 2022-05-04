import React from "react";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '478186050593-j2d21d2n69ngi6vp3smijodkcbrc9rmp.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;