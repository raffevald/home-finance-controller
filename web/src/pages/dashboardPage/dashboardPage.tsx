import { fechGetAllAddress } from "../../stores/fetchActions/fechEnderecos";

interface endereco {
    codigo: number
    pais: string
    estado: string
    cidade: string
    bairro: string
    logradouro: string
    numero: string
    referencia: string
    data_de_cadastros: Date
    data_de_atualizacao: Date
    usuario_que_cadastro: string
    fk_status: number
}

export function DashboardPage() {
    const { data } = fechGetAllAddress<endereco[]>();

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
