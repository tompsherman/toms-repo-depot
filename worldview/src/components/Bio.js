import React, { useState } from 'react'
import LeftSection from '../blocks/LeftSection'
import List from '../blocks/List'
import RightSection from '../blocks/RightSection'
import { Avatar } from 'grommet'

const Bio = () => {
    const [toggle, setToggle] = useState(false)

    let dynaClass = ""
    let dynoClass = ""
    
    if (toggle) {
        dynaClass = "on"
        dynoClass = "off"
    } else {
        dynaClass = "off"
    }

    const pickTab = (event) => {
        setToggle(!toggle)
        console.log(dynaClass)
        return dynaClass
    }

    return (
        <>
                <div className="quote">
                    <p>
                        "I am a force of nature you cannot quite comprehend; a collection of accumulated energy and experiences spanning 13.8 billion years. You can call me Tom."
                    </p>
                </div> 
            <div>
                <h2>Who is Tom Sherman?</h2>
                <Avatar size="xlarge" src="https://ca.slack-edge.com/ESZCHB482-W017NEUSQMR-e61fcf486524-512" />   
                <p>that is an answer people have tried to answer for over 30 years; although most folks prefer to define other humans within simple categories, such as their geographic location, job title or career path, or by their family, Tom is a bit of a tougher nut to crack.</p>
                <p>His name literally means "Twin Sheep Shearer", which leads one to believe that Tom might merely be a reflection of a world trying to trim down humans' hubris. On a more tangible level, Tom likes to tell people he (like most other life forms) is sunlight captured and stored. As such, friends and associates often describe him as 'weird', 'crazy', and/or 'smart'. On the more comfortable bio-socio-geographic plane, Tom is a young man in Delaware who likes to turn big dreams into reality.</p>
                {/* <div className="half flex-row">
                    <div className='third' className={dynaClass} onClick={pickTab}>
                        timeline
                    </div>
                    <div className="third" className={dynoClass}>
                        awards & accolades
                    </div>
                    <div className="third">
                        press
                    </div>
                </div> */}
                <p>born and raised in the Washington D.C. area</p>
                <p>GED -> college</p>
                <p>The Run for Veterans</p>
                <p>Arkansas</p>
                <p>comedy, writing</p>
                <p>NAMCO / Squadra / journalism (Harlem Times, NPC)</p>
                <p>Delaware</p>
                <p>Craft brewing, tour guide, MoonCat Comedy</p>
                <p>WGMD, journalism</p>
                <p>inventor, The New Calendar</p>
                <p>pandemic --> Lambda School</p>

            </div>
        </>
    )
}

export default Bio
