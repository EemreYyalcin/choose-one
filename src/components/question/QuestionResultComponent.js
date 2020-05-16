import React, {Component} from 'react';
import {selectRouter} from "../../actions";
import {connect} from "react-redux";

class QuestionResultComponent extends Component {
    render() {
        return (
            <div>
                RESULT
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {loginUser: state.loginUser}
};


export default connect(
    mapStateToProps,
    {selectRouter}
)(QuestionResultComponent);