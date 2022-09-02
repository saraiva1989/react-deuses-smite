import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { DetalheDeus } from "./paginas/detalhe-deus";
import { DetalheDeusm } from "./paginas/detalhe-deusm";
import { ListaDeuses } from "./paginas/lista-deuses";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/detalhe-deus" element={<DetalheDeus />} />
                <Route path="/lista-deuses" element={<ListaDeuses />} />
                <Route path="/detalhe-deusm" element={<DetalheDeusm />} />
            </Routes>
        </Router>
    )
}