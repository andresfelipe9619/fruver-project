import React, { Component } from 'react'
import ReactCollapsingTable from 'react-collapsing-table'


class DataTable extends Component {
    render() {
        let { data, component, callbacks } = this.props;
        let columns = [];
        let accessors = [];

        for (let element of data) {
            const temp = Object.keys(element);
            for (let j = 0, jj = temp.length; j < jj; j++) {
                if (accessors.indexOf(temp[j]) < 0) {
                    let idWidth = temp[j].indexOf('_id')<0?150:20;
                    console.log('EMP', temp[j])
                    accessors.push(temp[j])
                    columns.push({
                        accessor: temp[j],
                        label: temp[j],
                        priorityLevel: j + 1,
                        position: j + 1,
                        minWidth: idWidth,
                        key: j
                    })
                }
            }
        }
        if (component) {
            let last = accessors.length
            columns.push({ accessor: 'acciones', label: 'acciones', priorityLevel: last, position: last, minWidth: 50, CustomComponent: component })
        }
        console.log('cols', columns)

        if (callbacks) {
            return (
                <div>
                    <ReactCollapsingTable rows={data} columns={columns} callbacks={callbacks} showSearch showPagination rowSize={10} />
                </div>
            )
        } else {
            return (
                <div>
                    <ReactCollapsingTable rows={data} columns={columns} showSearch showPagination rowSize={10} />
                </div>
            )
        }
    }
}

export default DataTable;
