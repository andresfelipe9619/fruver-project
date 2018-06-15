import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Checkbox, Button, Icon, Header, Segment, Dimmer, Loader } from 'semantic-ui-react';
import ReactCollapsingTable from 'react-collapsing-table'
import { fetchUsers } from '../../../actions/userActions';
import DataTable from './../DataTable';

class UsersTable extends Component {

    componentDidMount() {
        this.props.getUsers();
        console.log('Table mounted');
    }
    componentDidUpdate(prevProps) {
        console.log('prev', prevProps)
    }



    render() {
        const users = this.props.users;
        // const rows = [
        //     { id: 1, firstName: 'Paul', lastName: 'Darragh', }
        // ]


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
                    <DataTable data={users}></DataTable>
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