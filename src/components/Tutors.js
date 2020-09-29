import React from "react";


export default function Tutors(props) {
    const name = props.tutor.attributes.name
    const id = props.tutor.id

    return (
        <div className="card" id={`tutor-${id}`}>
            <h2>{name}</h2>

        </div>
    )
}