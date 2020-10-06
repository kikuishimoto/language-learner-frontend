import React, { useState } from "react";
import { connect } from "react-redux";
import { createPhrase } from "../actions/phrasesActions"

function PhraseInput(props) {
    const [content, setContent] = useState("");
    const [pinyin, setPinyin] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const phrase = {
            content: content,
            pinyin: pinyin,
            category: category,
            image: image
        }

        props.createPhrase(phrase)

        setContent("");
        setPinyin("");
        setCategory("");
        setImage("");


    }

    return (
        <div className="phrase-form">
            <h3> Add a new phrase! </h3>
            <form onSubmit={handleSubmit}>
                <label>Word/Phrase(in english):</label>
                <input 
                    name="content"
                    type="text"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                /><br/>
                <label> Word/Phrase(in Pinyin): </label>
                <input
                    name="pinyin"
                    type="text"
                    onChange={(e)=> setPinyin(e.target.value)}
                    value={pinyin}
                /><br/>
                <label>Category: </label>
                <input
                    name="category"
                    type="text"
                    onChange={(e)=> setCategory(e.target.value)}
                    value={category}
                /><br/>
                <label>Image URL:</label>
                <input
                    name="image"
                    type="text"
                    onChange={(e)=> setImage(e.target.value)}
                    value={image}
                /><br></br>
                <input type="submit" value="Add Phrase"/>
            </form>
        </div>
    )
}
export default connect(null, { createPhrase })(PhraseInput)