import React, { useEffect, useState } from 'react';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from '../../../../../api';

export function Basicdatatable({ values }) {
    let [data, setData] = useState([])
    useEffect(() => {

        let v = values?.sendfeedbacks?.map(item => {

            let valores = {};
           
                valores.nome = values.dadosUser.name;
                api.get(`/user/getAll?id=${item.id_direction}`).then(r => { valores.destinatário = r.data.Users[0]?.name });
                api.get(`/unit/getAll?id=${item.id_unity}`).then(r => { valores.unidade = r.data.units[0]?.initials });
                let dat = new Date(item.updated_at);
                valores.data = `${dat.getDate()}/${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1}/${dat.getFullYear()}`;
                valores.comentario = item.feedback;
               
            return valores

        })
       
        setData(v)
    }, [values])



    const columns = [

        {
            name: "Destinatário",
            selector: row => [row.destinatário],
            cell: row =>
                <div >
                    {row.destinatário}
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

        <DataTableExtensions {...tableData} filterPlaceholder={"Pesquisar"}
        // export={true} fileName={"a"}
        >
            <DataTable
                columns={columns}
                defaultSortAsc={false}
            // striped={true}
            //pagination
            />
        </DataTableExtensions>

    );
}