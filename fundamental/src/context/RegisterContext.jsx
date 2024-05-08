import React from 'react'

// tempat untuk menampung data
export const RegisterContext = React.createContext({
    title: "",
})


// context provider = untuk memberikan akses ke RegisterContext
export const RegisterContextProvider = RegisterContext.Provider;

// context consumer = untuk menggunakan data, namun bisa juga mmenggunakan useContext
export const RegisterContextConsumer = RegisterContext.Consumer;