import React, { Fragment, useState } from "react";
import { Button, Collapse, Card } from "react-bootstrap";
export function Collapses() {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="primary"
      >
        Toggle Content
      </Button>

      <Collapse in={open} className="collapse mg-t-5" id="collapseExample">
        <div className="collapse mg-t-5" id="collapseExample">
          <Card className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Card>
        </div>
      </Collapse>
    </Fragment>
  );
}

