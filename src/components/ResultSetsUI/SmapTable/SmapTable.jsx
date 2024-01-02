import React from "react"
import DataTable from 'react-data-table-component';

const SmapTable = (props) => {
    // Logic here...
    const {title, data, columns, handleChange} = props

    // Renderize
    return (
        <DataTable
            title={title}
            selectableRows
            onSelectedRowsChange={handleChange}
            data={data}
            columns={columns}
            pagination={true}
        />
    );
}

export default SmapTable;