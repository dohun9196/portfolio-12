import React from 'react'

const SubHeader = ({ SubHeader }) => {
    return (
        <>
            <div className="sub01_header">
                <div className="inner">

                    {SubHeadertext.map(it => (

                        <>
                            <span>{it.Title}</span>
                            <p>{it.Desc}</p>
                        </>

                    ))}
                </div>
            </div>
        </>
    )
}

export default SubHeader;