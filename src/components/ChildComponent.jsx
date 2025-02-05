import {React,  useContext } from 'react'
import { UserContext } from '../App'

function ChildComponent() {
    const {username, setUsername} = useContext(UserContext)

    return (
        <>
            <div> ciao { username }</div>
        </>
    )
}

export default ChildComponent