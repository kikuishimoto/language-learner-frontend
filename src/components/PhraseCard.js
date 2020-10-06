
import React from "react";
import './PhraseCard.css'



export default function PhraseCard(props) {
    const content = props.phrase.attributes.content
    const pinyin = props.phrase.attributes.pinyin
    const image = props.phrase.attributes.image
    const id = props.phrase.id

   




    return (
        <div className="flip-card">
            <div className="flip-card-inner" id={`phrase-${id}`} >
            
                <div className="flip-card-front">
                    <h2>{pinyin}</h2>
                    <img src={image} className="phrase-avatar" />
                </div>
                    
                <div className="flip-card-back" >  
                    <h4> {content} </h4>
                </div>
            </div>
        </div>
        
    )
}