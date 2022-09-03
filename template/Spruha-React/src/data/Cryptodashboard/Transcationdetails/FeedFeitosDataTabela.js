import React, { useState } from 'react';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
export function Basicdatatable() {
    const columns = [

        {
            name: "Destinatário",
            selector: row => [row.destinatario],
            cell: row =>
                <div>
                    {row.destinatario}
                </div>,
            sortable: false
        },
        {
            name: "Unidade",
            selector: row => [row.unidade],
            sortable: false,
            cell: row =>
                <div>
                    {row.unidade}
                </div>
        },
        {
            name: "Data",
            selector: row => [row.data],
            cell: row =>
                <div className="d-flex my-auto">

                    <span className="my-auto">{row.data}</span>
                </div>,

            sortable: false,

        },
        {
            name: "Comentário",
            selector: row => [row.comentario],
            sortable: false,
            cell: row =>
                <div className='font-weight-bold'>
                    {row.comentario}
                </div>
        },
           
      

    ];
    let data1 = [
        {

            destinatario: "Victor",
            unidade: 'UTIC',
            data: '32/08/2022',
            comentario: 'Muito bom'

        },
       
    ]

    let [data, setData] = useState(data1)

    var click = (id) => {
        let i = data.filter((e, index) => {
            return e.ID !== id
        })
        data1 = i
        setData(i)
    }
    const tableData = {
        columns,
        data,
    };

    return (

        <DataTableExtensions {...tableData} filterPlaceholder={"Pesquisar"} export={true} fileName={"a"}>
            <DataTable
                columns={columns}
                data={data}
                defaultSortAsc={false}
                // striped={true}
                //pagination
            />
        </DataTableExtensions>

    );
}