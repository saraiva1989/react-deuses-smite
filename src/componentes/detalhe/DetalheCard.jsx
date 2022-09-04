import { useGeral } from "../../contextos/GeralContext"
import { ImagemClasse, ImagemCultura } from "./TipoDeImagem"

export function DetalheCard() {
    const { geral, setGeral } = useGeral()
    
    let tipo = ["Classe", "Cultura", "Tipo"]
    return (

        <div className="card-detalhe flex">
            {tipo.map((element, index) => {
                let imagem = ""
                let descricao = ""
                switch (element) {
                    case "Classe":
                        imagem = ImagemClasse(geral.detalhe.classe)
                        descricao = geral.detalhe.classe
                        break;
                    case "Cultura":
                        imagem = ImagemCultura(geral.detalhe.cultura)
                        descricao = geral.detalhe.cultura
                        break;
                    default:
                        imagem = "imagens/tipo.png"
                        descricao = geral.detalhe.tipo
                        break;
                }
                return (
                    <div key={index} className="item">
                        <h1>{element}</h1>
                        <p><img src={imagem} height="100px" /></p>
                        <p>{descricao}</p>
                    </div>
                )
            })
            }
        </div>
    )
}