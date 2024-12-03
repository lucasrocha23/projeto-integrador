import { useForm } from "react-hook-form";
import { Template } from "../templates/template";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";


type AnuncioForm = {
    nomeProduto: string,
    fabricante: string,
    categoria: string,
    preco: number,
    img1: string,
    img2: string,
}

interface ApiError {
    message: string; 
}

export function FormProduto(){
    const [descricao,setDescricao] = useState('')

    const schemaValidacao = y.object().shape({
        nomeProduto: y.string().required("Campo obrigatório"),
        fabricante: y.string().required("Campo obrigatório"),
        categoria: y.string().required("Campo obrigatório"),
        preco: y.number().required("Campo obrigatório"),
        img1: y.string().required("Campo obrigatório"),
        img2: y.string().required("Campo obrigatório")
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<AnuncioForm>({resolver: yupResolver(schemaValidacao),
        defaultValues: {
            preco: 0,
            categoria: '',
            fabricante: '',
            nomeProduto: '',
            img1: '',
            img2: ''
        }
    }
)

    const {token} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    },[])


    async function salvarAnuncio(dados: AnuncioForm){
        try {
            const response = await api.post('/products',
                {
                    name: dados.nomeProduto,
                    manufacturer: dados.fabricante,
                    category: dados.categoria,
                    price: dados.preco,
                    url1: dados.img1,
                    url2: dados.img2,
                    description: descricao
                },
                {headers: {Authorization: token}}
            )

            console.log(response.status);
            
            if (response.status === 201){
                toast('Produto cadastrado com sucesso',{type: "success"})
                reset()
                setDescricao("")
            }
        } catch (error) {
            const erro = error as AxiosError<ApiError>

            toast(`Falha ao cadastrar produto. Erro: ${erro.response?.data.message? erro.response.data.message : erro }`, {type: 'error', autoClose:7000})
        }
    }

    return(
        <Template>
            <ToastContainer/>
            <div className="flex flex-col flex-1 items-center justify-center">
                <h1 className="w-[800px] text-left mb-10 text-[30px]">Novo anúncio</h1>
                <form onSubmit={handleSubmit(salvarAnuncio)} className="w-[800px] flex flex-col p-16 shadow-md rounded-xl gap-5">
                    <p>Preencha os campos abaixo:</p>

                    <div className="flex gap-5">
                        <div className="w-full" >
                            <input {...register("nomeProduto")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Nome do produto"/>
                            {errors.nomeProduto && 
                                <span className="text-red-600">{errors.nomeProduto.message}</span>
                            }
                        </div>

                        <div className="w-full">
                            <input {...register("fabricante")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Fabricante"/>
                            {errors.fabricante && 
                                <span className="text-red-600">{errors.fabricante.message}</span>
                            }
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="w-full">
                            <select {...register("categoria")} className="border-2 rounded-md w-full h-[40px] px-2">
                                <option value={""} disabled selected>Categoria</option>
                                <option>Jogos</option>
                                <option>Roupas</option>
                                <option>Veiculos</option>
                                <option>Ferramentas</option>
                                <option>Comida</option>
                                <option>Presentes</option>
                                <option>Outros</option>
                            </select>

                            {errors.categoria && 
                                <span className="text-red-600">{errors.categoria.message}</span>
                            }
                        </div>

                        <div className="w-full">
                            <input {...register("preco")} type="number" className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Preço"/>
                            {errors.preco && 
                                <span className="text-red-600">{errors.preco.message}</span>
                            }
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="w-full">
                            <input {...register("img1")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="URL 1 imagem"/>
                            {errors.img1 && 
                                <span className="text-red-600">{errors.img1.message}</span>
                            }
                        </div>

                        <div className="w-full">
                            <input {...register("img2")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="URL 2 imagem"/>
                            {errors.img2 && 
                                <span className="text-red-600">{errors.img2.message}</span>
                            }
                        </div>
                    </div>

                    <ReactQuill className="h-[200px] mb-6" placeholder="" theme="snow" value={descricao} onChange={setDescricao}/>

                    <div className=" flex items-center justify-end gap-2 mt-5">
                        <button type="submit" className="bg-primary text-white px-5 py-2 rounded-md">
                            Salvar
                        </button>
                        <Link to={'/anuncios'} className="px-5 py-2 rounded-md border-2 border-primary text-primary">
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </Template>
    )
}