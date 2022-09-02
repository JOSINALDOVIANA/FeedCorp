import React, { useState } from 'react';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
export function Basicdatatable() {
    const columns = [
        {
            name: "Nome",
            selector: row => [row.nome],
            sortable: true,
            cell: row =>
                <div>
                    {row.nome}
                </div>
        },
        {
            name: "Data",
            selector: row => [row.data],
            sortable: true,
            cell: row =>
                <div>
                    {row.data}
                </div>
        },
        {
            name: "Comentário",
            selector: row => [row.comentario],
            cell: row =>
                <div className="d-flex my-auto">

                    <span className="my-auto font-weight-semibold">{row.comentario}</span>
                </div>,

            sortable: false,

        },
        // {
        //     name: "STATUS",
        //     selector: row => [row.Status],
        //     sortable: true,
        //     cell: row =>
        //         <div>
        //             <span className={`status bg-${row.Statusinfo}`}></span>
        //             {row.Status}
        //         </div>
        // },

        // {
        //     name: "DELETE",
        //     selector: row => [row.ACTIONS],
        //     sortable: true,
        //     cell: row =>
        //         <div className="button-list text-center" onClick={() => { click(row.ID) }}>
        //             <OverlayTrigger
        //                 placement={row.Placement}
        //                 overlay={<Tooltip>  Delete</Tooltip>}
        //             >
        //                 <i className="ti ti-trash"></i>
        //             </OverlayTrigger>
        //         </div>
        // },
    ];
    let data1 = [
        {
            nome: "Marcus",
            data: "08/11/2020",
            comentario: "Muito bom!",

        },
        {
            nome: "Naldo",
            data: "08/11/2020",
            comentario: "Muito bom!",

        },
        {
            nome: "Rainério",
            data: "08/11/2020",
            comentario: "Muito bom!",

        },
        {
            nome: "Victor Web Flash",
            data: "08/11/2020",
            comentario: "Muito bom!",

        },
       
        // {
        //     ID: "#W83549802",
        //     Invoice: "5",
        //     Name: "Barb Dwyer",
        //     Date: "15/11/2020",
        //     Total: "$4,577",
        //     Warhouse: "Washington Dc",
        //     Status: "Delivered",
        //     Statusinfo: "success",
        // },
       
    ]

    let [data, setData] = useState(data1)

    // var click = (id) => {
    //     let i = data.filter((e, index) => {
    //         return e.ID !== id
    //     })
    //     data1 = i
    //     setData(i)
    // }
    const tableData = {
        columns,
        data,
    };

    return (

        <DataTableExtensions {...tableData} filterPlaceholder={"Pesquisar"}>
            <DataTable
                columns={columns}
                defaultSortAsc={false}
                // striped={true}
                //pagination

            />
        </DataTableExtensions>

    );
}