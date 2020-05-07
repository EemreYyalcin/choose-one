import React from "react";
import {connect} from 'react-redux';
import {signState} from '../../actions'
import {Button} from "semantic-ui-react";

class GoogleApi extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '107196056797-aceeuebaa02blos47cr1c4q63dj6t2ms.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // this.onAuthChange(this.auth);
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthObject(this.auth);
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignIn) => {
        console.log("onAuthChange:", isSignIn);
        this.onAuthObject(this.props.loginGoogle.auth);
    };

    onAuthObject = (auth) => {
        this.props.signState(auth);
    };

    onSignInClick = () => {
        // this.auth.signIn();
        this.props.loginGoogle.auth.signIn();
        this.props.signState(this.props.loginGoogle.auth);
    };

    onSignOutClick = () => {
        if (this.isLogOutUser()){
            return;
        }
        console.log("onSignOutClick:", this.props.loginGoogle);
        this.props.loginGoogle.auth.signOut();
        // this.setState({auth: null});
        this.props.signState(this.props.loginGoogle.auth);
    };


    isLogOutUser(){
        console.log("isLogoutUserObject:", this.props.loginGoogle);
        return (this.props.loginGoogle === null || this.props.loginGoogle.auth === undefined || this.props.loginGoogle.auth === null ||
            this.props.loginGoogle.auth.isSignedIn === undefined || this.props.loginGoogle.auth.isSignedIn.ie === false);
    };

    getLogInButton = () => {
        console.log("isLogoutUser:", this.isLogOutUser(), this.props.loginGoogle);
        if (this.isLogOutUser()) {
            return (
                <Button as='a' inverted={!this.state.fixed} onClick={() => this.onSignInClick()}>
                    Log in
                </Button>
            );
        }
        return (
            <Button as='a' inverted={!this.state.fixed} primary={this.state.fixed} style={{marginLeft: '0.5em'}}
                    onClick={() => this.onSignOutClick()}>
                Log Out
            </Button>
        );
    };


    render() {
        return (
            this.getLogInButton()
        );
    }
}

const mapStateToProps = (state) => {
    return {loginGoogle: state.loginGoogle}
};

export default connect(
    mapStateToProps,
    {signState}
)(GoogleApi);