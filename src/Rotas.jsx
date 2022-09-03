import { 
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { DeusDetalhe } from "./paginas/DeusDetalhe";
import { DeusDetalheMobile } from "./paginas/DeusDetalheMobile";
import { ListaDeuses } from "./paginas/ListaDeuses";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/detalhe-deus" element={<DeusDetalhe />} />
                <Route path="/" element={<ListaDeuses />} />
                <Route path="/detalhe-deusm" element={<DeusDetalheMobile />} />
            </Routes>
        </Router>
    )
}