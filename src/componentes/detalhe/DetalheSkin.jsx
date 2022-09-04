import { useGeral } from "../../contextos/GeralContext";

export function DetalheSkin() {
    const { geral, setGeral } = useGeral()
    let skin = geral.detalhe.skins
    return (
        <div className="card-detalhe">
            <div>
                <h1>skins</h1>
            </div>
            <hr /><br />
            <div className="flex">

                {geral.detalhe.skins.map((skin, index) => {
                    return (

                        <div id="card-deus" className="card-deus" key={index}>
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: `url(${skin.imagem}`, backgroundRepeat:"round" }}>
                                    <div className="nome">
                                        <h1><b>{skin.nome}</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>{skin.tipo}</p>
                                <p><b>Favor: </b>{skin.favor}</p>
                                <p><b>Gema: </b>{skin.gema}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}