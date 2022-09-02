import { useGeral } from "../contexts/geralContext";

export function Loading() {
    const { geral }: any = useGeral();
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