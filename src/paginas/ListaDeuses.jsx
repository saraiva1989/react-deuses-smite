import React, { useEffect } from "react"
import { CardLista } from "../componentes/listaDeuses/CardLista"
import { Loading } from "../componentes/generico/Loading"
import { Modal } from "../componentes/listaDeuses/Modal"
import { Topo } from "../componentes/generico/Topo"
import { useGeral } from "../contextos/GeralContext"
import { useLista } from "../contextos/ListaContext"

export function ListaDeuses() {
    const { geral, setGeral } = useGeral();
    const { lista, setLista } = useLista();

    useEffect(() => {
        setGeral({ loading: true })
        async function fetchData() {
            const result = await fetch('https://smite.azurewebsites.net//api/Deuses/Listar')
            const data = await result.json()
            setLista({ listaDeDeuses: data, listaDeusesFiltro: data })
            setGeral({ loading: false })
        }
        fetchData()
    }, [])

    return (
        <div>
            <Loading />
            <Modal />
            <div id="principal">
                <Topo mostrarPesquisa={true} classeCss={"logo"} />
                <div id="conteudo" onClick={() => setGeral({ modal: false })}>
                    {
                        lista.listaDeusesFiltro.map((element, index) => {
                            return (
                                <CardLista key={index} {...element} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}