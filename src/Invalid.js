import './Invalid.css'

function Invalid(props){

        let message=""

        const {flag} = props

        switch (flag) {
            case ('cat_length'):
                message = <p id="warn">The <b>cat</b> command only takes one argument!</p>
                break
            case ('cat_exist'):
                message = <p id="warn">That file doesn't exist!<br/>Check existing files with <b>ls</b></p>
                break
            case ('cat_define'):
                message = <p id="warn">The <b>cat</b> command requires one argument!</p>
                break
            case ('ls'):
                message = <p id="warn">The <b>ls</b> command takes no arguments!</p>
                break;
            case ('help'):
                message = <p id="warn">The <b>help</b> command takes no arguments!</p>
                break
            case ('clear'):
                message = <p id="warn">The <b>clear</b> command takes no arguments!</p>
                break
            case ('intro'):
                message = <p id="warn">The <b>intro</b> command takes no arguments!</p>
                break
            default:
                message = <p id="warn">That's not a valid command!</p>
        }

        return(message)
}

export default Invalid;