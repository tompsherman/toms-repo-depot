import React from 'react'
import { useHistory } from 'react-router-dom'
import ContactForm from '../blocks/ContactForm'

const Home = () => {
    const history = useHistory()
    
    const goHere = () => {
        history.push('/bio-project-blog-contact')
    }
    // list component listing cards of portfolio headings
    return (
        <>
            <div className="card" onClick={goHere}>
                <h3>bio</h3>
            </div>
            <div className="card" onClick={goHere}>
                <h3>projects</h3>
            </div>
            <div className="card" onClick={goHere}>
                <h3>blog</h3>
            </div>
            <ContactForm />
        </>
    )
}

export default Home
