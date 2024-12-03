import { Link } from "react-router-dom"
import { FiEdit3, FiTrash } from "react-icons/fi"
import Modal from "./modal"
import { api } from "../services/api"
import { useAuth } from "../hooks/useAuth"
import { AxiosError } from "axios"
import { useState } from "react"

type CardProps = {
    getProdutos: React.Dispatch<React.SetStateAction<void>>
    notificacao: any

    id: string
    nome: string
    marca: string
    img: string
    preco: number
    
}
interface ApiError {
    message: string; 
}


export function CardProdutoAdm(props: CardProps){
    const [modalVisivel, setModalVisivel] = useState(false)
    const {token} = useAuth()
    
    async function apagarProduto(){
        try {
            const response = await api.delete(`/products/${props.id}`,{headers: {Authorization: token}})

        } catch (error) {
            const erro = error as AxiosError<ApiError>

            props.notificacao(`Falha ao apagar produto. Erro: ${erro.response?.data.message? erro.response.data.message : erro }`, {type: 'error', autoClose:7000})
        }
        props.getProdutos()
    }

    function formatarPreco(preco: number){
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(preco)
    }

    return(
        <div>
            <Link to={`/detalhes/${props.id}`}  className="shadow-md rounded-md px-6 py-8 flex flex-col justify-center items-center min-w-[200px] hover:bg-slate-50 h-full">
                <h1 className="text-center">{props.nome}</h1>

                <div className="flex mt-2 w-[142px] h-[142px] items-center justify-center">
                    <img src={props.img} alt="imagem produto" className="max-h-full max-w-full" />
                </div>

                <div className="flex mt-3 w-full justify-between">
                    <div>
                        <p className="w-full">{props.marca}</p>
                        <p className="w-full  text-[24px]">{formatarPreco(props.preco)}</p>
                    </div>

                    <div className="flex flex-col justify-between">
                        <Link to={`/form-produto/${props.id}`}>
                            <FiEdit3 className="text-[25px] font-bold"/>
                        </Link>
                        <button type="button" 
                            onClick={(event) => {
                                event.preventDefault()
                                setModalVisivel(true)
                            }}
                        >
                            <FiTrash className="text-[25px]"/>
                        </button>
                    </div>
                </div>

            </Link>

            <Modal visivel={modalVisivel} setVisivel={setModalVisivel}>
                <div className="bg-white p-10 rounded-xl">
                    <h1>Deseja realmente excluir esse anúncio?</h1>
                        <div className=" flex items-center justify-center gap-2 mt-5">
                            <button type="button" className="bg-primary text-white px-5 py-2 rounded-md" 
                            onClick={() => {
                                setModalVisivel(false)
                                apagarProduto()
                            }}>
                                Sim
                            </button>
                            <button type="button" className="px-5 py-2 rounded-md border-2 border-primary text-primary" onClick={() => setModalVisivel(false)}>
                                Não
                            </button>
                        </div>                        
                </div>
            </Modal>
        </div>

    )
}