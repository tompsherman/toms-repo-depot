import React from 'react'

const RightSection = (props) => {
    
    const {projObj} = props

    let descMap = projObj.descript.map(bullet => {
        return <ul class="a">{bullet}</ul>
    })

    return (
        <div className="right">
                <img className="imghalf" src={projObj.image} alt="picture"/>
                <div className="half">
                    <h3>{projObj.title}</h3>
                    <h4>{projObj.role}</h4>
                    <h3>{projObj.stack}</h3>
                    {descMap}
                </div>
        </div>
    )
}

export default RightSection
