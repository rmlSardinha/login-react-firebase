import React, {useState, createContext } from 'react';

export const Context = createContext([0, () => {}])

export default props => {

    const [global, setGlobal] = useState({
        uid:"",
        logged: 'loading',
        profile: ''
    })

    return(
        <Context.Provider value={[global, setGlobal]}>
            {props.children}
        </Context.Provider>
        )
};

// export default Component