import { useState } from "react"
import { useGeral } from "../../contextos/GeralContext"
import { ModalHabilidade } from "./ModalHabilidade"


export function DetalheHabilidade() {
    const { geral, setGeral } = useGeral()
    const [video, setVideo] = useState()
    const [altura, setAltura] = useState()
    const [largura, setLargura] = useState()

    function chamarModalHabilidade(video, altura, largura) {
        setVideo(video)
        setAltura(altura)
        setLargura(largura)
        setGeral({detalhe:geral.detalhe, modal: true})
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
            <table>
                <thead>
                    <tr>
                        <th className="text-left"></th>
                        <th className="text-left">
                            Nome
                        </th>
                        <th className="text-left">
                            Descrição
                        </th>
                        <th className="text-left">
                            info Habilidade
                        </th>
                        <th className="text-left">
                            tipo Habilidade
                        </th>
                        <th className="text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        geral.detalhe.habilidades.map((element, index) => {
                            return (

                                <tr key={index}>
                                    <td>
                                        <div><img src={element.imagem} alt="" srcSet="" /></div>
                                    </td>
                                    <td>{element.nome}</td>
                                    <td className="descricao-habilidade">{element.descricao}</td>

                                    <td>
                                        {
                                            element.infoPoderHabilidades.map((info, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li><b>{info.descricao}</b>{info.valor}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            element.infoHabilidades.map((infoHabilidade, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li><b>{infoHabilidade.descricao}</b> {infoHabilidade.valor}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td><button type="button" className="btn-video" onClick={() => chamarModalHabilidade(element.urlVideo, 500, 700)}><span>
                                        Video
                                        Habilidade
                                    </span></button></td>
                                </tr>

                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}