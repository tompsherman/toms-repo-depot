import React from 'react'
import LeftSection from '../blocks/LeftSection'
import List from '../blocks/List'
import RightSection from '../blocks/RightSection'
import { Avatar } from 'grommet'

const Bio = () => {
    return (
        <>
            <div>
                <h2>Who is Tom Sherman?</h2>
                <Avatar size="xlarge" src="https://ca.slack-edge.com/ESZCHB482-W017NEUSQMR-e61fcf486524-512" />   
                <p>that is an answer people have tried to answer for over 30 years.</p>
                <p>although most folks prefer to define other humans within simple categories, such as their geographic location, job or career path, or by their family, tom is a tougher nut to crack.</p>
                <p>born and raised in the Washington D.C. area</p>
                <p>GED -> college</p>
                <p>The Run for Veterans</p>
                <p>Arkansas</p>
                <p>comedy, writing</p>
                <p>NAMCO</p>
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
