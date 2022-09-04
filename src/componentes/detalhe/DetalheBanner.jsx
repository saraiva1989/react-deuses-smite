import { useGeral } from "../../contextos/GeralContext"

export function DetalheBanner() {
    const {geral, setGeral} = useGeral()
    
    return (
        <div className="banner">
            <div className="banner-img" style={{ backgroundImage: `url(${geral.detalhe.urlBanner})` }}>
                <div className="nome">
                    <h1><b>{geral.detalhe.nome}</b></h1>
                    <p>Rainha Fantasma</p>
                </div>
            </div>
        </div>
    )
}