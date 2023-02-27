import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import styled from "styled-components";




function Main({ SlideText, BusiArea, PortList, Prologue }) {

    const Main_slide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <BsArrowRightShort />,
        prevArrow: <BsArrowLeftShort />
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

            <section className="mainSection02">
                <div className="inner">
                    <div className="tit">
                        <h2>BUSINESS AREA</h2>
                        <p>당신의 생활에 신성건설이 늘 함께합니다.</p>
                    </div>
                    {BusiArea.map((it, idx) => (
                        <ul>
                            <li className={`bus_itm0${idx + 1}`} key={idx}>
                                <span>{it.Title}</span>
                                <p>{it.Desc}</p>
                            </li>
                        </ul>
                    ))
                    }
                </div>
            </section>

            <section className="mainSection03">
                <div className="inner">
                    <div className="tit">
                        <h2>PORTFOLIO</h2>
                        <p>고객이 꿈꾸는 세상을 만들거나느 르네블루 신성건설</p>
                    </div>
                </div>
                <Slider>
                    {Prologue.map((it, idx) => (
                        <ul>
                            <li className={`port_itm0${idx + 1}`} key={idx}>
                                <span>{it.Title}</span>
                            </li>
                        </ul>
                    ))
                    }
                </Slider>
            </section>

            <section className="mainSection04">
                <div className="inner">
                    {Prologue.map((it, idx) => (
                        <div className="prologu_text_box">
                            <h2>{it.Title}</h2>
                            <span>{it.SubTit}</span>
                            {
                                it.Desc.map((Desc, idx) => (
                                    <p key={idx}>{Desc.Desc}</p>
                                ))
                            }

                        </div>
                    ))}
                </div>
            </section>

            <section className="mainSection05">

            </section>
        </>
    )
}
export default Main;
