import React from 'react'

const LeftSection = (props) => {
    const {projObj} = props

    let descMap = projObj.descript.map(bullet => {
        return <ul class="a">{bullet}</ul>
    })

    return (
        <div className="left">
            <div className="half">
                <h3>{projObj.title}</h3>
                <h4>{projObj.role}</h4>
                <h3>{projObj.stack}</h3>
                {descMap}
            </div>
            <img className="imghalf" src={projObj.image} alt="picture"/>
        </div>
    )
}

export default LeftSection
