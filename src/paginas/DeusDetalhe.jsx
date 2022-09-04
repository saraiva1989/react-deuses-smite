import { useEffect, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { DetalheBanner } from "../componentes/detalhe/DetalheBanner";
import { DetalheCard } from "../componentes/detalhe/DetalheCard";
import { DetalheHabilidade } from "../componentes/detalhe/DetalheHabilidade";
import { DetalheHabilidadeMobile } from "../componentes/detalhe/DetalheHabilidadeMobile";
import { DetalheHistoria } from "../componentes/detalhe/DetalheHistoria";
import { DetalheSkin } from "../componentes/detalhe/DetalheSkin";
import { Loading } from "../componentes/generico/Loading";
import { Topo } from "../componentes/generico/Topo";
import { useGeral } from "../contextos/GeralContext";

let slug = ''
let geralContext = {
    loading: false,
    detalhe: {}

}
export function DeusDetalhe() {
    const { geral, setGeral } = useGeral()
    const [mostrarMobile, setMostrarMobile] = useState(false)
    const location = useLocation();
    //   const { id }: any = location.state; https://smite.azurewebsites.net//api/Deuses/Detalhes?slug=The%20Morrigan
    const getSlug = () => {
        slug = location.search.split('=')[1]
    }
    getSlug()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        geralContext.loading = true
        setGeral({ ...geralContext })
        async function fetchData() {
            const result = await fetch(`https://smite.azurewebsites.net/api/Deuses/Detalhes?slug=${slug}`)
            const data = await result.json()
            geralContext.detalhe = data
            geralContext.loading = false
            setGeral({ ...geralContext })

            if (window.innerWidth < 1025) {
                setMostrarMobile(true)
            }
        }
        fetchData()
    }, [])

    if (geral == undefined || geral.detalhe == undefined || geral.detalhe.historia == undefined) {
        return (
            <Loading />
        )
    }


    return (
        <div>
            <Topo classeCss={"logo detalhe-logo"} />
            <div id="conteudo-detalhe">
                <DetalheBanner />
                <DetalheCard />
                <DetalheHistoria />
                {
                    mostrarMobile &&
                    (<DetalheHabilidadeMobile />)
                }
                {
                    !mostrarMobile &&
                    (<DetalheHabilidade />)
                }
                <DetalheSkin />
            </div>
        </div>
    );
}