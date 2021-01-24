import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const LogIn = () => {
    const [password, setPassword] = useState({
        password: "none",
        arr: [],
        answer: "none"
    })
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        console.log("downloading experimental malware....")
    }, [toggle])

    console.log("password", password)

    const history = useHistory()

    const youPass = () => {
        password.password = password.password+8
        console.log(password.password)
    }

    const youPlay = () => {
        let passArr = password.password.split("").reverse()
        password.arr = passArr
        console.log("you play:", password.arr)
    }

    const youShave = () => {
        if (password.arr.length === 1 && password.arr[0] === "a"){
            password.arr = ["are", "you", "hiring", "?"]
        } else if (password.arr.length > 1) {
            password.arr.pop()
        } else {
            password.arr = ["a", "e", "i", "o", "u"]
        }
        console.log(password.arr)
    }

    const youCook = () => {
        if (password.arr[password.arr.length-1] === "?") {
            setToggle(true)
        } else {
            password.answer = "c'mon, man!"
            password.password = "abcdefghijklmnopqrstuvwxyz"
            password.arr = password.password.split("")
        }
        console.log("answer", password.answer)
    }

    const submitHandle = (event) => {
        history.push('/tps-dash')
    }
    return (
        <div>
            <div className="one" onClick={youPlay}/>
            <h2>Riddle:</h2>
            <div className="two" onClick={youCook}/>
            {
                password.answer === "password" ? (<h2>yes</h2>) : (<h3>What has four legs in morning, two legs at noon, and three legs in the evening?</h3>)
            }
            <div className={`three ${password.answer}`} onClick={youShave}/>
            <form onSubmit={submitHandle}>
                <input 
                className="five"
                placeholder="enter answer"
                value = {password.password}
                />
                <button disabled={!toggle}>submit</button>
            </form>
            <div className="four" onClick={youPass}/>
        </div>
    )
}

export default LogIn
