import React from "react";


export default function Categories(props) {
    const name = props.category.attributes.name
    const id = props.category.id

    return (
        <div className="card" id={`category-${id}`}>
            <h2>{name}</h2>

        </div>
    )
}