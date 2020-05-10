import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {selectRouter} from "../../actions";
import QuestionComponent from "../question/QuestionComponent";
import LoginComponent from "./LoginComponent";
import LoginApi from "../login/LoginApi";

class HomeComponentV3 extends PureComponent {

    constructor(props) {
        super(props);
    }

    selectColumn(index) {
        if (index === this.props.selectRoute) {
            return "item active"
        }
        return "item";
    }

    selectComponent() {
        if (this.props.selectRoute === 1) {
            return (<div>
                HOMEPAGE
            </div>);
        }
        if (this.props.selectRoute === 2) {
            return (<div>
                <QuestionComponent/>
            </div>);
        }

        if (this.props.selectRoute === 3) {
            return (<div>
                <LoginComponent/>
            </div>);
        }
    }

    selectMenuClick = (index) => {
        this.props.selectRouter(index);
    }

    handleColumnDynamic(){
        if (this.props.selectRoute === 3){
            return (
                <a className={this.selectColumn(3)} onClick={() => this.selectMenuClick(3)}>
                    Login
                </a>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <a className={this.selectColumn(1)} onClick={() => this.selectMenuClick(1)}>
                        Home
                    </a>
                    <a className={this.selectColumn(2)} onClick={() => this.selectMenuClick(2)}>
                        Questions
                    </a>
                    {this.handleColumnDynamic()}
                    <LoginApi/>
                </div>
                <div className="ui segment">
                    {this.selectComponent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {selectRoute: state.selectRoute}
};

export default connect(
    mapStateToProps,
    {selectRouter}
)(HomeComponentV3);