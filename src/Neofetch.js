import React, { useEffect, useState } from 'react';
import './Neofetch.css'
import me from './assets/me.jpg'
import swag from './assets/swag.png'

function Neofetch() {
    const [count, setCount] = useState(0)
    const [img, setImg] = useState(me)

    useEffect(() => {
        if ( count === 100 ) setImg(swag)
        }, [count, setImg]);
    
    return(
        <>
            <div id="neoWrapper">
                <img id="imgMe" alt="profile" src={img}  onClick={() => setCount(count + 1)} draggable="false" />
                <div id="neoDesc">
                    <ul className="neoUl">
                        <li>pronouns: any</li>
                        <li>age: 20</li>
                        <li>from: portugal</li>
                        <li>studying: informatics and computation</li>
                        <li>@: feup</li>
                        <li>year: 3rd</li>
                        <li>interests: <a href="https://www.last.fm/user/n4gi7o" rel="noreferrer" target="_blank">music</a> mmorpgs photography & game development</li>
                        <li>technologies: html css js figma react python c++</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Neofetch;