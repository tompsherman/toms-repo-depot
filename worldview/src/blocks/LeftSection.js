import React from 'react'

const LeftSection = (props) => {
    const {projObj} = props

    return (
        <div className="left">
            <h3>{projObj.title}</h3>
            <h3>{projObj.stack}</h3>
            <p className="half">{projObj.descript}</p>
            <img className="half" href={projObj.image} alt="picture"/>
        </div>
    )
}

export default LeftSection
