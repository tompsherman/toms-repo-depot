import React from 'react'
import { useHistory } from 'react-router-dom'
import ContactForm from '../blocks/ContactForm'
import List from '../blocks/List'

const Home = () => {
    const history = useHistory()
    
    const goHerePro = () => {
        history.push('/project')
    }

    const goHereBio = () => {
        history.push('/bio')
    }

    const goHereBlog = () => {
        history.push('/blog')
    }

    // list component listing cards of portfolio headings
    return (
        <>
            <List />
            <div className="card" onClick={goHereBio}>
                <h3>bio</h3>
            </div>
            <div className="card" onClick={goHerePro}>
                <h3>projects</h3>
            </div>
            <div className="card" onClick={goHereBlog}>
                <h3>blog</h3>
            </div>
            <ContactForm />
        </>
    )
}

export default Home
