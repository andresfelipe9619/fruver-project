import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Checkbox, Button, Icon, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { fetchUsers } from '../../../actions/userActions'
import { Body, Cell, DataTable, Header, HeaderCell, Row } from 'react-semantic-datatable';

class UsersTable extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {

        if (this.props.hasErrored) {
            return <h1>Error</h1>;
        } else if (this.props.isLoading) {
            return (
                <Segment
                    style={{
                        marginTop: "7em",
                        height: "20em"
                    }}
                >
                    <Dimmer inverted active>
                        <Loader size="big">Loading</Loader>
                    </Dimmer>
                </Segment>
            );
        } else {
            const data = {
                "headers": ["NIT", "Nombre", "Correo electronico", "Cuenta de cobro", "Acciones"],
                "data": this.props.users
            };
            return (
                <div>
                    <DataTable pagination color="red">
                        <Header>
                            {
                                data.headers.map((header, index) => {
                                    return (
                                        <HeaderCell sortable key={index}>
                                            {header}
                                        </HeaderCell>
                                    )
                                })
                            }
                        </Header>
                        <Body>
                            {
                                data.data.map((row, index) => {
                                    return (
                                        <Row key={index}>
                                            {
                                                data.headers.map((header, index2) => {
                                                    return (
                                                        <Cell key={index2}>
                                                            {row[header]}
                                                        </Cell>
                                                    )
                                                })
                                            }
                                        </Row>
                                    )
                                })
                            }
                        </Body>
                    </DataTable>
                    {/* <Table.Footer fullWidth>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan='4'>
                                    <Button floated='right' icon labelPosition='left' primary size='small'>
                                        <Icon name='user' />
                                        Add User
                                </Button>
                                    <Button size='small'>Approve</Button>
                                    <Button disabled size='small'>Approve All</Button>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer> */}
                </div>
            );
        }
    }
}
const mapStateToProps = state => {
    return {
        users: state.userReducer.fetchUsersSuccess,
        hasErrored: state.userReducer.fetchUsersFailure,
        isLoading: state.userReducer.fetchUsersRequest,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(fetchUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);