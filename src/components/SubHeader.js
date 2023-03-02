import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const SubHeader = ({ SubHeaderData }) => {
    const { pathname } = useLocation();
    const { subId } = useParams();

    const filteredData = SubHeaderData.filter(
        (item) => item.lik === pathname
    );

    return (
        <>
            <div className="sub01_header">
                <div className="inner">
                    {filteredData.map((it) => (
                        <div className="sp_top_tit" key={it.id}>
                            <strong>{it.Title}</strong>
                            <span>{it.Desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SubHeader;