import { useGeral } from "../contexts/geralContext";

type Props = {
    mostrarPesquisa: boolean;
}
export function Topo(prop: Props) {
    const { geral, setGeral }: any = useGeral();
    return (
        <div id="topo" className="topo">
            <div className="logo"><img src="/imagens/smite-logo.webp" alt="" /></div>
            {prop.mostrarPesquisa && (
                <div className="search" onClick={() => setGeral({ modal: true })}><img src="/imagens/search.png" alt="" /></div>
            )}

        </div>
    )
}