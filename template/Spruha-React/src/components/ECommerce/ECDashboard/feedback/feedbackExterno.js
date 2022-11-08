
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
          feedback: ""


        })


      }
    })
  }, [])
  // // console.log(feedback)
  useEffect(() => {
    api.get(`/typesfeedbacks/get`).then(r => {
      let tipos = r.data.types;
      tipos = tipos.map(type => ({ value: type.id, label: type.type }))
      setValues(a => ({ ...a, types: tipos }))
    });
  }, [])

  return (
    <div className="page main-signin-wrapper">
      <div className="d-flex justify-content-center">
        <Card style={{ width: '50rem', height: '35%' }}>

          <Card.Header>
            <div className='mb-2'>
              <h2 className="main-content-title tx-20 mg-b-5">Envie seu feedback!!</h2>
              <span className="d-flex text-muted tx-13">
                Ajude esse negócio a se desenvolver enviando seu feedback.
              </span>
            </div>
          </Card.Header>

          <Card.Body>
            <FormGroup className="form-group">
              <Form.Label className="tx-medium">Descrição do Feedback</Form.Label>
              <textarea
                onChange={e => setFeedback(a => ({ ...a, feedback: e.target.value }))}
                value={feedback.feedback}
                rows="5"
                className="form-control"
              />
              <Row className="mt-1">
                <Col>
                  <Form.Label className="tx-medium">Nome: </Form.Label>
                  <input
                    type="text"
                    disabled={feedback.anonymous ? true : false}
                    onChange={e => setFeedback(a => ({ ...a, name: e.target.value }))}
                    value={feedback.name || ""}

                    className="form-control"
                  />
                </Col>
                <Col>
                  <Form.Label className="tx-medium">Telefone: </Form.Label>
                  <input
                    type="text"
                    disabled={feedback.anonymous ? true : false}
                    onChange={e => setFeedback(a => ({ ...a, phone: e.target.value }))}
                    value={feedback.phone || ""}

                    className="form-control"
                  />
                </Col>
              </Row>

              <div className="form-check">

                <input id="an" className="form-check-input" type="checkbox" onChange={e => {
                  if (e.target.checked) {
                    setFeedback(a => ({ ...a, anonymous: true }))
                  }
                  else {
                    setFeedback(a => ({ ...a, anonymous: false }))

                  }
                }} />
                <label htmlFor="an" className="d-flex text-muted tx-13 mt-2">
                  Marque anonimo caso nao deseje identificar-se
                </label>
              </div>
            </FormGroup>

            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-20 mg-b-5">Tipo de feedback</h2>
                <span className="d-flex text-muted tx-13">
                  Escolha a categoria que mais se adeque ao seu feedback.
                </span>
              </div>
            </div>

            <Multiselect classNamePrefix="Select2" onChange={e => { setFeedback(a => ({ ...a, id_type: e.value })) }} options={values?.types} singleSelect displayValue="key" placeholder="Categoria" />

          </Card.Body>

          <Card.Footer>
            <div className="float-end mb-2">
              <Button
                type="submit"
                className="mb-0 me-2"
                onClick={async () => {
                  let re = await api.post(`feedback/insert`, { ...feedback });
                  if (re.data.status) {
                    alert("feedbacks enviado!!")
                  }
                }}
              >
                enviar
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default Feedbaks;