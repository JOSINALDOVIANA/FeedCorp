import React, { Fragment, useState } from "react";
import { Alert, Button } from "react-bootstrap";
export function AlertSuccess() {
  const [show, setShow] = useState(true);
  // Alert-info
  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Oh snap!</strong> Change a few things up and try submitting
        again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertinfo() {
  const [show, setShow] = useState(true);
  // Alert-info
  if (show) {
    return (
      <Alert variant="info">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Heads up!</strong> This alert needs your attention, but it's not
        super important.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function AlertWarning() {
  const [show, setShow] = useState(true);
  // Alert-info
  if (show) {
    return (
      <Alert variant="warning">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Warning!</strong> Better check yourself, you're not looking too
        good.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertdanger() {
  const [show, setShow] = useState(true);
  // Alert-info
  if (show) {
    return (
      <Alert variant="danger">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Oh snap!</strong> Change a few things up and try submitting
        again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
// Alertouterline
export function Alertsuccessouterline() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant=" alert-outline-success">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Oh snap!</strong> Change a few things up and try submitting
        again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertinfoouterline() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant=" alert-outline-info">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Heads up!</strong> This alert needs your attention, but it's not
        super important.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertwarninguterline() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant=" alert-outline-warning">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Warning!</strong> Better check yourself, you're not looking too
        good.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertdangeruterline() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant=" alert-outline-danger">
        {" "}
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <strong>Oh snap!</strong> Change a few things up and try submitting
        again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
// SOLIDCOLOREDALERTS
export function AlertSuccesssolid() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="success alert-solid-success">
        <strong>Oh snap!</strong> Change a few things up and try submitting
        again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertinfosolid() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="info alert-solid-info">
        <strong>Heads up!</strong> This alert needs your attention, but it's not
        super important.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertwarningsolid() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="warning alert-solid-warning">
        <strong>Warning!</strong> Better check yourself, you're not looking too
        good.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
export function Alertdangerutersolid() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="danger alert-solid-danger">
        <strong>Oh snap!</strong> Change a few things up and try submitting
        again.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}> </p>;
}
// ALERT WITH ICON
export function Alerticons() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="default">
        {" "}
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
          <i className="fe fe-download me-2"></i>
        </span>
        <span className="alert-inner--text">
          <strong>Default!</strong> This is a default alert—check it out!
        </span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
export function Primaryicons() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary">
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
          <i className="fe fe-check-square me-2"></i>
        </span>
        <span className="alert-inner--text">
          <strong>Primary!</strong> This is a primary alert—check it out!
        </span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
export function Successicons() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        {" "}
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
          <i className="fe fe-thumbs-up me-2"></i>
        </span>
        <span className="alert-inner--text">
          <strong>Success!</strong> This is a success alert—check it out!
        </span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
export function Warningicons() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning">
        {" "}
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
          <i className="fe fe-info me-2"></i>
        </span>
        <span className="alert-inner--text">
          <strong>Warning!</strong> This is a warning alert—check it out!
        </span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
export function Dangericons() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        {" "}
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
          <i className="fe fe-slash me-2"></i>
        </span>
        <span className="alert-inner--text">
          <strong>Danger!</strong> This is a danger alert—check it out!
        </span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
export function Infoicons() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info">
        {" "}
        <Button
          onClick={() => setShow(false)}
          className="float-end btn-close"
          variant="default"
        >
          <span aria-hidden="true">×</span>
        </Button>
        <span className="alert-inner--icon">
          <i className="fe fe-bell me-2"></i>
        </span>
        <span className="alert-inner--text">
          <strong>Info!</strong> This is a info alert—check it out!
        </span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}

///map function

const InitialList = [
  {
    id: "1",
    variant: "success",
    text: " You successfully read this important alert message.",
    strong: "Well done!",
    outerline: "outline",
    solidcolor: "solid",
  },
  {
    id: "2",
    variant: "info",
    text: " This alert needs your attention, but it's not super important.",
    strong: "Heads up!",
    outerline: "outline",
    solidcolor: "solid",
  },
  {
    id: "3",
    variant: "warning",
    text: " Better check yourself, you're not looking too good.",
    strong: "Warning!",
    outerline: "outline",
    solidcolor: "solid",
  },
  {
    id: "4",
    variant: "danger",
    text: "Change a few things up and try submitting again.",
    strong: "Oh snap!",
    outerline: "outline",
    solidcolor: "solid",
  },
];
export const Basic = () => {
  const [list, setList] = React.useState(InitialList);
  function handleRemove(id) {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
  }

  return (
    <Fragment>
      {list.map((item) => (
        <React.StrictMode key={item.id}>
          <Alert variant={item.variant}>
            <strong>{item.strong}</strong> {item.text}
            <Button
              type="button"
              onClick={() => handleRemove(item.id)}
              className="btn-close btn"
            >
              <span aria-hidden="true">×</span>
            </Button>
          </Alert>
        </React.StrictMode>
      ))}
    </Fragment>
  );
};

export const BasicOuterline = () => {
  const [list, setList] = React.useState(InitialList);
  function handleRemove(id) {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
  }

  return (
    <Fragment>
      {list.map((item) => (
        <React.StrictMode key={item.id}>
          <Alert
            variant="default"
            className={`alert-${item.outerline}-${item.variant}`}
          >
            <strong>{item.strong}</strong> {item.text}
            <Button
              type="button"
              onClick={() => handleRemove(item.id)}
              className="btn-close btn"
            >
              <span aria-hidden="true">×</span>
            </Button>
          </Alert>
        </React.StrictMode>
      ))}
    </Fragment>
  );
};

export const BasicSolid = () => {
  const [list, setList] = React.useState(InitialList);
  function handleRemove(id) {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
  }

  return (
    <Fragment>
      {list.map((item) => (
        <React.StrictMode key={item.id}>
          <Alert className={`{}`}>
            <strong>{item.strong}</strong> {item.text}
            <Button
              type="button"
              onClick={() => handleRemove(item.id)}
              className="btn-close btn"
            >
              <span aria-hidden="true">×</span>
            </Button>
          </Alert>
        </React.StrictMode>
      ))}
    </Fragment>
  );
};
