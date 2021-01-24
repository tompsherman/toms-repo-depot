import React from 'react'
import List from '../blocks/List'
import { Card, CardHeader, CardBody, Nav, Anchor } from 'grommet'
import { Home, Briefcase, Icons, ChatOption } from 'grommet-icons'

const Projects = () => {
    return (
        <>
            <div>
            <Nav direction="row" background="brand" pad="medium">
                <Anchor hoverIndicator>home</Anchor>
                <Anchor hoverIndicator>bio</Anchor>
                <Anchor hoverIndicator>contact</Anchor>
            </Nav>
                <h3>This is Tom's Project Page</h3>
               <Card>
                <CardHeader pad="medium">Project 1</CardHeader>
                <CardBody pad="medium">I developed this project</CardBody>
               </Card>
               <Card>
                <CardHeader pad="medium">Project 2</CardHeader>
                <CardBody pad="medium">I developed this project</CardBody>
               </Card>
               <Card>
                <CardHeader pad="medium">Project 3</CardHeader>
                <CardBody pad="medium">I developed this project</CardBody>
               </Card>               
            </div>
        </>
    )
}

export default Projects
