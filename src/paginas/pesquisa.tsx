import { useEffect, useState } from "react";
import { CardProduto } from "../components/card-produto";
import { Usrtemplate } from "../templates/usr-template";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { Loading } from "../components/loading";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export function ResultadoPesquisa(){
    const [resultado,setResultado] = useState<Produto[]>([])

    const {produto} = useParams()

    const [loadingPesquisa,setLoadingPesquisa] = useState(false)

    async function getResultadoPesquisa(){
        try {
            setLoadingPesquisa(true)
            const response = await api.get(`/products?name=${produto}`)

            setResultado(response.data)
            setLoadingPesquisa(false)
        } catch (error) {
            toast(`Erro ao fazer uma pesquisa ${error}`,{type:"error"})
        }
    }

    useEffect(() =>{
        getResultadoPesquisa()
    },[])

    return(
        <Usrtemplate>
            <ToastContainer/>
            <h1>Resultado de pesquisa</h1>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5">
                {loadingPesquisa && <Loading/>}
                {resultado.map((item, index) => (
                    <CardProduto id={item._id} nome={item.name} marca={item.manufacturer} img={item.url1} preco={item.price} key={`${item.name}_${item._id}`}/>
                ))
                }
            </div>

            <p className="mt-5">
                total de {resultado.length} {resultado.length === 1 ? 'item' : 'itens'}
            </p>
        </Usrtemplate>
    )
}