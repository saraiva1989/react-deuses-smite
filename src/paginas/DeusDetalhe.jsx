import { useLocation } from "react-router-dom";

let id = ''
export function DeusDetalhe() {
    const location = useLocation();
    //   const { id }: any = location.state;
    const getId = () => {
        id = location.search.split('=')[1]
    }
    getId()
    return (
        <div>
            <div id="conteudo-detalhe">
                <div className="banner">
                    <div className="banner-img" style={{ backgroundImage: 'url(https://cms.smitegame.com/wp-content/uploads/2017/07/TheMorrigan.jpg)' }}>
                        <div className="nome">
                            <h1><b>A Morrigan</b></h1>
                            <p>Rainha Fantasma</p>
                        </div>
                    </div>
                </div>

                <div className="card-detalhe flex">
                    <div className="item">
                        <h1>Classe</h1>
                        <p><img src="imagens/mago.png" height="100px" /></p>
                        <p>Mago</p>
                    </div>
                    <div className="item">
                        <h1>Cultura</h1>
                        <p><img src="imagens/celta.png" height="100px" /></p>
                        <p>Celta</p>
                    </div>
                    <div className="item">
                        <h1>Tipo</h1>
                        <p><img src="imagens/tipo.png" height="100px" /></p>
                        <p>Atirador, Mágico</p>
                    </div>
                </div>

                <div className="card-detalhe">
                    <div>
                        <h1>História</h1>
                    </div>
                    <hr />
                    <div className="embed-responsive"><iframe src="https://www.youtube.com/embed/ymIXYg1zv24?showinfo=0" allowFullScreen></iframe></div>
                    <div className="conteudo-detalhe">O destino é uma coisa incomum. Uma força invisível que prevê
                        cada ação de cada ser vivo. Muitas divindades conseguem enxergar o destino, e reconhecem
                        o fluxo deste plano. Entretanto, há apenas uma que clama controle sobre ele. Ela é muitas
                        deusas, com muitos nomes e formas, mas apenas um título: A Morrigan. <br /><br />
                        Anu, Macha, Badb. Individualmente estas três Deusas eram irmãs, progenitoras da soberania,
                        guerra e morte. Elas cuidavam da fauna, dos soldados e eram guias dos mortos. É desconhecido o
                        que as unia. Alguns dizem que era uma maldição. Outros, que era desprezo, algum poder das trevas.
                        Mas agora elas são uma só. <br /><br /> Ela é vista em diversas formas. A sedutora, a velha,
                        o corvo - e a pior de todas - a lavadeira no rio. Um fim violento é profetizado para aqueles
                        que a testemunham lavando sua armadiura. <br /><br /> Sutil e manipuladora, não existem
                        guerras que não foram incitadas por ela. Não existem últimos suspiros que ela não coletou.
                        Até mesmo essa guerra, a guerra entre deuses, deve ter sido secretamente obra sua. Então,
                        cuidado aos que a contemplam, pois A Morrigan controla o seu destino.</div>
                </div>

                <div className="card-detalhe">
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
                            <tr>
                                <td>
                                    <div><img src="https://webcdn.hirezstudios.com/smite/god-abilities/deadly-aspects.jpg" alt="" srcSet="" /></div>
                                </td>
                                <td>Aspectos Mortíferos</td>
                                <td className="descricao-habilidade">Quando ativada, A Morrigan começa a combinar o poder de todas as suas três formas. Quando ativada novamente, elas causam dano simultaneamente e atordoam inimigos à sua frente. Os campos de selva tomam 30% de dano extra.</td>
                                <td>

                                    <ul>
                                        <li><b>Dano:</b> 80/135/190/245/300 (+80% do seu poder mágico)</li>
                                    </ul>

                                    <ul>
                                        <li><b>Duração do Atordoamento:</b> 1s</li>
                                    </ul>

                                </td>
                                <td>

                                    <ul>
                                        <li><b>Habilidade:</b> Carregamento</li>
                                    </ul>

                                    <ul>
                                        <li><b>Afeta:</b> Inimigos</li>
                                    </ul>

                                    <ul>
                                        <li><b>Dano:</b> Mágico</li>
                                    </ul>

                                    <ul>
                                        <li><b>Alcance:</b> 30</li>
                                    </ul>

                                </td>
                                <td><button type="button" className="btn-video" onClick={() => "componentModalHabilidade('Fv4uqfsb66I', 500, 700)"}><span>
                                    Video Habilidade
                                </span></button></td>
                            </tr>

                            <tr>
                                <td>
                                    <div><img src="https://webcdn.hirezstudios.com/smite/god-abilities/dark-omen.jpg" alt="" srcSet="" /></div>
                                </td>
                                <td>Presságio Sombrio</td>
                                <td className="descricao-habilidade">A Morrigan lança uma onda de magia negra que causa dano nos inimigos, dano bônus em lacaios e amaldiçoa deuses inimigos por 8s. Deuses amaldiçoados receberão dano bônus na próxima vez que forem atingidos por qualquer habilidade de dano.</td>
                                <td>

                                    <ul>
                                        <li><b>Dano Inicial:</b> 40/70/100/130/160 (40% do seu poder mágico)</li>
                                    </ul>

                                    <ul>
                                        <li><b>Dano Bônus em Lacaios:</b> 40/70/100/130/160 (+20% do seu poder mágico)</li>
                                    </ul>

                                    <ul>
                                        <li><b>Dano Bônus em Deues:</b> 40/70/100/130/160 (+40% do seu poder mágico)</li>
                                    </ul>

                                </td>
                                <td>

                                    <ul>
                                        <li><b>Habilidade:</b> Projétil</li>
                                    </ul>

                                    <ul>
                                        <li><b>Afeta:</b> Inimigos</li>
                                    </ul>

                                    <ul>
                                        <li><b>Dano:</b> Mágico</li>
                                    </ul>

                                    <ul>
                                        <li><b>Alcance:</b> 70</li>
                                    </ul>

                                </td>
                                <td><button type="button" className="btn-video" onClick={() => "componentModalHabilidade('IWifb6oToJo', 500, 700)"}><span>
                                    Video Habilidade
                                </span></button></td>
                            </tr>

                            <tr>
                                <td>
                                    <div><img src="https://webcdn.hirezstudios.com/smite/god-abilities/confusion.jpg" alt="" srcSet="" /></div>
                                </td>
                                <td>Confusão</td>
                                <td className="descricao-habilidade">A Morrigan cria um fantasma de si mesma enquanto fica invisível e aumenta seu movimento.  O fantasma corre para a área indicada, sem causar dano, e morrendo ao receber dano.  Se A Morrigan atacar ou receber dano ela será revelada e perderá o bônus de movimento.</td>
                                <td>

                                    <ul>
                                        <li><b>Duração:</b> 3/3.5/4/4.5/5s</li>
                                    </ul>

                                    <ul>
                                        <li><b>Movimento:</b> 30/32.5/35/37.5/40%</li>
                                    </ul>

                                </td>
                                <td>

                                    <ul>
                                        <li><b>Habilidade:</b> Invisibilidade</li>
                                    </ul>

                                    <ul>
                                        <li><b>Afeta:</b> Você</li>
                                    </ul>

                                    <ul>
                                        <li><b>Alcance:</b> 80</li>
                                    </ul>

                                </td>
                                <td><button type="button" className="btn-video" onClick={() => "componentModalHabilidade('ldxCG5uHqfE', 500, 700)"}><span>
                                    Video Habilidade
                                </span></button></td>
                            </tr>

                            <tr>
                                <td>
                                    <div><img src="https://webcdn.hirezstudios.com/smite/god-abilities/changeling.jpg" alt="" srcSet="" /></div>
                                </td>
                                <td>A Troca</td>
                                <td className="descricao-habilidade">A Morrigan seleciona um deus da partida atual e torna-se uma cópia dele e livra-se de todos os efeitos. Ela copia todos os atributos atuais e pode usar todas suas habilidades do deus enquanto durar essa habilidade. Ela mantém suas próprias relíquias e não pode usar consumíveis.

                                    O rank das suas habilidades será transferido para as habilidades do deus que ela copiar. O intervalo das habilidades aumentará para casar com o intervalo da suprema do deus alvo. Você pode passar por cima de um alvo e cancelar a pré-seleção, para que você não tenha que usar o cursor na ativação</td>
                                <td>

                                    <ul>
                                        <li><b>Duração:</b> 10s</li>
                                    </ul>

                                </td>
                                <td>

                                    <ul>
                                        <li><b>Habilidade:</b> Transformação</li>
                                    </ul>

                                    <ul>
                                        <li><b>Afeta:</b> Você</li>
                                    </ul>

                                </td>
                                <td><button type="button" className="btn-video" onClick={() => "componentModalHabilidade('NSkv9b3bc18', 500, 700)"}><span>
                                    Video Habilidade
                                </span></button></td>
                            </tr>

                            <tr>
                                <td>
                                    <div><img src="https://webcdn.hirezstudios.com/smite/god-abilities/doomsayer.jpg" alt="" srcSet="" /></div>
                                </td>
                                <td>Clamor do Destino</td>
                                <td className="descricao-habilidade">O terceiro golpe da cadência de A Morrigan explodirá, causando dano em todos os inimigos no alcance e amaldiçoando todos os inimigos atingidos. Inimigos amaldiçoados receberão dano adicional de ataques básicos por uma duração.</td>
                                <td>

                                    <ul>
                                        <li><b>Dano:</b> 9% da vida máxima do alvo</li>
                                    </ul>

                                    <ul>
                                        <li><b>Duração:</b> 3s</li>
                                    </ul>

                                </td>
                                <td>

                                    <ul>
                                        <li><b>Habilidade:</b> Melhoria de ataques básicos</li>
                                    </ul>

                                    <ul>
                                        <li><b>Afeta:</b> Inimigos</li>
                                    </ul>

                                    <ul>
                                        <li><b>Dano:</b> Mágico</li>
                                    </ul>

                                    <ul>
                                        <li><b>Raio:</b> 10</li>
                                    </ul>

                                </td>
                                <td><button type="button" className="btn-video" onClick={() => "componentModalHabilidade('T2ZPgCA8r2o', 500, 700)"}><span>
                                    Video Habilidade
                                </span></button></td>
                            </tr>
                        </tbody></table>
                </div>

                <div className="card-detalhe">
                    <div>
                        <h1>skins</h1>
                    </div>
                    <hr /><br />
                    <div className="flex">


                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_standard-the-morrigan.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>A Morrigan Padrão</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Normal</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>0</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Corvo Pálido</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Limitada</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>0</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Demonibronze</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Exclusivo</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>0</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Dourada</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Normal</p>
                                <p><b>Favor: </b>9500</p>
                                <p><b>Gema: </b>200</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Feiticeira Escarlate</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Normal</p>
                                <p><b>Favor: </b>9500</p>
                                <p><b>Gema: </b>100</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Invocadora</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Exclusivo</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>1200</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Ladina Silvestre</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Limitada</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>0</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Metaleira</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Exclusivo</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>0</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Profetisa</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Exclusivo</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>0</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Rav3n</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Exclusivo</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>1200</p>
                            </div>
                        </div>



                        <div id="card-deus" className="card-deus">
                            <div className="avatar">
                                <div className="avatar-background" style={{ backgroundImage: "url('https://webcdn.hirezstudios.com/smite/god-skins/the_morrigan_pale-raven.jpg')" }}>
                                    <div className="nome">
                                        <h1><b>Sensei Mafiosa</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p>Exclusivo</p>
                                <p><b>Favor: </b>0</p>
                                <p><b>Gema: </b>1200</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}