import React from "react";
import { Link } from "react-router-dom";


export default function Categories(props) {
    const name = props.category.attributes.name
    const id = props.category.id
    

    return (
        <div className="card" id={`category-${id}`} >
            <Link to= {`/categories/${id}`}>
                {name}
            </Link>

        </div>
    )
}