import React, { createContext} from "react";

export const UserContext = React.createContext();

function Context(props) {
    return(
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}
export default Context;