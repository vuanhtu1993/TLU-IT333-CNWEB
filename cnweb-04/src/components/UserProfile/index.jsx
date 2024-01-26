import { useState } from "react"
import "./style.css"

function UserProfile(props) {
    const state = { active: true } // Biến - Variable
    const [active, setActive] = useState(false) // State
    const changeActive = function () {
        setActive(!active)
    }
    return <div>
        <img className={active ? "user-image active" : "user-image"} src={props.image} alt="" />
        <p>{props.name}</p>
        <button onClick={changeActive}>Click me</button>
    </div>
}

export default UserProfile