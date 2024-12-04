import { Link, useNavigate } from "react-router-dom";
import { Template } from "../templates/template";
import { CardProdutoAdm } from "../components/card-produto-adm";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
// @ts-ignore
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";
import { Loading } from "../components/loading";
import { FaUser } from "react-icons/fa";
import { Button, Dialog } from "@radix-ui/themes";
import * as DialogPrimitive from '@radix-ui/react-dialog'

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
        <Dialog.Root>
            <Template>
                <ToastContainer/>
                <div className="flex justify-between items-center">
                    <h1>Anúncios</h1>

                    <div className="flex gap-5 items-center justify-center">
                        <Link to={'/form-produto'} className="bg-secondary px-8 py-2 transition-all rounded-md hover:bg-orange-600 text-white ">Criar Anúncio</Link>
                        <Dialog.Trigger>
                            <Button className="flex h-[70px] w-[70px]  rounded-full items-end bg-blue-600 whitespace-nowrap overflow-hidden hover:cursor-pointer">
                                <FaUser className="text-[50px]"/>
                            </Button>
                        </Dialog.Trigger>
                        
                    </div>
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

                <DialogPrimitive.DialogPortal>
                <DialogPrimitive.DialogOverlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"/>
                <DialogPrimitive.DialogContent
                    className="fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen border-l border-zinc-200 bg-white p-8"
                >
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-center text-[30px]">Informações do perfil</h1>

                        <div className="flex justify-center h-[70px] w-[70px]  rounded-full  items-end bg-blue-600 whitespace-nowrap overflow-hidden">
                            <FaUser className="text-[50px] text-slate-100"/>
                        </div>
                        <div className="self-start flex flex-col gap-4">
                            <p>Nome: Fulano da Silva</p>
                            <p>Email: fulano@gmail.com</p>
                            <p>telefone: {"(99) 9 9999-9999"}</p>
                            <p>Cidade: São Paulo</p>
                            <p>Estado: SP</p>
                        </div>
                    </div>
                </DialogPrimitive.DialogContent>
                </DialogPrimitive.DialogPortal>
            </Template>
        </Dialog.Root>
    )
}


// token