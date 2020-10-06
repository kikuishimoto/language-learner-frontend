import React from "react";
import "./Tutor.css"


export default function Tutors(props) {
    const name = props.tutor.attributes.name
    const email = props.tutor.attributes.email
    const image = props.tutor.attributes.image
    const description = props.tutor.attributes.description
    const id = props.tutor.id

    return (
        <div className="card" id={`tutor-${id}`}>
            <img src={image} alt="Avatar" ></img>
            <div class="container">
            <h4>{name}</h4>
            <strong>Email: </strong>
            <p>{email}</p>
            <strong> Description: </strong>
            <p> {description} </p>
            </div>
            

        </div>
    )
}