import React, { useState } from "react";

export const GeralContext = React.createContext({})

export const GeralProvider = (props) => {
    const [geral, setGeral] = useState({
        loading: false,
        modal: false,
    })

    return (
        <GeralContext.Provider value={{ geral, setGeral }}>
            {props.children}
        </GeralContext.Provider>
    )
}

export const useGeral = () => React.useContext(GeralContext)