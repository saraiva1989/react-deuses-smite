import { useGeral } from "../../contextos/GeralContext";

export function Topo(props) {
    const { geral, setGeral } = useGeral();

    return (
        <div id="topo" className="topo">
            <div className={props.classeCss}><img src="/imagens/smite-logo.webp" alt="" /></div>
            {props.mostrarPesquisa && (
                <div className="search" onClick={() => setGeral({ modal: true })}><img src="/imagens/search.png" alt="" /></div>
            )}
            {!props.mostrarPesquisa && (
            <a href=""><div className="back"><img src="imagens/back.png" alt="" /></div></a>
            )}
        </div>
    )
}