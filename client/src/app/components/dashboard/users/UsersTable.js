import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Checkbox, Button, Icon, Header, Segment, Dimmer, Loader } from 'semantic-ui-react';
import ReactCollapsingTable from 'react-collapsing-table'
import { fetchUsers } from '../../../actions/userActions';

class UsersTable extends Component {

    componentDidMount() {
        this.props.getUsers();
        console.log('Table mounted');
    }
    componentDidUpdate(prevProps) {
        // if(prevProps.myProps !== this.props.myProp) {

        // }

        console.log('prev', prevProps)
    }



    render() {
        const users = this.props.users;
        // const rows = [
        //     { id: 1, firstName: 'Paul', lastName: 'Darragh', }
        // ]
        const columns = [
            { accessor: 'nit', label: 'nit', priorityLevel: 1, position: 1, minWidth: 150, },
            { accessor: 'nombre', label: 'nombre', priorityLevel: 2, position: 2, minWidth: 150, },
            { accessor: 'email', label: 'email', priorityLevel: 3, position: 3, minWidth: 150, },
            { accessor: 'direccion.cc', label: 'direccion', priorityLevel: 4, position: 4, minWidth: 150}
        ]

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
        } else if (users) {

            return (
                <div>
                    <ReactCollapsingTable rows={users} columns={columns} showSearch showPagination rowSize={5}/>
                </div>
            );
        } else return null;
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