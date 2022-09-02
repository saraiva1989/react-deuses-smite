import React, { useState } from "react";

export const ListaDeusesContext = React.createContext({})

export const ListaDeusesProvider = (props: any) => {
    const [listaDeuses, setListaDeuses] = useState({
        filtroCultura: 'todos',
        filtroClasse: 'todos',
        filtroNome: '',
        listaDeDeuses: [],
        listaDeusesFiltro: []
    })

    return (
        <ListaDeusesContext.Provider value={{ listaDeuses, setListaDeuses }}>
            {props.children}
        </ListaDeusesContext.Provider>
    )
}

export const useListaDeuses = () => React.useContext(ListaDeusesContext)