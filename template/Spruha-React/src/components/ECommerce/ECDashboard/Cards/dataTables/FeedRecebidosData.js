import React, { useEffect, useState } from 'react';

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import api from '../../../../../api.js';



export function Basicdatatable({ values }) {

    const [data, setData] = useState([])

    useEffect(() => {
        let v = [];

        for (const item of values) {
            let valores = {};

            if (item.anonymous == 1) {
                valores.nome = "Anônimo";
                api.get(`/typesfeedbacks/get?id=${item.id_type}`).then(r => { valores.tipo = r.data.type[0]?.type })

                valores.data = formatData(item.updated_at);
                valores.comentario = item.feedback
            } else {
                if (!!item.name) {
                    valores.nome = item.name;
                } else {

                    !!item.id_user ?
                        api.get(`/user/getAll?id=${item.id_user}`).then(r => { valores.nome = r.data.Users[0]?.name }) : valores.nome = "Anônimo";
                }
                api.get(`/typesfeedbacks/get?id=${item.id_type}`).then(r => { valores.tipo = r.data.type[0]?.type })


                valores.data = formatData(item.updated_at);
                valores.comentario = item.feedback
            }
            v.push(valores)
        }


        setData(v)
        return (() => null)
    }, [values])
    function formatData(data) {
        const dat = new Date(data);
        const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
        // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
        return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
    }
    //  // console.log(v1)

    // function downloadCSV(array) {
    //     const link = document.createElement('a');
    //     let csv = convertArrayOfObjectsToCSV(array);
    //     if (csv == null) return;

    //     const filename = 'export.csv';

    //     if (!csv.match(/^data:text\/csv/i)) {
    //         csv = `data:text/csv;charset=utf-8,${csv}`;
    //     }

    //     link.setAttribute('href', encodeURI(csv));
    //     link.setAttribute('download', filename);
    //     link.click();
    // }

    // function convertArrayOfObjectsToCSV(array) {
    //     let result;

    //     const columnDelimiter = ',';
    //     const lineDelimiter = '\n';
    //     const keys = Object.keys(data[0]);

    //     result = '';
    //     result += keys.join(columnDelimiter);
    //     result += lineDelimiter;

    //     array.forEach(item => {
    //         let ctr = 0;
    //         keys.forEach(key => {
    //             if (ctr > 0) result += columnDelimiter;

    //             result += item[key];

    //             ctr++;
    //         });
    //         result += lineDelimiter;
    //     });

    //     return result;
    // }
    //const Export = ({ onExport }) => <Button onClick={e => onExport(e.target.value)}>Exportar</Button>;

    let columns = [
        {
            name: "Nome",
            selector: row => [row.nome],
            sortable: true,
            
            cell: row =>
                <div style={{cursor:'pointer'}} onClick={() => {alert(row.nome)}}>
                    {row.nome}
                </div>
        },
        {
            name: "data dos comentários",
            selector: row => [row.data],
            sortable: false,
            cell: row =>
                <div>
                    {row.data}
                </div>
        },
        {
            name: "comentários",
            selector: row => [row.comentario],
            cell: row =>
                <div className="d-flex my-auto">

                    <span className="my-auto font-weight-semibold">{row.comentario}</span>
                </div>,

            sortable: false,

        },
        // {
        //     name: "tipo do feedback",
        //     selector: row => [row.tipo],
        //     sortable: false,
        //     cell: row =>
        //         <div>
        //             {row.tipo}
        //         </div>
        // },

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
    //     let data1 = datafiltro();
    //    // console.log(datafiltro())

    // var click = (id) => {
    //     let i = data.filter((e, index) => {
    //         return e.ID !== id
    //     })
    //     data1 = i
    //     setData(i)
    // }

    let tableData = {
        columns,
        data,
    };

    //const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

    return (
        // <hi>em teste</hi>

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
