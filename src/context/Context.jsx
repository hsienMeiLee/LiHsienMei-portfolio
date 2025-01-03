import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [lang, setLang] = useState("eng");

    const contextValue = {
        lang, setLang
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
