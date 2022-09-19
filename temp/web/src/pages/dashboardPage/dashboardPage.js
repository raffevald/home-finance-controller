import { fechGetAllAddress } from "../../stores/fetchActions/fechEnderecos";


export function DashboardPage() {
    const { data } = fechGetAllAddress();

    return (
        <div>
            {
                data?.map(enderecos => {
                    return (
                        <span>{enderecos.cidade}</span>
                    );
                })
            }
        </div>
    )
}
