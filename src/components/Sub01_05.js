import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import SubNav from './SubNav';

const Sub01_05 = ({ SubHeaderData }) => {

    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='sub01Content sec'>
                <div className="inner">
                    카카오 API넣을곳
                </div>
            </section>
        </>

    )
}

export default Sub01_05;