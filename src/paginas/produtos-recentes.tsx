import { useEffect, useState } from "react";
import { CardProduto } from "../components/card-produto";
import { api } from "../services/api";
import { Usrtemplate } from "../templates/usr-template";
import { Loading } from "../components/loading";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

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


export function ListaProdutosRecentes(){
    const [produtosRecentes, setProdutosRecentes] = useState<Produto[]>([])
    const [loadingProdutosRecentes, setLoadingProdutosRecentes] = useState(false)

    const [pesquisa,setPesquisa] = useState('')

    async function getProdutosRecentes(){
        try {
            setLoadingProdutosRecentes(true)

            const response = await api.get('/products/recents-all')

            setProdutosRecentes(response.data)
            setLoadingProdutosRecentes(false)
        } catch (error) {
            toast(`houve um erro ao buscar todos os produtos recentes ${error}` ,{type: "error"})
        }
    } 

    useEffect(() =>{
        getProdutosRecentes()
    },[])

    return(
        <Usrtemplate>
            <ToastContainer/>
            <div className="flex justify-between items-center">
                <h1>Lista de produtos</h1>

                <div className="flex flex-row border-2 h-[45px] rounded-md items-center">
                    <input onChange={(event) => setPesquisa(event.target.value)} className="flex-1 h-full p-3" placeholder="Estou buscado por..."/>
                        <Link to={`/pesquisa/${pesquisa}`} className="px-2">
                            <IoSearch size={30} />
                        </Link>
                </div>
            </div>
            
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5">
                {loadingProdutosRecentes && <Loading/>}
                {produtosRecentes.map((item, index) => (
                    <CardProduto id={item._id} nome={item.name} preco={item.price} img={item.url1} marca={item.manufacturer} key={item._id}/>
                ))}
            </div>
        </Usrtemplate>
    )
}