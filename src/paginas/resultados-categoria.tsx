import { Link, useParams } from "react-router-dom";
import { Template } from "../templates/template";
import { ToastContainer, toast } from 'react-toastify';
// @ts-ignore
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IoSearch } from "react-icons/io5";
import { Loading } from "../components/loading";
import { CardProduto } from "../components/card-produto";

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


export function ResultadosCategoria(){
    const [pesquisa,setPesquisa] = useState('')
    const [loading,setLoading] = useState(false)
    const [produtosCat,setProdutosCat] = useState<Produto[]>([])
    const {categoria} = useParams()

    async function getProdutos(){
        setLoading(true)
        try {
            const {data} = await api.get('/products')

            const lista: Produto[] = []
            data.forEach((produto: Produto) => {
                if (produto.category === categoria){
                    lista.push(produto)
                }
            });
            setProdutosCat(lista)
            
        } catch (error) {
            toast(`Erro ao buscar produtos de uma categoria ${error}`,{type: "error"})  
        }
        setLoading(false)
    }

    function ordenarProdutos(tipo: "ascending" | "descending"){
        const lista = [...produtosCat]
        setLoading(true)

        if (tipo === "ascending")
            lista.sort((a,b) => a.price - b.price )

        if (tipo === "descending")
            lista.sort((a,b) => b.price - a.price )

        console.log("lista", lista);
        
        setProdutosCat(lista)
        setLoading(false)
    }

    useEffect(() => {
        getProdutos()
    },[])

    useEffect(() => {
        console.log(produtosCat);
        
    },[produtosCat])

    return (
        <Template>
            <ToastContainer/>
            <h1>Lista de produtos</h1>

            <div className="flex justify-between items-center">
                <p>
                    Ordenar por: {" "} 
                    <button type="button" onClick={() => ordenarProdutos("ascending")} className="text-primary">Menor preço</button> | {" "}
                    <button type="button" onClick={() => ordenarProdutos("descending")} className="text-primary">Maior preço</button>
                </p>

                <div className="flex flex-row border-2 h-[45px] rounded-md items-center">
                    <input onChange={(event) => setPesquisa(event.target.value)} className="flex-1 h-full p-3" placeholder="Estou buscado por..."/>
                        <Link to={`/pesquisa/${pesquisa}`} className="px-2">
                            <IoSearch size={30} />
                        </Link>
                </div>
            </div>

            
            {loading ?
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5">
                    <Loading/>
                </div>
            :
                produtosCat.length > 0?
                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5">
                        {produtosCat.map((item) => (
                            <CardProduto id={item._id} nome={item.name} preco={item.price} img={item.url1} marca={item.manufacturer} key={item._id}/>
                        ))}
                    </div>
                :
                <p className="w-full text-center mt-10">
                    Sem resultados
                </p>
            }
   
        </Template>
    )
}