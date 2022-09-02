import { useLocation } from "react-router-dom";

let id = ''
export function DetalheDeusm() {
    const location = useLocation();
//   const { id }: any = location.state;
const getId = () => {
    id = location.search.split('=')[1]
}
getId()
    return (
        <div>
            <h1>Detalhe Deus Mobile {id}</h1>
        </div>
    );
}