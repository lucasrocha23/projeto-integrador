import { useForm } from "react-hook-form";
import { AdmTemplate } from "../templates/adm-template";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Link } from "react-router-dom";


type AnuncioForm = {
    nomeProduto: string,
    fabricante: string,
    categoria: string,
    preco: number,
    img1: string,
    img2: string,
}

export function FormProduto(){
    const [descricao,setDescricao] = useState('')

    const schemaValidacao = y.object().shape({
        nomeProduto: y.string().required("Campo obrigatório"),
        fabricante: y.string().required("Campo obrigatório"),
        categoria: y.string().required("Campo obrigatório"),
        preco: y.string().required("Campo obrigatório"),
        img1: y.string().required("Campo obrigatório"),
        img2: y.string().required("Campo obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<AnuncioForm>({resolver: yupResolver(schemaValidacao)})

    function salvarAnuncio(dados: AnuncioForm){
        console.log(dados);
        
    }

    return(
        <AdmTemplate>
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
                                <option value={""}>Categoria</option>
                                <option>Jogos</option>
                                <option>Roupas</option>
                                <option>Veículos</option>
                                <option>Ferramentas</option>
                                <option>Comidas</option>
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
                            <input {...register("img1")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Url 1 imagem"/>
                            {errors.img1 && 
                                <span className="text-red-600">{errors.img1.message}</span>
                            }
                        </div>

                        <div className="w-full">
                            <input {...register("img2")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Url 2 imagem"/>
                            {errors.img2 && 
                                <span className="text-red-600">{errors.img2.message}</span>
                            }
                        </div>
                    </div>

                    <ReactQuill className="h-[200px] mb-6" placeholder="" theme="snow" value={descricao} onChange={setDescricao}/>

                    <div className=" flex items-center justify-end gap-2 mt-5">
                        <Link to={"/anuncios"} type="button" className="bg-primary text-white px-5 py-2 rounded-md">
                            Salvar
                        </Link>
                        <Link to={"/anuncios"} type="button" className="px-5 py-2 rounded-md border-2 border-primary text-primary">
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </AdmTemplate>
    )
}