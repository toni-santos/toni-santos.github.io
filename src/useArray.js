import { useState } from "react";

function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    function push(element){
        setArray(e => [...e, element])
    }

    function clear() {
        setArray([])
    }

    
    return {array, set: setArray, push, clear}
}

export default useArray;
