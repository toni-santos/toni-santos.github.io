import React, { useEffect, useRef, useState } from 'react';
import Neofetch from './Neofetch'
import Projects from './Projects'
import Invalid from './Invalid'
import Socials from './Socials'
import Intro from './Intro'
import Help from './Help'
import Ls from './Ls'
import './Prompt.css'

const commands = ["cat", "help", "clear", "ls", "neofetch"]
const files = ["projects.txt", "socials.txt", "intro.txt"]
const tabSug = []

function Prompt(props) {
    const [content, setContent] = useState("")
    const [suggestions, setSug] = useState("")

    const {locked, addCommand, clearCommand, cmd, result} = props

    const myInput = useRef(null)

    useEffect(() => {
        if (!locked) myInput.current.scrollIntoView()
    }, [addCommand, clearCommand, cmd, result, locked])


    function changeSug(event) {

        const [cmd_, part2, part3] = content.split(' ')

        if (event.code === "Space" || content === "") {
            tabSug.splice(0,tabSug.length)
        }

        if (!part2) {
            for (const el of commands) {
                if (content.length !== 0 && content === el.substring(0,content.length)) {
                    tabSug.push(el)
                }
            }
        } else {
            for (const el of files) {
                if (part2.length !== 0 && part2 === el.substring(0,part2.length)) {
                    tabSug.push(el)
                }
            }
        }

        if (!part3 && tabSug.length !== 0 && event.code === "ArrowRight") {
            if (!part2){
                setContent(tabSug[0])
            } else {
                setContent(cmd_ + " " + tabSug[0])
            }
        }

        if (part3) {
            tabSug.splice(0,tabSug.length)
            setSug("")
        }

        setSug(tabSug.join(' '))
        tabSug.splice(0,tabSug.length)
    }

    function pressEnter(event) {

        if (event.key === "Enter") {
            
            setContent("")
            setSug("")
            const [cmd, part2, part3] = content.split(' ')

            switch (cmd) {
                case ("cat"):
                    if (!part2) {
                        addCommand({cmd: content, result:<Invalid flag="cat_define" />})
                    } else if (part3) {
                        addCommand({cmd: content, result:<Invalid flag="cat_length" />})
                    } else {
                        switch (part2) {
                            case ("projects.txt"):
                                addCommand({cmd: content, result:<Projects />})
                                break
                            case ("socials.txt"):
                                addCommand({cmd: content, result:<Socials />})
                                break
                            case ("intro.txt"):
                                addCommand({cmd: content, result:<Intro />})
                                break
                            default:
                                addCommand({cmd: content, result:<Invalid flag="cat_exist" />})
                        }
                    }

                    break
                case ("help"):
                    if (!part2) {
                        addCommand({cmd: content, result:<Help />})
                    } else {
                        addCommand({cmd: content, result:<Invalid flag="help" />})
                    }

                    break
                case ("clear"):
                    if (!part2) {
                        clearCommand()
                    } else {
                        addCommand({cmd: content, result:<Invalid flag="clear" />})
                    }
                    
                    break
                case ("ls"):
                    if (!part2) {
                        addCommand({cmd: content, result:<Ls />})
                    } else {
                        addCommand({cmd: content, result:<Invalid flag="ls" />})
                    }

                    break
                case ("neofetch"):
                    if (!part2) {
                        addCommand({cmd: content, result:<Neofetch />})
                    } else {
                        addCommand({cmd: content, result:<Invalid flag="neofetch" />})
                    }
                    
                    break
                case ("bogos"):
                    window.location = "https://bogos-binted.pt"
                    
                    break
                default:
                    addCommand({cmd: content, result:<Invalid />})                
            }
        }
    }

    return (
        <>
            {locked ? (
                <>
                    {cmd !== "no-cmd" &&
                        <p id="comd">
                            λ  {cmd}
                        </p>
                    }
                    {result}
                </>
            ) : (
                <div id="frm">
                    λ
                    <input  type="text"
                            ref={myInput}
                            autoComplete="off" 
                            id="inpt" 
                            onKeyUp={e => {changeSug(e);pressEnter(e);}}
                            onChange={e => setContent(e.target.value)} 
                            value={content} 
                    />
                    <p id="sugs">{suggestions}</p>
                </div>
            )}
        </>
    );
}

export default Prompt;