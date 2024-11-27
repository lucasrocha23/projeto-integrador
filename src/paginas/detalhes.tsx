import { Carousel } from "react-responsive-carousel";
import { Usrtemplate } from "../templates/usr-template";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { LoadingProduto } from "../components/loading-Produto";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Produto = {
    _id: string
    name: string
    manufacturer: string
    category: string
    price: number
    url1: string
    url2: string
    description: string
    __v: number
    createdAt: string
    user: Usuario
}

type Usuario = {
    _id: string
    name: string
    email: string
    phone: string
    city: string
    state: string
    __v: number
}


export function Detalhes(){
    const {id} = useParams()

    const [produto,setProduto] = useState<Produto>()

    const [carregando,setCarregando] = useState(false)

    async function getDatalhesProduto(){
        try {
            setCarregando(true)
            const response = await api.get(`/products/${id}`)

            setProduto(response.data)
            setCarregando(false)
        } catch (error) {
            toast(`Erro ao pegar detalhes do produto ${error}`,{type: 'error'})
        }
    }

    useEffect(()=>{
        getDatalhesProduto()
    },[])

    useEffect(()=>{
        console.log(produto);
        
    },[produto])

    return(
        <Usrtemplate>
            <ToastContainer/>
            {carregando && <LoadingProduto/> }
            {produto?
                <div>
                    <p className="text-[30px]">{produto.name}</p>

                    <div className="flex mt-10 gap-10 justify-center">

                        <div className="w-[30%]">
                            <Carousel >
                                <div>
                                    <img alt="imagem do produto" src={produto.url1} />
                                </div>
                                <div>
                                    <img  alt="imagem do produto" src={produto.url2} />
                                </div>
                            </Carousel>
                        </div>

                        <div>
                            <div className="shadow-md bg-white px-10 py-2">
                                <p>Informações do vendedor</p>
                                <p>{produto.user.name} </p>
                                <p>{produto.user.city}</p>
                                <p>Email: {produto.user.email}</p>
                                <p>{produto.user.phone}</p>
                            </div>

                            <div className="shadow-md bg-white px-10 py-2 mt-5">
                                <p className="text-[30px]">R$ {produto.price}</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-10 text-[25px]" >Detalhes do produto</h3>

                    <div className="mt-3 text-justify">
                        <p dangerouslySetInnerHTML={{__html: produto.description}}>
                        </p>

                        <p className="mt-3">
                            Categoria: {produto.category}
                            <br />
                            Fabricante: {produto.manufacturer}
                        </p>
                    </div>
                </div>
                :
                <div>
                    <p>
                    </p>
                </div>
            }
        </Usrtemplate>
    )
}