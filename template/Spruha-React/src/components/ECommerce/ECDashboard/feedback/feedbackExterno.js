import { Label } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormGroup, Row, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Multiselect from "react-select";
import api from '../../../../api';

// import { Container } from './styles';

function Feedbaks() {
  const { company } = useParams();
  const [values, setValues] = useState({});
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    api.get(`unit/getAll?id_company=${company}`).then(r => {
      if (r.data.status) {
        setValues(a => ({ ...a, units: r.data.units, company: r.data.company }));
        setFeedback({
          id_company: company,
          name: null,
          phone: null,
          ext: true,
          id_type: 1,
          anonymous: false,
          feedback:""
          
          
        })


      }
    })
  }, [])
  console.log(feedback)
  useEffect(() => {
    api.get(`/typesfeedbacks/get`).then(r => {
      let tipos = r.data.types;
      tipos = tipos.map(type => ({ value: type.id, label: type.type }))
      setValues(a => ({ ...a, types: tipos }))
    });
  }, [])

  return (
    <Row className="row-sm">
      <Card className="custom-card">

        <Card.Body>

          <FormGroup className="form-group">
            <Form.Label className="tx-medium">Descrição do Feedback</Form.Label>
            <textarea
              onChange={e => setFeedback(a => ({ ...a, feedback: e.target.value }))}
              value={feedback.feedback}
              rows="5"
              className="form-control"
            />
            <Form.Label className="tx-medium">Nome: </Form.Label>
            <input
              type="text"
              disabled={feedback.anonymous?true:false}
              onChange={e => setFeedback(a => ({ ...a, name: e.target.value }))}
              value={feedback.name||""}
              
              className="form-control"
            />
            <Form.Label className="tx-medium">Telefone: </Form.Label>
            <input
              type="text"
              disabled={feedback.anonymous?true:false}
              onChange={e => setFeedback(a => ({ ...a, phone: e.target.value }))}
              value={feedback.phone||""}
              
              className="form-control"
            />
            <div className="me-2 d-flex align-items-center">

            <label htmlFor="an" className="ms-2 me-auto">Marque anonimo caso nao deseje identificar-se</label>
            <input id="an" className="form-check-input"  type="checkbox" onChange={e=>{
              if (e.target.checked) {
                setFeedback(a=>({...a,anonymous: true}))
              }
              else {
                setFeedback(a=>({...a,anonymous: false}))

              }
            }} />
            </div>
          </FormGroup>

          <div className="page-header">
            <div>
              <h2 className="main-content-title tx-20 mg-b-5">Tipo de feedback</h2>
              <span className="d-flex text-muted tx-13">
                Escolha a categoria que mais se adequa ao seu feedback.
              </span>
            </div>
          </div>


          {/* <select class="form-select" aria-label="Default select example">
            <option selected>Selecione</option>
            <option value="1">Sugestão</option>
            <option value="2">Elogio</option>
            <option value="3">Crítica</option>
          </select> */}
          <Multiselect classNamePrefix="Select2" onChange={e => { setFeedback(a => ({ ...a, id_type: e.value })) }} options={values?.types} singleSelect displayValue="key" placeholder="Categoria" />

        </Card.Body>
        <Card.Footer>
          <div className="float-end mb-2">
            <Button
              type="submit"
              className="mb-0 me-2"
              onClick={async()=>{
               let re= await api.post(`feedback/insert`,{...feedback});
               if(re.data.status){
                alert("feedbacks enviado!!")
               }
              }}
            >
              enviar
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Row>
  );
}

export default Feedbaks;