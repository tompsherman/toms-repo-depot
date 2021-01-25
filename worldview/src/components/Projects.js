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
            repo: "",
            deployed: "",
            image: "",
            stack: "HTML | CSS | JavaScript | NodeJs",
            descript: ""
        },
        {
            title: "Village Book Builders",
            role: "React developer",
            repo: "",
            deployed: "",
            image: "",
            stack: "HTML | CSS | JavaScript | NodeJs",
            descript: ""
        },
        {
            title: "JS Jr. Dev Job Board",
            role: "backend developer",
            repo: "",
            deployed: "",
            image: "",
            stack: "HTML | CSS | JavaScript | NodeJS | Mongoose",
            descript: ""
        },
    ]
    return (
        <>
            <div>
                <h3>This is Tom's Project Page</h3>
                <RightSection projObj={projObj[0]}/>               
                <LeftSection projObj={projObj[1]}/>
                <RightSection projObj={projObj[2]}/>
            </div>
        </>
    )
}

export default Projects
