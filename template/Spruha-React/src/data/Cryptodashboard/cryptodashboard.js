import React from 'react-dom';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
export const Cryptodashboard = {
	series: [59, 34, 33],
	options: {
		chart: {
			// width: 380,
			type: 'donut'
		},
		dataLabels: {
			enabled: false
		},
		colors: ['#6259ca', '#a19bdf', '#c0bdea'],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						show: false
					}
				}
			}
		],
		legend: {
			position: 'right',
			offsetY: 0,
			height: 230,
			show: false
		}
	}
};
export const ApexChart = {
	series: [
		{
			data: [
				{
					x: new Date(1538778600000),
					y: [6629.81, 6650.5, 6623.04, 6633.33]
				},
				{
					x: new Date(1538780400000),
					y: [6632.01, 6643.59, 6620, 6630.11]
				},
				{
					x: new Date(1538782200000),
					y: [6630.71, 6648.95, 6623.34, 6635.65]
				},
				{
					x: new Date(1538784000000),
					y: [6635.65, 6651, 6629.67, 6638.24]
				},
				{
					x: new Date(1538785800000),
					y: [6638.24, 6640, 6620, 6624.47]
				},
				{
					x: new Date(1538787600000),
					y: [6624.53, 6636.03, 6621.68, 6624.31]
				},
				{
					x: new Date(1538789400000),
					y: [6624.61, 6632.2, 6617, 6626.02]
				},
				{
					x: new Date(1538791200000),
					y: [6627, 6627.62, 6584.22, 6603.02]
				},
				{
					x: new Date(1538793000000),
					y: [6605, 6608.03, 6598.95, 6604.01]
				},
				{
					x: new Date(1538794800000),
					y: [6604.5, 6614.4, 6602.26, 6608.02]
				},
				{
					x: new Date(1538796600000),
					y: [6608.02, 6610.68, 6601.99, 6608.91]
				},
				{
					x: new Date(1538798400000),
					y: [6608.91, 6618.99, 6608.01, 6612]
				},
				{
					x: new Date(1538800200000),
					y: [6612, 6615.13, 6605.09, 6612]
				},
				{
					x: new Date(1538802000000),
					y: [6612, 6624.12, 6608.43, 6622.95]
				},
				{
					x: new Date(1538803800000),
					y: [6623.91, 6623.91, 6615, 6615.67]
				},
				{
					x: new Date(1538805600000),
					y: [6618.69, 6618.74, 6610, 6610.4]
				},
				{
					x: new Date(1538807400000),
					y: [6611, 6622.78, 6610.4, 6614.9]
				},
				{
					x: new Date(1538809200000),
					y: [6614.9, 6626.2, 6613.33, 6623.45]
				},
				{
					x: new Date(1538811000000),
					y: [6623.48, 6627, 6618.38, 6620.35]
				},
				{
					x: new Date(1538812800000),
					y: [6619.43, 6620.35, 6610.05, 6615.53]
				},
				{
					x: new Date(1538814600000),
					y: [6615.53, 6617.93, 6610, 6615.19]
				},
				{
					x: new Date(1538816400000),
					y: [6615.19, 6621.6, 6608.2, 6620]
				},
				{
					x: new Date(1538818200000),
					y: [6619.54, 6625.17, 6614.15, 6620]
				},
				{
					x: new Date(1538820000000),
					y: [6620.33, 6634.15, 6617.24, 6624.61]
				},
				{
					x: new Date(1538821800000),
					y: [6625.95, 6626, 6611.66, 6617.58]
				},
				{
					x: new Date(1538823600000),
					y: [6619, 6625.97, 6595.27, 6598.86]
				},
				{
					x: new Date(1538825400000),
					y: [6598.86, 6598.88, 6570, 6587.16]
				},
				{
					x: new Date(1538827200000),
					y: [6588.86, 6600, 6580, 6593.4]
				},
				{
					x: new Date(1538829000000),
					y: [6593.99, 6598.89, 6585, 6587.81]
				},
				{
					x: new Date(1538830800000),
					y: [6587.81, 6592.73, 6567.14, 6578]
				},
				{
					x: new Date(1538832600000),
					y: [6578.35, 6581.72, 6567.39, 6579]
				},
				{
					x: new Date(1538834400000),
					y: [6579.38, 6580.92, 6566.77, 6575.96]
				},
				{
					x: new Date(1538836200000),
					y: [6575.96, 6589, 6571.77, 6588.92]
				},
				{
					x: new Date(1538838000000),
					y: [6588.92, 6594, 6577.55, 6589.22]
				},
				{
					x: new Date(1538839800000),
					y: [6589.3, 6598.89, 6589.1, 6596.08]
				},
				{
					x: new Date(1538841600000),
					y: [6597.5, 6600, 6588.39, 6596.25]
				},
				{
					x: new Date(1538843400000),
					y: [6598.03, 6600, 6588.73, 6595.97]
				},
				{
					x: new Date(1538845200000),
					y: [6595.97, 6602.01, 6588.17, 6602]
				},
				{
					x: new Date(1538847000000),
					y: [6602, 6607, 6596.51, 6599.95]
				},
				{
					x: new Date(1538848800000),
					y: [6600.63, 6601.21, 6590.39, 6591.02]
				},
				{
					x: new Date(1538850600000),
					y: [6591.02, 6603.08, 6591, 6591]
				},
				{
					x: new Date(1538852400000),
					y: [6591, 6601.32, 6585, 6592]
				},
				{
					x: new Date(1538854200000),
					y: [6593.13, 6596.01, 6590, 6593.34]
				},
				{
					x: new Date(1538856000000),
					y: [6593.34, 6604.76, 6582.63, 6593.86]
				},
				{
					x: new Date(1538857800000),
					y: [6593.86, 6604.28, 6586.57, 6600.01]
				},
				{
					x: new Date(1538859600000),
					y: [6601.81, 6603.21, 6592.78, 6596.25]
				},
				{
					x: new Date(1538861400000),
					y: [6596.25, 6604.2, 6590, 6602.99]
				},
				{
					x: new Date(1538863200000),
					y: [6602.99, 6606, 6584.99, 6587.81]
				},
				{
					x: new Date(1538865000000),
					y: [6587.81, 6595, 6583.27, 6591.96]
				},
				{
					x: new Date(1538866800000),
					y: [6591.97, 6596.07, 6585, 6588.39]
				},
				{
					x: new Date(1538868600000),
					y: [6587.6, 6598.21, 6587.6, 6594.27]
				},
				{
					x: new Date(1538870400000),
					y: [6596.44, 6601, 6590, 6596.55]
				},
				{
					x: new Date(1538872200000),
					y: [6598.91, 6605, 6596.61, 6600.02]
				},
				{
					x: new Date(1538874000000),
					y: [6600.55, 6605, 6589.14, 6593.01]
				},
				{
					x: new Date(1538875800000),
					y: [6593.15, 6605, 6592, 6603.06]
				},
				{
					x: new Date(1538877600000),
					y: [6603.07, 6604.5, 6599.09, 6603.89]
				},
				{
					x: new Date(1538879400000),
					y: [6604.44, 6604.44, 6600, 6603.5]
				},
				{
					x: new Date(1538881200000),
					y: [6603.5, 6603.99, 6597.5, 6603.86]
				},
				{
					x: new Date(1538883000000),
					y: [6603.85, 6605, 6600, 6604.07]
				},
				{
					x: new Date(1538884800000),
					y: [6604.98, 6606, 6604.07, 6606]
				}
			]
		}
	],
	options: {
		chart: {
			type: 'candlestick',
			height: 300,
			toolbar: {
				show: false
			}
		},
		title: {
			align: 'left'
		},
		plotOptions: {
			candlestick: {
				colors: {
					upward: '#6259ca',
					downward: '#bbb6ef'
				}
			}
		},
		xaxis: {
			type: 'datetime',
		},
		yaxis: {
			tooltip: {
				enabled: true
			},
		}

		
	}
};

