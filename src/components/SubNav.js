import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

const SubNav = ({ SubHeaderData }) => {
    const { pathname } = useLocation();
    const { subId } = useParams();

    const [on, setOn] = useState('');

    // lik 프로퍼티 값이 '/Sub01'을 포함하는 배열 항목만 필터링하고 중복된 요소 제거
    const filteredData = filterUnique(SubHeaderData.filter((item) => item.lik.includes('/Sub01')));

    const handleItemClick = (id) => {
        setOn(id);
    };

    return (
        <div className="sub_nav">
            <div className="inner">
                <ul className="sub_nav_list">
                    {filteredData.map((it) => {
                        // 주소가 맞으면 .on 붙이기
                        const className = pathname === it.lik ? 'on' : '';
                        return (
                            <li key={it.id} className={className}>
                                {/* 클릭하면 li에 .on 붙이기 */}
                                <Link to={it.lik} onClick={() => handleItemClick(it.id)}>
                                    {it.Title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

// 배열의 중복 요소를 제거
function filterUnique(arr) {
    return arr.filter((item, index) => arr.findIndex((i) => i.id === item.id) === index);
}

export default SubNav;
