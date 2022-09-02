import React, { useEffect } from "react"
import { Card } from "../componentes/card"
import { Loading } from "../componentes/loading"
import { Modal } from "../componentes/modal"
import { useGeral } from "../contexts/geralContext"
import { useListaDeuses } from "../contexts/listaDeusesContext"
import { cardProp } from "../models/types"

export function ListaDeuses() {
    const { geral, setGeral }: any = useGeral();
    const { listaDeuses, setListaDeuses }: any = useListaDeuses();

    useEffect(() => {
        setGeral({loading: true})
        const fetchData = async () => {
            const result = await fetch('https://smite.azurewebsites.net//api/Deuses/Listar')
            const data = await result.json()
            console.log(data)
            setListaDeuses({listaDeDeuses:data, listaDeusesFiltro: data})
            setGeral({loading: false})
        }
        fetchData()
    }, [])

    return (
        <div>
            <Loading />
            <Modal />
            <div id="principal">
                <div id="topo" className="topo">
                    <div className="logo"><img src="../src/img/smite-logo.webp" alt="" /></div>
                    <div className="search" onClick={() => setGeral({ modal: true })}><img src="../src/img/search.png" alt="" /></div>
                </div>
                <div id="conteudo" onClick={() => setGeral({ modal: false })}>
                    {
                        listaDeuses.listaDeusesFiltro.map((element: cardProp, index: number) => {
                            return (
                                <Card key={index} {...element} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}