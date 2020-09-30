import React, { useState } from "react";
import { connect } from "react-redux";
import { createTutor } from "../actions/tutorsActions"

function TutorInput(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const tutor = {
            name: name,
            email: email,
            decription: description,
            image: image
        }

        props.createTutor(tutor)

        setName("");
        setEmail("");
        setDescription("");
        setImage("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    name="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label> Email: </label>
                <input
                    name="email"
                    type="text"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                />
                <label>Description: </label>
                <input
                    name="description"
                    type="text"
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                />
                <label>Image URL:</label>
                <input
                    name="image"
                    type="text"
                    onChange={(e)=> setImage(e.target.value)}
                    value={image}
                />
                <input type="submit" value="Add Phrase"/>
            </form>
        </div>
    )
}
export default connect(null, { createTutor })(TutorInput)