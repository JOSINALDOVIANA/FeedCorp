import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormGroup, Row, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import api from '../../../../api';

// import { Container } from './styles';

function Feedbaks() {
  const { company } = useParams();
  const [values, setValues] = useState({});

  useEffect(() => {
    api.get(`unit/getAll?id_company=${company}`).then(r => {
      if (r.data.status) {
        setValues(a => ({ ...a, units: r.data.units, company: r.data.company }))
      }
    })
  }, [])
  // // console.log(values)

  return (
    <Row className="row-sm">
      <Card className="custom-card">

        <Card.Body>

          <FormGroup className="form-group">
            <Form.Label className="tx-medium">Descrição do Feedback</Form.Label>
            <textarea
            maxLength={255}
              // onChange={} 
              // value={}
              rows="5"
              className="form-control"
            />
          </FormGroup>

          <div className="page-header">
            <div>
              <h2 className="main-content-title tx-20 mg-b-5">Tipo de feedback</h2>
              <span className="d-flex text-muted tx-13">
                Escolha a categoria que mais se adequa ao seu feedback.
              </span>
            </div>
          </div>

          <select class="form-select" aria-label="Default select example">
            <option selected>Selecione</option>
            <option value="1">Sugestão</option>
            <option value="2">Elogio</option>
            <option value="3">Crítica</option>
          </select>

        </Card.Body>
        <Card.Footer>
          <div className="float-end mb-2">
            <Button
              type="submit"
              className="mb-0 me-2"
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