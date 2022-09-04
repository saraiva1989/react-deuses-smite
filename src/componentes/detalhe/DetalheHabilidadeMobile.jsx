import { useState } from "react";
import { useGeral } from "../../contextos/GeralContext";
import { ModalHabilidade } from "./ModalHabilidade";

export function DetalheHabilidadeMobile() {
    const { geral, setGeral } = useGeral()
    const [video, setVideo] = useState()
    const [altura, setAltura] = useState()
    const [largura, setLargura] = useState()

    function chamarModalHabilidade(video, altura, largura) {
        setVideo(video)
        setAltura(altura)
        setLargura(largura)
        setGeral({ detalhe: geral.detalhe, modal: true })
    }
    return (
        <div className="card-detalhe">
            {
                geral.modal &&
                (
                    <ModalHabilidade video={video} altura={altura} largura={largura} />
                )
            }
            <div>
                <h1>Habilidades</h1>
            </div>
            <hr /><br />
            <div id="conteudo-habilidade">

                {
                    geral.detalhe.habilidades.map((element, index) => {
                        return (
                            <div key={index}>
                                <h1>{element.nome}</h1>
                                <p><img src={element.imagem} alt="" srcSet="" /></p>
                                <div className="historia"><b>Descrição Habilidade: </b>{element.descricao}</div>
                                <br />
                                <b><p className="destaque-habilidade">Dano da habilidade:</p></b>

                                {
                                    element.infoPoderHabilidades.map((info, index) => {
                                        return (
                                            <ul key={index}>
                                                <li><b>{info.descricao}</b>{info.valor}</li>
                                            </ul>
                                        )
                                    })
                                }

                                <br />
                                <b><p className="destaque-habilidade">informação da habilidade:</p></b>

                                {
                                    element.infoHabilidades.map((infoHabilidade, index) => {
                                        return (
                                            <ul key={index}>
                                                <li><b>{infoHabilidade.descricao}</b> {infoHabilidade.valor}</li>
                                            </ul>
                                        )
                                    })
                                }

                                <br />
                                <p style={{ textAlign: "center" }}>
                                    <button type="button" className="btn-video" onClick={() => chamarModalHabilidade(element.urlVideo, 500, 700)}>
                                        <span>Video Habilidade</span>
                                    </button></p>
                                <br />
                                <hr className="separador-habilidade" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}