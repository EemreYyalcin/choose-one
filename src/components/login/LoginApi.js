import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {selectRouter, signOptions} from "../../actions";
import axios from "axios";
import {SERVER} from "../../helper/PathHelper";

class LoginApi extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let item = localStorage.getItem("LoginToken");
        if (item !== null) {
            this.props.signOptions({token: item, username: localStorage.getItem("LoginUsername")});
            this.props.selectRouter(1);
        }
    }

    user = {
        username: "",
        token: ""
    };

    handleIsLogin = async () => {
        await axios.post(SERVER + "/isLogin", null, {
            headers: {
                Authorization: "Bearer" + ' ' + this.props.loginUser.token
            }
        })
            .then(res => {
                console.log("RESPONSE:", res);
            })
            .catch(error => {
                console.log("ERROR RETURNING:", error);
                this.props.signOptions(this.user);
            })
    }

    onSignInClick = () => {
        this.props.signOptions(this.user);
        this.props.selectRouter(3);
    };

    onSignOutClick = () => {
        localStorage.clear();
        this.props.signOptions(this.user);
        this.props.selectRouter(1);
    };

    isLogInUser() {
        if (this.props.loginUser.token === "" || this.props.loginUser.token.length < 5) {
            return false;
        }
        // this.handleIsLogin();
        return true;
    };


    getLogInButton() {
        if (!this.isLogInUser()) {
            return (
                <div className={"right menu"}>
                    <div className="item">
                        <div className="ui primary button">Sign up</div>
                    </div>
                    <div className="item">
                        <div className="ui button" onClick={() => this.onSignInClick()}>Log-in</div>
                    </div>
                </div>
            );
        }
        return (
            <div className={"right menu"}>
                <div className="item">
                    <div className="ui primary button" onClick={() => this.onSignOutClick()}>Log out</div>
                </div>
            </div>
        );
    };


    render() {
        return (
            this.getLogInButton()
        );
    }
}


const mapStateToProps = (state) => {
    return {loginUser: state.loginUser}
};

export default connect(
    mapStateToProps,
    {signOptions, selectRouter}
)(LoginApi);