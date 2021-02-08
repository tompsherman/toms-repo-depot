import React from 'react'

const LeftSection = (props) => {
    const {projObj} = props
    const {extra} = props

    let descMap = projObj.descript.map(bullet => {
        return <ul class="a">{bullet}</ul>
    })

    return (
        <div className="left">
            <div className="half border">
                <div className="flex-card-row border">
                    <h3>{projObj.title}</h3>
                    <h4>{projObj.role}</h4>
                </div>
                <h3 style={{textAlign: "center"}}>{projObj.stack}</h3>
                {descMap}
            </div>
            <img className="imghalf" src={projObj.image} alt="picture" style={extra}/>
        </div>
    )
}

export default LeftSection
