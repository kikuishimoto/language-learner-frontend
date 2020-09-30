import React from "react";


export default function Lists(props) {
    
    const name = props.list.attributes.name
    const id = props.list.id

    return (
        <div className="card" id={`list-${id}`}>
            <h2>{name}</h2>

        </div>
    )
}