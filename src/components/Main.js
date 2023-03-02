import { Link } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";





function Main({ SlideText, BusText, BusiArea, PortList, Prologue }) {

    const Main_slide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <BsChevronRight />,
        prevArrow: <BsChevronLeft />
    };
    const Main_portfolio = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

    };



    return (
        <>
            <section className="mainSection01">
                <div className="main_slide">
                    <Slider {...Main_slide} >
                        {SlideText.map((it, idx) => (
                            <figure className={`slide_itm0${idx + 1}`} key={idx}>
                                <div className="inner">
                                    <div className="m_slide_tit">
                                        <h2>{it.Title}</h2>
                                        <span>{it.SubTit}</span>
                                        <p>{it.Desc}</p>
                                    </div>
                                </div>
                            </figure>
                        ))
                        }
                    </Slider>
                </div>
                <div className="SC_ico">
                    <img src={process.env.PUBLIC_URL + `/img/scroll.png`} alt="스크롤다운" />
                </div>
            </section>

            <section className="mainSection02 sec">
                <div className="inner">
                    <div className="m_cont_tit">
                        {BusText.map(it => {
                            return (
                                <>
                                    <h2>{it.Title}</h2>
                                    <p>{it.Desc}</p>
                                </>
                            )
                        })}

                    </div>

                    <ul className="Bus_flex">
                        {BusiArea.map((it, idx) => {
                            return (
                                <li className={`bus_itm0${idx + 1}`} key={idx}>
                                    <Link to={it.Link}>
                                        <div class="bus_flex_text">
                                            <span>{it.Title}</span>
                                            <p>{it.Desc}</p>
                                        </div>
                                    </Link>
                                </li>

                            )
                        })
                        }
                    </ul>
                </div>
            </section>

            <section className="mainSection03 sec">
                <div className="inner">
                    <div className="m_cont_tit">
                        <h2>PORTFOLIO</h2>
                        <p>고객이 꿈꾸는 세상을 만들거나느 르네블루 신성건설</p>
                    </div>

                    <Slider {...Main_portfolio}>
                        {PortList.map((it, idx) => (
                            <ul className="port_slide">
                                <li className={`port_itm0${idx + 1}`} key={idx}>
                                    <span>{it.Title}</span>
                                </li>
                            </ul>
                        ))
                        }
                    </Slider>
                </div>
            </section>

            <section className="mainSection04 sec">
                <div className="inner">
                    {Prologue.map((it, idx) => (
                        <div className="m_cont_tit">
                            <h2>{it.Title}</h2>
                            <span>{it.SubTit}</span>
                            {
                                it.Desc.map((Desc, idx) => (
                                    <p key={idx}>{Desc.Desc}</p>
                                ))
                            }

                        </div>
                    ))}
                    <div class="prologue_link">
                        <Link to='/sub01_02'>기업소개 바로가기</Link>
                        <Link to=''>기업PDF 다운로드</Link>
                    </div>
                </div>
            </section>

            <section className="mainSection05">

            </section>
        </>
    )
}
export default Main;
