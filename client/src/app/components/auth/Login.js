import React, {Component} from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from 'semantic-ui-react'
export class Login extends Component {
    render() {
        return (
            <div >
                <Grid
                    textAlign='center'
                    style={{
                    height: '100%',
                    marginTop: '7em'
                }}
                    verticalAlign='middle'>
                    <Grid.Column
                        style={{
                        maxWidth: 450
                    }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {' '}Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'/>

                                <Button color='teal' fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us?
                            <a href='#'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
