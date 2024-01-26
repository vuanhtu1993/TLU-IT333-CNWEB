import { useState } from "react"
import "./style.css"

function UserProfile(props) {
    const state = { active: true } // Biến - variables


    return <div>
        <img
            className={props.active ? "user-image active" : "user-image"}
            src={props.image}
            alt="" />
        <div>{props.name}</div>
    </div>
}

export default UserProfile