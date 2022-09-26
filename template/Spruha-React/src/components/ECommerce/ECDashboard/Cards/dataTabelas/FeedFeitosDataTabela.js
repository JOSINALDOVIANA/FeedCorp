import React, { useEffect, useState } from 'react';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import api from '../../../../../api';

export function Basicdatatable({ values }) {
    const [data, setData] = useState([])
   
    useEffect(() => {
        
    
      
        let L=[]
              for (const iterator of values) {
                
                  let obj={};
                  api.get(`/user/getAll?id=${iterator?.id_direction}`).then( r=>{
                    let f=r.data.Users[0]?.name;
                    obj.destinatário=f;
                    // console.log(f)
                });
                  api.get(`/unit/getAll?id=${iterator?.id_unity}`).then(s=>{
                    let f=s.data.units[0]?.initials;
                    obj.unidade=f;
                    // console.log(f)
                });
                //   obj.name=values.dadosUser.name;
                  obj.comentario=iterator.feedback;
                  obj.data=formatData(iterator.updated_at);
  
                  L.push(obj)
              }
          
      
      function formatData(data){
        const dat=new Date(data);
        const meses=["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]
         // return `${dat.getDate()} / ${dat.getMonth() < 10 ? "0" + (dat.getMonth() + 1) : dat.getMonth() + 1} / ${dat.getFullYear()}`
         return `${dat.getDate()} de ${meses[dat.getMonth()]} de ${dat.getFullYear()}`
       }
    //    console.log(L)
       setData(L)

    return(()=>null)
    
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
    let tableData = {
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