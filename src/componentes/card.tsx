import { Link } from "react-router-dom";
import { useListaDeuses } from "../contexts/listaDeusesContext";
import { useGeral } from "../contexts/geralContext";
import { cardProp } from "../models/types";


let url: string = "/detalhe-deus"
let sharedButton: boolean = false
detalhes()
function detalhes() {
    console.log(window.innerWidth)
    if (window.innerWidth < 1025) {
        url = '/detalhe-deusm'
        sharedButton = true
    }
}

export function Card(conteudo: cardProp) {
    const { detalhe, setDetalhe }: any = useListaDeuses();

    const compartilhar = (nomeEN: string, nome: string, id:number) => {
        console.log(nomeEN + nome)
        if (navigator.share) {
            var url = `/detalhe-deusm?id=${id}`
            navigator.share({
                title: 'Deuses Smite',
                text: `Veja mais sobre a ${nome}`,
                url: url,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            console.log('Share not supported on this browser, do it the old way.');
        }
    }

    return (
        <div id="card-deus" className="card-deus">
            <div className="avatar">
                <img src={conteudo.imagem} className="avatar-background" loading="lazy" />
                <div className="nome">
                    <h1><b>{conteudo.nome}</b></h1>
                </div>

            </div>

            <div className="detalhe-deus">
                <p><b>{conteudo.titulo}</b></p>
                <p><b>Cultura:</b> {conteudo.cultura}</p>
                <p><b>Classe:</b> {conteudo.classe}</p>
                <p><b>Tipo:</b> {conteudo.tipo}</p>
                <div className="btn-padrao">
                    {/* <Link to={url} state={{ id: conteudo.id }}>Mais Info</Link> */}
                    <Link to={url+'?id='+conteudo.id}>Mais Info</Link>
                </div>
                {sharedButton && (
                    <div className="btn-padrao" id="compartilhar" onClick={() => compartilhar(conteudo.nomeEN, conteudo.nome, conteudo.id)} >
                        <a>compartilhar</a>
                    </div>
                    )}

            </div>
        </div >
    )
}