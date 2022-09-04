import { useGeral } from "../../contextos/GeralContext"

export function DetalheHistoria() {
    const { geral, setGeral } = useGeral()

    return (
        <div className="card-detalhe">
            <div>
                <h1>História</h1>
            </div>
            <hr />
            <div className="embed-responsive"><iframe src={`https://www.youtube.com/embed/${geral.detalhe.urlVideoHistoria}?showinfo=0`} allowFullScreen></iframe></div>
            <div className="conteudo-detalhe">
                <div dangerouslySetInnerHTML={{__html: geral.detalhe.historia.replaceAll('\\n', '<br>').replaceAll('"', '')}} />
            </div>
        </div>
    )
}