import React from 'react'

const LeftSection = (props) => {
    const {projObj} = props

    return (
        <div className="left">
            <div className="half">
                <h3>{projObj.title}</h3>
                <h4>{projObj.role}</h4>
                <h3>{projObj.stack}</h3>
                <p className="half">{projObj.descript}</p>
            </div>
            <img className="half" src={projObj.image} alt="picture"/>
        </div>
    )
}

export default LeftSection
