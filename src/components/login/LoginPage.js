import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 950 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Button className="ui google plus button">
                    <i className="google plus icon"/>
                    Sign In Google
                </Button>
            </Header>
            <Message>
                New to us? <a href='#'>Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
);

export default LoginForm