export const Cryptochart2 = {
	type: 'line',
	maintainAspectRatio: false,
	options: {
		responsive: true,
		plugins: {
			title: {
				display: false
			}
		},
		interaction: {
			intersect: false
		},
		scales: {
			x: {
				display: false,
				title: {
					display: true
				}
			},
			y: {
				display: false,
				title: {
					display: true,
					text: 'Value'
				},
				suggestedMin: -10,
				suggestedMax: 200
			}
		}
	}
};

// cryptochart3
export const Cryptochart3 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top',
			display: false
		},

		title: {
			display: false,
			text: 'Chart.js Line Chart'
		}
	},
	scales: {
		x: {
			display: false,
			title: {
				display: true
			}
		},
		y: {
			display: false,
			title: {
				display: true,
				text: 'Value'
			}
		}
	}
};

export const cryptochart3 = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	type: 'line',
	datasets: [
		{
			data: [83, 56, 85, 62, 75, 45, 86, 56],
			label: 'Bitcon',
			backgroundColor: 'transparent',
			borderColor: '#6259ca',
			borderWidth: '4',
			pointBorderColor: 'transparent',
			pointBackgroundColor: 'transparent',
			tension: 0.4
		}
	]
};

export const Cryptochart4 = {
	type: 'doughnut',
	maintainAspectRatio: false,
	options: {
		plugins: {
			tooltip: false
		}
	}
};
export const cryptochart4 = {
	datasets: [
		{
			data: [20, 20, 30],
			backgroundColor: ['#6259ca', '#53caed']
		}
	],
	hoverOffset: 4
};

