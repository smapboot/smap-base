import React, {useCallback, useEffect, useMemo, useState} from 'react';
import SmapTable from "../../components/ResultSetsUI/SmapTable/SmapTable";
import Productes from "../../mocks/productes.json"

const BancDeProves = () => {

    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        console.log('state', selectedRows);
    }, [selectedRows]);

    const handleButtonClick = () => {
        console.log('clicked');
    };

    const handleChange = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const columns = useMemo(
        () => [
            {

                cell: () => <button onClick={handleButtonClick}>Action</button>,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
            },
            {
                name: 'Title',
                selector: row => row.title,
                sortable: true,
            },
            {
                name: 'Description',
                selector: row => row.description,
                sortable: true,
            },
            {
                name: 'Price',
                selector: row => row.price,
                sortable: true,
            },
            {
                name: 'Brand',
                selector: row => row.brand,
                sortable: true,
            },
            {
                name: 'Category',
                selector: row => row.category,
                sortable: true,
            },
        ],
        [],
    );

    return (
        <SmapTable
            title={"Productes"}
            columns={columns}
            data={Productes}
            handleChange={handleChange}
        />
    )
}

export default BancDeProves;