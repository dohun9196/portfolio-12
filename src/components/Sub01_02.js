import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import SubNav from './SubNav';

const Sub01_02 = ({ SubHeaderData, CompanyTit, CompanyTable }) => {

    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='sub01Content sec'>
                <div className="inner">
                    <div className="sp_tit">
                        {
                            CompanyTit.map(it => {
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
                <div className="company_content">
                    <div className="left_img">

                    </div>
                    <div className="right_text">
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                {
                                    CompanyTable.map(it => {
                                        return (
                                            <>
                                                <tr>
                                                    <td rowspan="2" className='compan_table_title'>{it.Title}</td>

                                                </tr>
                                                <tr>

                                                    <td rowspan="2" >{it.Desc}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Sub01_02;