import React from "react";


export default function Categories(props) {
    const name = props.category.attributes.name
    const id = props.category.id
    const phrases = props.category.relationships.phrases.data
    

    return (
        <div className="card" id={`category-${id}`} >
            <button>{name}</button>

        </div>
    )
}