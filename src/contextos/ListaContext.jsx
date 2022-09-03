import React, { useState } from "react";

export const ListaContext = React.createContext({})

export const ListaProvider = (props) => {
    const [lista, setLista] = useState({
        filtroCultura: 'todos',
        filtroClasse: 'todos',
        filtroNome: '',
        listaDeDeuses: [],
        listaDeusesFiltro: []
    })

    return (
        <ListaContext.Provider value={{ lista, setLista }}>
            {props.children}
        </ListaContext.Provider>
    )
}

export const useLista = () => React.useContext(ListaContext)