// React slick coursel:-
export function Cryptocoursel() {
	const settings = {
		// dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		arrows: false,
		autoplaySpeed: 1500,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div id='crypto-slick'>
			<Slider {...settings}>
				<div className="itemslick" >
					<Card className=" custom-card me-4">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">Bitcoin BTC</span>
									<h3 className="m-0 mt-2">1.343434</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/btc.svg').default}
										className="wd-30 hd-30 me-2"
										alt="btc"
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="item ">
					<Card className="custom-card me-4 ">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">Ethereum ETH</span>
									<h3 className="m-0 mt-2">3.763674</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/eth.svg').default}
										className="wd-30 hd-30 me-2"
										alt="eth"
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="item me-2">
					<Card className=" custom-card me-4 ">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">Ripple XRP</span>
									<h3 className="m-0 mt-2">12.53647</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/xrp.svg').default}
										className="wd-30 hd-30 me-2"
										alt=""
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="item">
					<Card className="custom-card me-4 ">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">litecoin LTC</span>
									<h3 className="m-0 mt-2">3,635387</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/ltc.svg').default}
										className="wd-30 hd-30 me-2"
										alt="ltc"
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="item">
					<Card className="custom-card me-4 ">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">Dash DASH</span>
									<h3 className="m-0 mt-2">3,635387</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/dash.svg').default}
										className="wd-30 hd-30 me-2"
										alt="dash"
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="item">
					<Card className=" custom-card me-4 ">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">Monero XMR</span>
									<h3 className="m-0 mt-2">5,34578</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/xmr.svg').default}
										className="wd-30 hd-30 me-2"
										alt="xmr"
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="item">
					<Card className=" custom-card me-4 ">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">Neo NEO</span>
									<h3 className="m-0 mt-2">4,435456</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/neo.svg').default}
										className="wd-30 hd-30 me-2"
										alt="neo"
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="item">
					<Card className=" custom-card me-4 ">
						<Card.Body>
							<div className="d-flex no-block align-items-center currency-item">
								<div>
									<span className="text-muted tx-13 mb-3">Steem STEEM</span>
									<h3 className="m-0 mt-2">2,345467</h3>
								</div>
								<div className="ms-auto mt-auto">
									<img
										src={require('../../assets/img/svgs/crypto-currencies/steem.svg').default}
										className="wd-30 hd-30 me-2"
										alt="steem"
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</Slider>
		</div>
	);
}
