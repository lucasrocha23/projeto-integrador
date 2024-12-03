import { LuGamepad2 } from "react-icons/lu";
import { CardProduto } from "../components/card-produto";
import { PiCarSimple, PiPants } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { GrGift } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
// @ts-ignore
import banner1 from '../assets/banner1.jpg'
// @ts-ignore
import banner2 from '../assets/banner2.jpg'
// @ts-ignore
import banner3 from '../assets/banner3.jpg'
import { Link } from "react-router-dom";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Loading } from "../components/loading";

import { ToastContainer, toast } from 'react-toastify';
// @ts-ignore
import 'react-toastify/dist/ReactToastify.css';
import { Template } from "../templates/template";

const categItens = [
    {
        id:0,
        titulo: 'Jogos',
        icone: <LuGamepad2/>
    },
    {
        id:1,
        titulo: 'Roupas',
        icone: <PiPants/>
    },
    {
        id:2,
        titulo: 'Veiculos',
        icone: <PiCarSimple/>
    },
    {
        id:2,
        titulo: 'Ferramentas',
        icone: <VscTools/>
    },
    {
        id:3,
        titulo: 'Comida',
        icone: <IoFastFoodOutline/>
    },
    {
        id:4,
        titulo: 'Presentes',
        icone: <GrGift/>
    },
    {
        id:5,
        titulo: 'Outros',
        icone: <BsThreeDots/>
    }

]

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

export function Home(){
    const [itensRecentes, setItensRecentes] = useState<Produto[]>([])
    const [itensRecomendados, setItensRecomendados] = useState<Produto[]>([])

    const [loadingItensRecentes,setLoadingItensRecentes] = useState(false)
    const [loadingItensRecomendados,setLoadingItensRecomendados] = useState(false)

    const [pesquisa,setPesquisa] = useState('')

    async function getProdutosRecentes(){
        setLoadingItensRecentes(true)
        try {
            const response:AxiosResponse<Produto[]> = await api.get("/products/recents")            
            
            setItensRecentes(response.data)
        } catch (error) {
            toast(`Erro ao pegar produtos recentes ${error}`,{type: "error"})
        }   
        setLoadingItensRecentes(false)
    }

    async function getProdutosRecomendados(){
        setLoadingItensRecomendados(true)
        try {
            const response:AxiosResponse<Produto[]> = await api.get("/products/recommended")            
            
            setItensRecomendados(response.data)
        } catch (error) {
            toast(`Erro ao pegar produtos recomendados ${error}`,{type: "error"})
        }   
        setLoadingItensRecomendados(false)
    }

    useEffect(() => {
        getProdutosRecentes()
        getProdutosRecomendados()
    },[])

    return(
        <Template>
            <ToastContainer />
            
            <div  className="max-w-[80%] self-center" >
                <Carousel showThumbs={false} autoPlay>
                    <div>
                        <img src={banner1} />
                    </div>
                    <div>
                        <img src={banner2} />
                    </div>
                    <div>
                        <img src={banner3} />
                    </div>
                </Carousel>

                <div className="flex flex-row border-2 h-[45px] rounded-md items-center mt-10">
                    <input onChange={(event) => setPesquisa(event.target.value)} className="flex-1 h-full p-3" placeholder="Estou buscado por..."/>
                    <Link to={`/pesquisa/${pesquisa}`} className="px-2">
                        <IoSearch size={30} />
                    </Link>
                </div>
            </div>

            <h2 className="mt-16">Itens recentes</h2>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5 mb-5">
                {loadingItensRecentes && <Loading/>}
                {itensRecentes.map((item) => (
                    <CardProduto id={item._id} nome={item.name} marca={item.manufacturer} img={item.url1} preco={item.price} key={`${item.name}_${item._id}`}/>
                ))
                }
            </div>
            <Link to={'/produtos-recentes'}>Ver todos os produtos recentes</Link>

            <div className="bg-primary rounded-xl p-6 mt-16">
                <h2 className="text-white">Categorias</h2>
                <div className="px-[5%] grid grid-cols-7 gap-5 mt-6" >
                    {categItens.map( (cat) => (
                        <Link to={`/categoria/${cat.titulo}`} key={cat.id}>
                            <div  className="flex flex-col items-center">
                                <div className="rounded-full bg-white flex items-center justify-center md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px]  text-2xl text-gray-900">
                                    {cat.icone}
                                </div>
                                <p className="text-white text-center mt-2 sm:w-full whitespace-nowrap overflow-hidden text-ellipsis">{cat.titulo}</p>
                            </div>
                        </Link>
                    )
                    )}
                </div>
            </div>

            <h2 className="mt-16">Anúncios</h2>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 mt-5 mb-5">
                {loadingItensRecomendados && <Loading/>}
                {itensRecomendados.map((item) => (
                    <CardProduto id={item._id} nome={item.name} preco={item.price} img={item.url1} marca={item.manufacturer} key={item._id}/>
                ))}
            </div>
            <Link to={'/todos-os-produtos'}> Ver todos os produtos</Link>
        </Template>
    )
}