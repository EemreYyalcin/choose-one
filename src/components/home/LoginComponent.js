import React, {PureComponent} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import {signOptions, selectRouter} from "../../actions";
import {connect} from 'react-redux';
import axios from 'axios';
import {SERVER} from "../../helper/PathHelper";

class LoginComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: ""
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleLogin = async () => {
        await axios.post(SERVER + "/login", {"username": this.state.username, "password": this.state.password})
            .then(res => {
                console.log("RESPONSE:", res);
                this.props.signOptions(res.data.data);
                this.props.selectRouter(1);
                localStorage.setItem("LoginToken", res.data.data.token)
                localStorage.setItem("LoginUsername", res.data.data.username)
            })
            .catch(error => {
                console.log("ERROR:", error);
                this.props.selectRouter(3);
            })
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo.png'/> Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.handleLogin}>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                                        id='username' onChange={this.handleUsernameChange}/>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                id='password'
                                onChange={this.handlePasswordChange}
                            />

                            <Button color='teal' fluid size='large' type='submit'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {loginUser: state.loginUser}
};

export default connect(
    mapStateToProps,
    {signOptions, selectRouter}
)(LoginComponent);