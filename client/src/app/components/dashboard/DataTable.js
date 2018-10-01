import React, { Component } from 'react'
import ReactCollapsingTable from 'react-collapsing-table'
import {  Segment } from "semantic-ui-react";


class DataTable extends Component {
    render() {
        let { data, component, callbacks, cantidad } = this.props;
        let columns = [];
        let accessors = [];

        for (let element of data) {
            if(element.nombre){
                element.nombre = element.nombre.toUpperCase()
            }
            const temp = Object.keys(element);
            for (let j = 0, jj = temp.length; j < jj; j++) {
                if (accessors.indexOf(temp[j]) < 0) {
                    if (temp[j] === '_id') {
                        continue
                    } else {
                        console.log('EMP', temp[j])
                        accessors.push(temp[j])
                        columns.push({
                            accessor: temp[j],
                            label: temp[j],
                            priorityLevel: j + 1,
                            position: j + 1,
                            minWidth: 50,
                            key: j
                        })
                    }
                }
            }
        }
        console.log(cantidad)
        if (cantidad) {
            let last = accessors.length;
            columns.push({ accessor: 'cantidad', label: 'cantidad', priorityLevel: last, position: last, minWidth: 50, CustomComponent: cantidad })

        }
        if (component) {
            let last = accessors.length
            columns.push({ accessor: 'acciones', label: 'acciones', priorityLevel: last, position: last, minWidth: 50, CustomComponent: component })
        }
        console.log('cols', columns)

        if (callbacks) {
            return (
                <div>
                    <Segment>
                    <ReactCollapsingTable rows={data} columns={columns} callbacks={callbacks} showSearch showPagination rowSize={10} />
                    </Segment>
                </div>
            )
        } else {
            return (
                <div>
                    <Segment>
                    <ReactCollapsingTable rows={data} columns={columns} showSearch showPagination rowSize={10} />
                    </Segment>
                </div>
            )
        }
    }
}

export default DataTable;
