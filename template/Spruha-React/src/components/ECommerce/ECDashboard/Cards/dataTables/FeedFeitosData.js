

import React, { useEffect, useState } from 'react';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from '../../../../../api';

export function Basicdatatable({ feitos }) {
    const [data, setData] = useState([])
    const [carr, setCarr] = useState(false)
    let L = []
    useEffect(() => {
        setCarr(false)
        for (let index = 0; index < feitos.length; index++) {
            const iterator = feitos[index];
            let obj = {};

            api.get(`/user/getAll?id=${iterator?.id_direction}`).then(r => {obj.destinatario = r.data.Users.name})
            api.get(`/unit/getAll?id=${iterator?.id_unity}`).then(r => {obj.unidade = r.data.units.initials})
            obj.comentario = iterator.feedback;
            obj.data = formatData(iterator.updated_at);

            L.push(obj)
            if (index < feitos.length - 1) {
                setCarr(true)
            }
        }
        setData(L)

    }, [feitos])
    // console.log(data)
    // console.log(feitos)
    function formatData(d) {
        const dat = new Date(d);
        const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
        // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
        return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
    }
    const columns = [

        {
            name: "Destinatário",
            selector: row => [row.destinatario],
            cell: row =>
                <div>
                    <span className="my-auto">

                        {row.destinatario}
                    </span>
                </div>,
            sortable: false
        },
        {
            name: "Unidade",
            selector: row => [row.unidade],
            sortable: false,
            cell: row =>
                <div>
                    <span className="my-auto">

                        {row.unidade}
                    </span>
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



        <DataTableExtensions {...tableData} filterPlaceholder={"Procurar"}>
            <DataTable
                columns={columns}
                defaultSortAsc={false}
            //actions={actionsMemo}
            // striped={true}
            //pagination

            />
        </DataTableExtensions>


    );
}