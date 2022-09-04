import { useGeral } from "../../contextos/GeralContext"

export function ModalHabilidade(props) {
    const {geral, setGeral} = useGeral()
    return (
        <div id="modal" className="modal" style={{display: "block"}}>
            <iframe src={`https://www.youtube.com/embed/${props.video}?autoplay=1`} allowFullScreen height={props.altura} width={props.largura} frameBorder="0"></iframe>
            <div className="btn-padrao fechar" id="fechar">
                <a onClick={() => setGeral({detalhe:geral.detalhe, modal: false})}>Fechar</a>
            </div>
        </div>
    )
}