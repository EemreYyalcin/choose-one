import React from 'react';
import {signState} from '../actions'
import {connect} from "react-redux";
import LoginForm from "./login/LoginPage";

class MainPage extends React.Component {

    render() {

        if (this.props.loginGoogle === undefined || this.props.loginGoogle === null) {
            return (
                <LoginForm/>
            );
        }
        return <div>CONTENT</div>
    }

}

const mapStateToProps = (state) => {
    return {loginGoogle: state.loginGoogle}
};

export default connect(
    mapStateToProps,
    {signState}
)(MainPage);



