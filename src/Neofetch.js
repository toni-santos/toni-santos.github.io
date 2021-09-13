import React, { useEffect, useState } from 'react';
import './Neofetch.css'
import me from './assets/me.jpg'
import swag from './assets/swag.png'

function Neofetch() {
    const [count, setCount] = useState(0)
    const [img, setImg] = useState(me)

    useEffect(() => {
        if ( count == 100 ) setImg(swag)
        }, [count, setImg, swag]);
    
    return(
        <>
            <div id="neoWrapper">
                <img id="imgMe" src={img}  onClick={() => setCount(count + 1)} draggable="false" />
                <div id="neoDesc">
                    <ul className="neoUl">
                        <li>pronouns: any</li>
                        <li>age: 19</li>
                        <li>from: portugal</li>
                        <li>studying: informatics and computation</li>
                        <li>@: feup</li>
                        <li>year: 2nd</li>
                        <li>interests: <a href="https://rateyourmusic.com/~nitox" target="_blank">music</a> <a href="https://myanimelist.net/profile/nixto" target="_blank">anime</a> mmorpgs photography</li>
                        <li>technologies: python c++ html css js react</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Neofetch;