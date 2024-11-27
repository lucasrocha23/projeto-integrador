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


export function ListaTodosProdutos(){
    const [todosProdutos, setTodosProdutos] = useState<Produto[]>([])
    const [loadingTodosProdutos, setLoadingTodosProdutos] = useState(false)

    const [pesquisa,setPesquisa] = useState('')

    async function getTodosProdutos(){
        try {
            setLoadingTodosProdutos(true)

            const response = await api.get('/products')

            setTodosProdutos(response.data)
            setLoadingTodosProdutos(false)
        } catch (error) {
            toast(`houve um erro ao buscar todos os produtos ${error}`,{type: "error"})
        }
    } 

    async function getTodosProdutosOrdenados(ordenacao: "ascending" | "descending"){
        try {
            setTodosProdutos([])
            setLoadingTodosProdutos(true)

            const response = await api.get(`/products?order=${ordenacao}`)

            setTodosProdutos(response.data)
            setLoadingTodosProdutos(false)
        } catch (error) {
            toast(`houve um erro ao ordenar os produtos ${error}`,{type: 'error'})
        }
    }


    useEffect(() =>{
        getTodosProdutos()
    },[])

    return(
        <Usrtemplate>
            <ToastContainer/>
            <h1>Lista de produtos</h1>

            <div className="flex justify-between items-center">
                <p>
                    Ordenar por: {" "} 
                    <button type="button" onClick={() => getTodosProdutosOrdenados("ascending")} className="text-primary">Menor preço</button> | {" "}
                    <button type="button" onClick={() => getTodosProdutosOrdenados("descending")} className="text-primary">Maior preço</button>
                </p>

                <div className="flex flex-row border-2 h-[45px] rounded-md items-center">
                    <input onChange={(event) => setPesquisa(event.target.value)} className="flex-1 h-full p-3" placeholder="Estou buscado por..."/>
                        <Link to={`/pesquisa/${pesquisa}`} className="px-2">
                            <IoSearch size={30} />
                        </Link>
                </div>
            </div>
            
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5">
                {loadingTodosProdutos && <Loading/>}
                {todosProdutos.map((item, index) => (
                    <CardProduto id={item._id} nome={item.name} preco={item.price} img={item.url1} marca={item.manufacturer} key={item._id}/>
                ))}
            </div>
        </Usrtemplate>
    )
}