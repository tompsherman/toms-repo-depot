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
                <RightSection />
                <LeftSection />
            </div>
        </>
    )
}

export default Bio
