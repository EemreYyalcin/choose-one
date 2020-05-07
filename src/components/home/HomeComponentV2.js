import React, {Component} from 'react'
import {Container, Menu, Segment,} from 'semantic-ui-react';
import {signState} from '../../actions'
import {connect} from "react-redux";
import GoogleApi from "../login/GoogleApi";


class HomeComponent extends Component {
    state = {};

    render() {
        const {fixed} = this.state;
        return (
            <Segment
                inverted
                textAlign='center'
                style={{minHeight: 80, padding: '1em 0em'}}
                vertical
            >
                <Menu
                    fixed={fixed ? 'top' : null}
                    inverted={!fixed}
                    pointing={!fixed}
                    secondary={!fixed}
                    size='large'
                >
                    <Container>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <GoogleApi/>
                        </Menu.Item>
                    </Container>
                </Menu>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {loginGoogle: state.loginGoogle}
};

export default connect(
    mapStateToProps,
    {signState}
)(HomeComponent)