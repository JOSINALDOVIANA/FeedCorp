import React, { Fragment } from "react";
import btc from "../../../assets/img/svgs/crypto-currencies/btc.svg";
import eth from "../../../assets/img/svgs/crypto-currencies/eth.svg";
import xrp from "../../../assets/img/svgs/crypto-currencies/xrp.svg";
import ltc from "../../../assets/img/svgs/crypto-currencies/ltc.svg";
import neo from "../../../assets/img/svgs/crypto-currencies/neo.svg";
import xmr from "../../../assets/img/svgs/crypto-currencies/xmr.svg";
import eos from "../../../assets/img/svgs/crypto-currencies/eos.svg";
import steem from "../../../assets/img/svgs/crypto-currencies/steem.svg";
import miota from "../../../assets/img/svgs/crypto-currencies/miota.svg";
import dash from "../../../assets/img/svgs/crypto-currencies/dash.svg";
import waves from "../../../assets/img/svgs/crypto-currencies/waves.svg";
import * as marketcap from "../../../data/Cryptodashboard/Marketcap/marketcap";
import { Breadcrumb, Card, Col, Row, Table, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const CryptMarketingValues =
  [
    { IMAGES: btc, ID: 1, Symbol: "bitcoin", Name: "Bitcoin", crypt: "BTC", lastprice: "$151.00", MarkerCap: "$518", Change: "success", platform: "Trade", },
    { ID: 2, ymbol: "ethereum", Name: "Ethereum", crypt: "ETH", lastprice: "$723.48", MarkerCap: "$448", Change: "success", platform: "Trade", IMAGES: eth, },
    { ID: 3, Symbol: "ripple", Name: "Ripple", crypt: "XRP", lastprice: "$425.25", MarkerCap: "$763", Change: "success", platform: "Trade", IMAGES: xrp, },
    { ID: 4, Symbol: "litecoin", Name: "Litecoin", crypt: "LTC", lastprice: "$1.2029", MarkerCap: "$678,", Change: "danger", platform: "Trade", IMAGES: ltc, },
    { ID: 5, Symbol: "neo", Name: "Neo", crypt: "NEO", lastprice: "$154.67", MarkerCap: "$197", Change: "danger", platform: "Trade", IMAGES: neo, },
    { ID: 6, Symbol: "monero", Name: "Monero", crypt: "XMR", lastprice: "$305.16", MarkerCap: "$4,778", Change: "success", platform: "Trade", IMAGES: xmr, },
    { ID: 7, Symbol: "eos", Name: "Eos", crypt: "EOS", lastprice: "$149.18", MarkerCap: "$8,44", Change: "danger", platform: "Trade", IMAGES: eos, },
    { ID: 8, Symbol: "steem", Name: "Steem", crypt: "STEEM", lastprice: "$0.4673", MarkerCap: "$8,358", Change: "success", platform: "Trade", IMAGES: steem, },
    { ID: 9, Symbol: "lota", Name: "Lota", crypt: "LOTA", lastprice: "$2.34", MarkerCap: "$654", Change: "danger", platform: "Trade", IMAGES: miota, },
    { ID: 10, Symbol: "dash", Name: "Dash", crypt: "DASH", lastprice: "$747.2", MarkerCap: "$588", Change: "success", platform: "Trade", IMAGES: dash, },
    { ID: 11, Symbol: "waves", Name: "Bitcoin", crypt: "NEM", lastprice: "$181.39", MarkerCap: "$3,084", Change: "danger", platform: "Trade", IMAGES: waves, },
  ];

function MarketCap() {
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Crypto Currencies</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Crypto Currencies</Breadcrumb.Item>
            <Breadcrumb.Item active>Crypto-Market</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white"
              type="button"
              className="white btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              variant="primary"
              type="button"
              className=" my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      <Row className="row-sm">
        <Col lg={6} xl={6} xxl={3} md={6} >
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="tx-14">BTC / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">34.4324 <span className="text-muted tx-12">$29.42</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-danger me-2 font-weight-bold">-0.22%</span>
                    Volume - 76,434 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} id="btc-market" options={marketcap.Marketcap1} className="ms-auto float-end" data={marketcap.marketcap1} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className=" ">
              <h5 className="tx-14">ETH / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">29.4124 <span className="text-muted tx-12">$23.15</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-success me-2 font-weight-bold">+0.23%
                    </span>
                    Volume - 23,346 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap2} className="ms-auto float-end" data={marketcap.marketcap2} id="ethereum-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className=" ">
              <h5 className="tx-14">XRP / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">34.5674 <span className="text-muted tx-12">$45.24</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-danger me-2 font-weight-bold">-0.42%</span>
                    Volume - 56,456 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap3} className="ms-auto float-end" data={marketcap.marketcap3} id="xrp-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="tx-14">LTC / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">45.4542 <span className="text-muted tx-12">$63.34</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-success me-2 font-weight-bold">-0.12%</span>
                    Volume - 34,462 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap4} className="ms-auto float-end" data={marketcap.marketcap4} id="ltc-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0"><label className="main-content-label my-auto">Crypt Marketing Values</label></Card.Header>
            <Card.Body>

              <Table hover responsive className="table text-nowrap border">
                <thead className="table border-bottom">
                  <tr>
                    <th className="bg-transparent">No</th>
                    <th className="bg-transparent">Name</th>
                    <th className="bg-transparent">Last Price</th>
                    <th className="bg-transparent">Market Cap</th>
                    <th className="bg-transparent">Change(24h)</th>
                    <th className="bg-transparent"></th>
                  </tr>
                </thead>
                <tbody>
                  {CryptMarketingValues.map((items, index) => (
                    <tr key={index} data-index={index}>
                      <td>{items.ID}</td>
                      <td><img src={items.IMAGES} className="wd-30 ht-30 me-3" alt="img" />{items.Name} <b>{items.crypt}</b></td>
                      <td>{items.MarkerCap}</td>
                      <td>{items.lastprice}</td>
                      <td><span className={`text-${items.Change}`}>+3.49%</span></td>
                      <td><b className="btn btn-outline-primary btn-sm">{items.platform}</b></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

MarketCap.propTypes = {};

MarketCap.defaultProps = {};

export default MarketCap;
