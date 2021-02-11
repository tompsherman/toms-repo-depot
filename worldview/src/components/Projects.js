import React from 'react'
import List from '../blocks/List'
import { Card, CardHeader, CardBody, Nav, Anchor } from 'grommet'
import { Home, Briefcase, Icons, ChatOption } from 'grommet-icons'
import LeftSection from '../blocks/LeftSection'
import RightSection from '../blocks/RightSection'

const Projects = () => {
    let projObj = [
        {
            title: "My Sleep Tracker",
            role: "UI frontend developer",
            repo: "https://github.com/Build-Week-Sleep-Tracker-Team/Marketing-Page",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1611569240/resume%20repo/sleep_tracker_screenshot_dh9xrb.png",
            stack: "HTML | CSS | JavaScript | NodeJs",
            descript: [""]
        },
        {
            title: "Village Book Builders",
            role: "React developer",
            repo: "https://github.com/Lambda-School-Labs/village-book-builders-fe-c",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1611569787/resume%20repo/vbb_portal_rxdxjc.png",
            stack: "HTML | CSS | JavaScript | React | Redux | NodeJs",
            descript: [""]
        },
        {
            title: "JS Jr. Dev Job Board",
            role: "full stack developer",
            repo: "https://github.com/JS-Jr-Dev-Job-Board",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1611570080/resume%20repo/js_webdev_wires_husjtc.png",
            stack: "HTML | CSS | JavaScript | NodeJS | Mongoose",
            descript: [""]
        },
        {
            title: "Better Clock",
            role: "full stack developer",
            repo: "https://github.com/tompsherman/better-clock",
            deployed: "https://better-clock.vercel.app/",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1611570597/resume%20repo/bettclock_h0tkjc.png",
            stack: "HTML | CSS | JavaScript",
            descript: [""]
        },
    ]
    return (
        <>
            <div>
                <h3>This is Tom's Project Page</h3>
                <RightSection projObj={projObj[0]}/>               
                <LeftSection projObj={projObj[1]}/>
                <RightSection projObj={projObj[2]}/>
                <LeftSection projObj={projObj[3]}/>
            </div>
        </>
    )
}

export default Projects
