import { useEffect, useState } from "react";
import { CardProduto } from "../components/card-produto";
import { Template } from "../templates/template";
import { Link, useParams } from "react-router-dom";
import { api } from "../services/api";
import { Loading } from "../components/loading";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoSearch } from "react-icons/io5";

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
    const [pesquisa,setPesquisa] = useState('')

    async function getResultadoPesquisa(){
        setResultado([])
        try {
            setLoadingPesquisa(true)
            const response = await api.get(`/products?name=${produto}`)

            setResultado(response.data)
            setLoadingPesquisa(false)
        } catch (error) {
            toast(`Erro ao fazer uma pesquisa ${error}`,{type:"error"})
        }
    }

    function ordenarProdutos(tipo: "ascending" | "descending"){
        const lista = [...resultado]
        setLoadingPesquisa(true)

        if (tipo === "ascending")
            lista.sort((a,b) => a.price - b.price )

        if (tipo === "descending")
            lista.sort((a,b) => b.price - a.price )

        console.log("lista", lista);
        
        setResultado(lista)
        setLoadingPesquisa(false)
    }

    useEffect(() =>{
        getResultadoPesquisa()
    },[produto])

    return(
        <Template>
            <ToastContainer/>
            <h1>Resultado de pesquisa</h1>
            
            <div className="flex justify-between items-center">
                <p>
                    Ordenar por: {" "} 
                    <button type="button" onClick={() => ordenarProdutos("ascending")} className="text-primary">Menor preço</button> | {" "}
                    <button type="button" onClick={() => ordenarProdutos("descending")} className="text-primary">Maior preço</button>
                </p>

                <div className="flex flex-row border-2 h-[45px] rounded-md items-center">
                    <input onChange={(event) => setPesquisa(event.target.value)} className="flex-1 h-full p-3" placeholder="Estou buscado por..."/>
                        <Link  to={`/pesquisa/${pesquisa}`} className="px-2">
                            <IoSearch size={30} />
                        </Link>
                </div>
            </div>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5">
                {loadingPesquisa && <Loading/>}
                {resultado.map((item) => (
                    <CardProduto id={item._id} nome={item.name} marca={item.manufacturer} img={item.url1} preco={item.price} key={`${item.name}_${item._id}`}/>
                ))
                }
            </div>

            <p className="mt-5">
                total de {resultado.length} {resultado.length === 1 ? 'item' : 'itens'}
            </p>
        </Template>
    )
}