import React from "react";


export default function PhraseCard(props) {
    const content = props.phrase.attributes.content
    const pinyin = props.phrase.attributes.pinyin
    const image = props.phrase.attributes.image
    const id = props.phrase.id

    return (
        <div className="card" id={`phrase-${id}`}>
            <h2>{pinyin}</h2>
            <img src={image} className="phrase-avatar" />
            <h4> {content} </h4>

        </div>
    )
}