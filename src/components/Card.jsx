import React from "react"
import Card1 from "../images/katie-zaferes.png"
import Star from "../images/star.png"
function Card() {
    return (
        <div className="card">
            <img className="card--image" src={Card1} alt="card1"/>
            <div className="card--stats">
                <img className="card--star" src={Star} alt="star" />
                <span>5.0</span>
                <span className="grey">(6) .</span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
export default Card;