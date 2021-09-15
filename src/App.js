import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Prompt from './Prompt';
import Intro from './Intro';
import useArray from './useArray';

function App() {
    const [toFocus, setToFocus] = useState(false)

    const { array:cmds, push, clear } = useArray([
        {cmd: "no-cmd", result:<Intro />}
    ])

    return (
        <div className="App">
            <div id="wrapper">
                <div id="terminal" onClick={()=>{setToFocus(true)}}>
                    {cmds.map( cmd => <Prompt locked addCommand={push} clearCommand={clear} cmd={cmd.cmd} result={cmd.result} />)}
                    <Prompt toFocus={toFocus} setToFocus={setToFocus} addCommand={push} clearCommand={clear} message={cmds} />
                </div>
            </div>
        </div>
    )
}

export default App;
