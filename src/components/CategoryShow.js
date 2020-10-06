import React from "react";


export default function CategoryShow(props) {
    
    const category = props.categories.find((category) => category.id === props.id);

    function renderCategory() {
        if (category) {
            return (
                <h1>{category.name}</h1>

            )
        }
        else {
            return <h1> Loading... </h1>
        }
    }
    return <div> {renderCategory()}</div>
}