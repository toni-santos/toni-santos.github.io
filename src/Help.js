function Help() {
    return (
        <>
            <p id="desc">Here are the available comamnds:</p>
            <ul>
                <li>help - shows this tooltip</li>
                <li>ls - lists the available files</li>
                <li>cat [FILE] - displays a file (cat intro.txt)</li>
                <li>clear - clears all previous input</li>
                <li>neofetch - personal description</li>
            </ul>
            <p id="desc">Keep in mind that all commands and files are case-sensitive.</p>
        </>
    )
}

export default Help;