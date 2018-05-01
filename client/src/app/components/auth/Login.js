import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment
} from 'semantic-ui-react';
import {login} from '../../actions/authActions';

//TODO: Fix handleChange and handleSubmit
export class Login extends Component {

    state = {
        username: '',
        password: '',
        admin: false,
        submitted: false
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
        console.log('CHANGE: ', value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        const user = {
            username,
            password
        };

        console.log('MY PROPS ', this.props)
        this
            .props
            .requestLogin(user);
    }
    render() {
        return (
            <div >
                {console.log('PROPS', this.props)}
                <Grid
                    textAlign='center'
                    style={{
                    height: '100%'
                }}
                    verticalAlign='middle'>
                    <Grid.Column
                        style={{
                        maxWidth: 450
                    }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Inicia Sesión con tu cuenta
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmitS}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Nombre de usuario'/>
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Contraseña'
                                    type='password'/>

                                <Button color='teal' fluid size='large'>Iniciar Sesión</Button>
                            </Segment>
                        </Form>
                        <Message>
                            No tienes cuenta?
                            <a href='#'>
                                Crear Cuenta</a>
                        </Message>
                        <Message>
                            *Es necesario tener una cuenta con los datos completos de la empresa para poder
                            realizar su pedido.
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
//TODO: Fix connection with store, cause mapped props isnt appearing
const mapStateToProps = (state) => {
    return {hasRequested: state.loginReducer.loginRequest, hasSuccessed: state.loginReducer.loginSuccess, hasErrored: state.loginReducer.loginFailure};
};
const mapDispatchToProps = (dispatch) => {
    return {
        requestLogin: (user) => {
            dispatch(login(user));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
