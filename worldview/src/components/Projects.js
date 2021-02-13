import React from 'react'
import List from '../blocks/List'
import { Card, CardHeader, CardBody, Nav, Anchor } from 'grommet'
import { Home, Briefcase, Icons, ChatOption } from 'grommet-icons'
import LeftSection from '../blocks/LeftSection'
import RightSection from '../blocks/RightSection'

const Projects = () => {
    let projObj = [
        {
            title: "Story Squad",
            role: "UI/UX co-lead",
            repo: "https://github.com/Lambda-School-Labs/story-squad-fe-a",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1613178444/resume%20repo/story-squad_shot_trxser.png",
            stack: " HTML/CSS | JavaScript | React | Redux | Python | Node.js",
            descript: [
                "Collaborate remotely with a cross functional team of 6 web developers and 3 data scientists",
                "UI/UX co-lead, working to ensure all aspects of the application provide optimal user experience and consistent styling",
                "Create a series of animation sequences to reveal the winning players in head to head matchups, culminating in a capstone 'big reveal' event to announce the winner of the weekly head-to-head matchup and get users excited about the upcoming contest for the next week."
            ]
        },
        {
            title: "My Sleep Tracker",
            role: "UI frontend developer",
            repo: "https://github.com/Build-Week-Sleep-Tracker-Team/Marketing-Page",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1611569240/resume%20repo/sleep_tracker_screenshot_dh9xrb.png",
            stack: "HTML | CSS | JavaScript | NodeJs",
            descript: [
                "Created wireframes, selected styling and images, wrote copy",
                "Ensured dynamic display would render a pleasing, intuitive user interface across mobile, touchpad, and desktop environments",
                "Collaborated remotely with a team of 5 developers to deploy a web app in a week",
            ]
        },
        {
            title: "Village Book Builders",
            role: "React developer",
            repo: "https://github.com/Lambda-School-Labs/village-book-builders-fe-c",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1611569787/resume%20repo/vbb_portal_rxdxjc.png",
            stack: "HTML | CSS | JavaScript | React | Redux | NodeJs",
            descript: [
                "Created a matching algorithm to sort students with potential mentors based on multiple rank-choice factors",
                "Refactored old code left from the previous development team",
                "Updated and maintained administrative documentation",
                "Collaborated remotely with a team of 7 developers"
            ]
        },
        {
            title: "JS Jr. Dev Job Board",
            role: "full stack developer",
            repo: "https://github.com/JS-Jr-Dev-Job-Board",
            deployed: "",
            image: "https://res.cloudinary.com/dzom9ahsn/image/upload/v1611570080/resume%20repo/js_webdev_wires_husjtc.png",
            stack: "HTML | CSS | JavaScript | NodeJS | Mongoose",
            descript: [
                "Created initial backend schema",
                "Researched potential packages to utilize python web scraping capabilities",
                "Integrated authentication into the administrative app ",
                "Collaborate remotely with a team of 12 developers and in smaller groups of 2-4 devs"
            ]
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

    let heightPop = {
        height: "43vh", 
        width: "auto",
        margin: "auto"
    }

    return (
        <>
            <div>
                <RightSection projObj={projObj[0]}/>               
                <LeftSection projObj={projObj[1]}/>
                <RightSection projObj={projObj[2]}/>
                <LeftSection projObj={projObj[3]}/>
                <RightSection projObj={projObj[4]}/>
            </div>
        </>
    )
}

export default Projects
