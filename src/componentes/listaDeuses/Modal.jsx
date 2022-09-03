import { useGeral } from "../../contextos/GeralContext";
import { useLista } from "../../contextos/ListaContext";

const listaCultura = ['Todos', 'Babilônio', 'Arthuriano', 'Chinês', 'Celta', 'Egípcio', 'Grego', 'Os Grandes Antigos',
    'Hindu', 'Japonês', 'Maia', 'Nórdico', 'Polinésio', 'Romano', 'Eslavo', 'Vodu', 'Iorubá'];
const listaClasse = ['Todos', 'Guardião', 'Mago', 'Guerreiro', 'Caçador', 'Assassino']

let nome = ''
let cultura = ''
let classe = ''
let filtro = []
export function Modal() {
    const { lista, setLista } = useLista();
    const { geral, setGeral } = useGeral();

    function setNome() {
        nome = e.target.value;
    };
    function setCultura() {
        cultura = e.target.value;
    };
    function setClasse() {
        classe = e.target.value;
    };

    function pesquisa() {
        setListaDeuses({ listaDeDeuses: lista.listaDeDeuses, listaDeusesFiltro: lista.listaDeDeuses })
        filtro = lista.listaDeDeuses
        pesquisarDeus()
        pesquisarCultura()
        pesquisarClasse()
        setListaDeuses({ listaDeDeuses: lista.listaDeDeuses, listaDeusesFiltro: filtro })
    }

    function pesquisarDeus() {
        filtro = filtro.filter(x => x.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))
    }

    function pesquisarCultura() {
        if (cultura == null || cultura == 'Todos') {
            cultura = ''
        }
        filtro = filtro.filter(x => x.cultura.toLowerCase().includes(cultura.toLowerCase()))
    }

    function pesquisarClasse() {
        if (classe == null || classe == 'Todos') {
            classe = ''
        }
        filtro = filtro.filter(x => x.classe.toLowerCase().includes(classe.toLowerCase()))
    }

    return (
        <div>
            {geral.modal && (
                <div id="modal-pesquisa" className="modal-pesquisa" >
                    <h2>Pesquisa</h2>
                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                    <p>Cultura:</p>
                    <select name="cultura" id="cultura" title="cultura" value={cultura} onChange={(e) => { setCultura(e), pesquisa() }}>
                        {listaCultura.map((element, index) => {
                            return (
                                <option value={element} key={index}>{element}</option>
                            )
                        })
                        }
                    </select>

                    <p>Classe:</p>
                    <select name="classe" id="classe" title="classe" value={classe} onChange={(e) => { setClasse(e), pesquisa() }}>
                        {listaClasse.map((element, index) => {
                            return (
                                <option value={element} key={index}>{element}</option>
                            )
                        })
                        }
                    </select>
                    <p>Nome:</p>
                    <input id="nome-deus" type="text" value={nome} onChange={(e) => { setNome(e), pesquisa() }} placeholder="Pesquisar por nome" />
                    <button onClick={() => { setGeral({ modal: false }) }}>fechar</button>
                </div>
            )}
        </div>
    )
}