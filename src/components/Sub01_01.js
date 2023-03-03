import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import SubNav from './SubNav';

const Sub01_01 = ({ SubHeaderData, CeoTit, CeoDesc }) => {

    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='sub01Content sec ceo'>
                <div className="inner">
                    <img className='subimg' src={process.env.PUBLIC_URL + `/img/sub01_1.jpg`} alt="" />
                    <div className="sp_tit sp_tit_position">
                        {
                            CeoTit.map(it => {
                                return (
                                    <>
                                        <h2>{it.Title}</h2>
                                        <p>{it.Desc}</p>
                                    </>
                                )
                            })
                        }

                    </div>

                </div>
                <div className="ceo_message">
                    {
                        CeoDesc.map(it => {
                            return (
                                <>
                                    <span>{it.Title}</span>
                                    <p>{it.Desc}</p>
                                    <em>대표이사:이동규</em>
                                </>
                            )
                        })
                    }
                </div>
            </section>

        </>

    )
}

export default Sub01_01;