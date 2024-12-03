import { Link, useNavigate } from "react-router-dom";
import { Template } from "../templates/template";
import { CardProdutoAdm } from "../components/card-produto-adm";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";
import { Loading } from "../components/loading";

type Produto = {
    _id: string
    name: string
    manufacturer: string
    category: string
    price: number,
    url1: string
    url2: string
    description: string
    user: string
    createdAt: string
    updatedAt: string
}

interface ApiError {
    message: string; 
}

export function UsrAnuncios(){
    const [meusProdutos, setMeusProdutos] = useState<Produto[]>([])
    const [loading, setLoading] = useState(false)

    const {token} = useAuth()
    const navigate = useNavigate()

    async function getMeusProdutos(){
        setMeusProdutos([])
        setLoading(true)
        try {
            const response = await api.get("/my-products",{headers: {Authorization: token}})

            setMeusProdutos(response.data)
        } catch (error) {
            const erro = error as AxiosError<ApiError>

            toast(`Falha ao carregar produtos. Erro: ${erro.response?.data.message? erro.response.data.message : erro }`, {type: 'error', autoClose:7000})
        }
        setLoading(false)
    }        

    useEffect(() => {
        if (!token){
            navigate("/login")
        }

        getMeusProdutos()
    },[])
    
    return(
        <Template>
            <ToastContainer/>
            <div className="flex justify-between items-center">
                <h1>Anúncios</h1>

                <Link to={'/form-produto'} className="bg-secondary px-8 py-2 transition-all rounded-md hover:bg-orange-600 text-white">Criar Anúncio</Link>
            </div>

            <div className="mt-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8">
                {loading && <Loading/>}
                {meusProdutos.map((item) =>(
                    <CardProdutoAdm 
                        nome={item.name} 
                        img={item.url1}
                        id={item._id} 
                        marca={item.manufacturer} 
                        preco={item.price} 
                        key={`_${item._id}`} 
                        getProdutos={getMeusProdutos}
                        notificacao={toast}
                    />
                ))}
            </div>

            <p className="text-right mt-5">
                total de {meusProdutos.length} {meusProdutos.length === 1 ? 'item' : 'itens'}
            </p>
        </Template>
    )
}


// token