import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
export const SlicksiderParceiros = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
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
        <Fragment>
            <div>
                <Slider {...settings}>
                    <div>
                        <img alt="web1" src={require("../../../../../../assets/landing/web/1.png")} />
                        <h5 className="mt-3 text-white">Bootstrap5</h5>
                    </div>
                    <div>
                        <img alt="web2" src={require("../../../../../../assets/landing/web/2.png")} />
                        <h5 className="mt-3 text-white">HTML5</h5>
                    </div>
                    <div>
                        <img alt="web3" src={require("../../../../../../assets/landing/web/3.png")} />
                        <h5 className="mt-3 text-white">JQuery</h5>
                    </div>
                    <div>
                        <img alt="web4" src={require("../../../../../../assets/landing/web/4.png")} />
                        <h5 className="mt-3 text-white">Sass</h5>
                    </div>
                    <div>
                        <img alt="web5" src={require("../../../../../../assets/landing/web/5.png")} />
                        <h5 className="mt-3 text-white">Gulp</h5>
                    </div>
                    <div>
                        <img alt="web6" src={require("../../../../../../assets/landing/web/6.png")} />
                        <h5 className="mt-3 text-white">NPM</h5>
                    </div>
                    <div>
                        <img alt="web1" src={require("../../../../../../assets/landing/web/1.png")} />
                        <h5 className="mt-3 text-white">Bootstrap5</h5>
                    </div>
                    <div>
                        <img alt="web2" src={require("../../../../../../assets/landing/web/2.png")} />
                        <h5 className="mt-3 text-white">HTML5</h5>
                    </div>
                </Slider>
            </div>
        </Fragment>
    )
}

export const SlicksiderTecnologias = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
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
        <Fragment>
            <div>
                <Slider {...settings}>
                    <div>
                        <img alt="web1" src={require("../../../../../../assets/landing/web/1.png")} />
                        <h5 className="mt-3 text-white">Bootstrap5</h5>
                    </div>
                    <div>
                        <img alt="web2" src={require("../../../../../../assets/landing/web/2.png")} />
                        <h5 className="mt-3 text-white">HTML5</h5>
                    </div>
                    <div>
                        <img alt="web3" src={require("../../../../../../assets/landing/web/3.png")} />
                        <h5 className="mt-3 text-white">ReactJS</h5>
                    </div>
                    <div>
                        <img alt="web4" src={require("../../../../../../assets/landing/web/4.png")} />
                        <h5 className="mt-3 text-white">My SQL</h5>
                    </div>
                    <div>
                        <img alt="web5" src={require("../../../../../../assets/landing/web/5.png")} />
                        <h5 className="mt-3 text-white">NodeJS</h5>
                    </div>
                    <div>
                        <img alt="web6" src={require("../../../../../../assets/landing/web/6.png")} />
                        <h5 className="mt-3 text-white">NPM</h5>
                    </div>
                    <div>
                        <img alt="web6" src={require("../../../../../../assets/landing/web/7.png")} />
                        <h5 className="mt-3 text-white">JavaScript</h5>
                    </div>
                </Slider>
            </div>
        </Fragment>
    )
}

export const SlicksiderClientes = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        arrows: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear"
    };
    return (
        <Fragment>
            <div>
                <div>
                    <Slider {...settings}>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className="d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80">
                                            <i className="fa fa-quote-left fs-20 text-white-80"></i> Uma plataforma muito boa, otimizada e de fácil manuseio, 
                                            testei a plataforma com a equipe de Técnicos da web flash, tive um resultado muito bom
                                        </p>
                                        <h3 className="title">Victor Melo</h3>
                                        <span className="post">Técnico</span>
                                        <div className="rating-stars block my-rating-5 mb-5"
                                            data-rating="4"></div>
                                        <div className="slick-controls clickable">
                                            <div className="slick-pagination">
                                                <div className="slick-page mx-1">
                                                    <span className=""></span>
                                                </div>
                                                <div className="slick-page mx-1 ">
                                                    <span className=""></span>
                                                </div>
                                                <div className="slick-page mx-1">
                                                    <span className=""></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className="d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> A plataforma está começando mas tem tudo pra melhorar, a ideia geral é boa e bem intencionada. 
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">José Junior</h3>
                                            <span className="post">Usuário</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className=" d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> A plataforma tem um designer muito agradável, 
                                            as funcionalidades são de fácil compressão falta algumas melhorias mas está maravilhosa
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">Gislane Rodrigues</h3>
                                            <span className="post">Usuário</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className=" d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> Design execelente, tanto da parte de Login, como a parte interna da plataforma. 
                                            As sessões são bem intuitivas... Acredito que a plataforma alcançou muito bem a sua proposta
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">Levi dos Santos</h3>
                                            <span className="post">Usuário</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className=" d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> A plataforma é bonita e responsiva, as funcionalidades de fácil 
                                            compreensão carece de melhorias mas esta excelente.
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">Joilson Martins</h3>
                                            <span className="post">Usuário</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </div>
            </div>
        </Fragment>
    )
}

//Scroll To Top

export const Topup = () => {
    if (window.scrollY > 30 && document.querySelector(".landing-page")) {
        let Scolls = document.querySelectorAll(".top", ".sticky");
        Scolls.forEach((e) => {
            e.classList.add("sticky-pin");
        });
    } else {
        let Scolls = document.querySelectorAll(".top", ".sticky");
        Scolls.forEach((e) => {
            e.classList.remove("sticky-pin");
        });
    }
};

window.addEventListener("scroll", Topup);