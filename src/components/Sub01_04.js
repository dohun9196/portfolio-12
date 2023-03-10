import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import SubNav from './SubNav';

const Sub01_04 = ({ SubHeaderData }) => {

    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='sub01Content sec'>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + `/img/sub01_4.jpg`} alt="" />
                </div>
            </section>
        </>

    )
}

export default Sub01_04;