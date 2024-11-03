import react, { useState } from "react";

function useFlip() {
    const [state, setState] = useState(true);
    const toggleFlip = () => {
        setState((state) => !state);
    };
    return [state, toggleFlip];
}

export default useFlip;
