import './App.css';
import Prompt from './Prompt';
import Intro from './Intro';
import useArray from './useArray';

function App() {
  const { array:cmds, push, clear } = useArray([
    {cmd: "no-cmd", result:<Intro />}
  ])

  return (
    <div className="App">
        <div id="wrapper">
            <div id="terminal">
                {cmds.map( cmd => <Prompt locked addCommand={push} clearCommand={clear} cmd={cmd.cmd} result={cmd.result} />)}
                {/*{cmds.map(cmd => <Command command={cmd.cmd} result={cmd.result}/>)}*/}
                <Prompt addCommand={push} clearCommand={clear} message={cmds}/>
            </div>
        </div>
    </div>
  )
}

export default App;
