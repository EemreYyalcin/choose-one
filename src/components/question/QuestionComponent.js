import React from 'react';
import '../../css/QuestionBoard.css'
import {connect} from "react-redux";

class QuestionComponent extends React.Component {

    render() {
        return <div className={"questions-boards"}>
            <div></div>
                <img src="https://cdn.shopify.com/s/files/1/1148/8924/products/MPW-115495-a_1024x1024.jpg?v=1571439886"/>
            <div></div>
                <img src="https://cdn.shopify.com/s/files/1/1148/8924/products/MPW-101316-a_1024x1024.jpg?v=1571439882"/>
            <div></div>
        </div>
    }

}

const mapStateToProps = (state) => {
    return {loginGoogle: state.loginGoogle}
};

export default connect(
    mapStateToProps,
    null
)(QuestionComponent);



