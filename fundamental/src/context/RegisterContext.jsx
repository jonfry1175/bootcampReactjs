import React, { useState } from 'react'

// tempat untuk menampung data
export const RegisterContext = React.createContext({
    title: "",
    setTitle: () => {},
})


// context provider = untuk memberikan akses ke RegisterContext
export const RegisterContextProvider = (props) => {
    const [stateTitle, setStateTitle] = useState("Halo Ngabb");

    // setStateTitle = agar data bisa diubah dari luar

    return (
        <RegisterContext.Provider value={{ title: stateTitle, setTitle: setStateTitle }} >
            {props.children}
        </RegisterContext.Provider>
    )
}

// context consumer = untuk menggunakan data, namun bisa juga mmenggunakan useContext
export const RegisterContextConsumer = RegisterContext.Consumer;