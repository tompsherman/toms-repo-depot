import React from 'react'

const RightSection = (props) => {
    
    const {projObj} = props
    console.log(projObj)
    return (
        <div className="right">
                <img className="half" href={projObj.image} alt="picture"/>
                <h3>{projObj.title}</h3>
                <h3>{projObj.stack}</h3>
                <p className="half">{projObj.descript}</p>
        </div>
    )
}

export default RightSection
