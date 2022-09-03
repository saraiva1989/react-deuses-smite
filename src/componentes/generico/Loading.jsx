import { useGeral } from "../../contextos/GeralContext";
export function Loading() {
    const { geral } = useGeral()
    return (
        <div>
            {geral.loading &&
                (
                    <div id="loading" className="loader"></div>
                )
            }
        </div>
    )
}