import React from 'react'

const RightSection = (props) => {
    
    const {projObj} = props
    console.log(projObj.image)
    return (
        <div className="right">
                <img className="half" src={projObj.image} alt="picture"/>
                <div className="half">
                    <h3>{projObj.title}</h3>
                    <h4>{projObj.role}</h4>
                    <h3>{projObj.stack}</h3>
                    <p className="half">{projObj.descript}</p>
                </div>
        </div>
    )
}

export default RightSection
