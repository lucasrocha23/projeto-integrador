import { useForm } from "react-hook-form";
import { AuthTemplate } from "../templates/auth-template";
import * as y from "yup" 
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

import { ToastContainer, toast } from 'react-toastify';
// @ts-ignore
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";

type CadastroForm = {
    nome: string,
    email: string,
    telefone: string,
    cidade: string,
    estado: string,
    senha: string,
    confirmarSenha: string
}

interface ApiError {
    message: string; 
}

export function Registro(){
    const [telefone,setTelefone] = useState("")
    const [telefoneFormatado, setTelefoneFormatado] = useState("")

    const navigate = useNavigate()

    const schemaValidacao =  y.object().shape(
        {
            nome: y.string().min(4, "Nome muito curto").required("Campo obrigatório"),
            email: y.string().email("E-mail inválido").required("Campo obrigatório"),
            telefone: y.string().min(16,"telefone inválido").required("Campo obrigatório"),
            cidade: y.string().min(4, "Cidade muito curta").required("Campo obrigatório"),
            estado: y.string().min(4, "Estado muito curto").required("Campo obrigatório"),
            senha: y.string().min(4, "A senha precisa ter ao menos 4 caracteres").required("Campo obrigatório"),
            confirmarSenha: y.string().oneOf([y.ref('senha')],"As senhas precisam ser iguais").required("Campo obrigatório"),
        }
    )


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CadastroForm>({resolver: yupResolver(schemaValidacao)})

    useEffect(() => {
        let contato = telefone;
        contato = contato.replace(/\D/g, '') // Remove all non-digit characters
        
        let contatoformatado = '';

        if (contato.length > 0) {
            contatoformatado = '('.concat(contato.substring(0, 2))
        }
        if (contato.length > 2) {
            contatoformatado += ') '.concat(contato.substring(2, 3))
        }
        if (contato.length > 3){
            contatoformatado += ' '.concat(contato.substring(3, 7))
        }
        if (contato.length > 7) {
            contatoformatado += '-'.concat(contato.substring(7, 11))
        }

        setTelefoneFormatado(contatoformatado)
    },[telefone])


    async function cadastrar(dados: CadastroForm){
        try {
            await api.post('/register',
                {
                    name: dados.nome,
                    email: dados.email,
                    phone: dados.telefone,
                    city: dados.cidade,
                    state: dados.cidade,
                    password: dados.senha
                }
            )
            
            navigate('/login/conta-criada')
        } catch (error) {
            const erro = error as AxiosError<ApiError>

            toast(`Falha ao cadastrar usuário. Erro: ${erro.response?.data?.message}`, {type: 'error', autoClose:7000})
        } 


    }

    return(
        <AuthTemplate>
            <ToastContainer/>
            <div>
                <form onSubmit={handleSubmit(cadastrar)} className="flex flex-col p-16 shadow-md rounded-xl w-[500px] gap-5">
                <h1 className="text-primary text-[30px] font-bold text-center">Unybay</h1>
                <p className="text-center">Cadastre-se</p>

                <div>
                    <input  {...register("nome")} className="border-2 rounded-md w-full h-[40px] px-2 mt-8" placeholder="Nome"/>
                    {errors.nome && 
                        <span className="text-red-700">{errors.nome.message}</span>
                    }
                </div>

                <div>
                    <input  {...register("email")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="E-mail"/>
                    {errors.email && 
                        <span className="text-red-700">{errors.email.message}</span>
                    }
                </div>

                <div>
                    <input  {...register("telefone")} onChange={(event) => setTelefone(event.target.value)} value={telefoneFormatado} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Telefone"/>
                    {errors.telefone && 
                        <span className="text-red-700">{errors.telefone.message}</span>
                    }
                </div>

                <div>
                    <input  {...register("cidade")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Cidade"/>
                    {errors.cidade && 
                        <span className="text-red-700">{errors.cidade.message}</span>
                    }
                </div>

                <div>
                    <input  {...register("estado")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Estado"/>
                    {errors.estado && 
                        <span className="text-red-700">{errors.estado.message}</span>
                    }
                </div>

                <div>
                    <input type="password"  {...register("senha")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Senha"/>
                    {errors.senha && 
                        <span className="text-red-700">{errors.senha.message}</span>
                    }
                </div>

                <div>
                    <input type="password" {...register("confirmarSenha")} className="border-2 rounded-md w-full h-[40px] px-2" placeholder="Confirmar senha"/>
                    {errors.confirmarSenha && 
                        <span className="text-red-700">{errors.confirmarSenha.message}</span>
                    }
                </div>

                <button type="submit" className="bg-primary text-white w-full rounded-md h-[40px] mt-8">Cadastrar</button>

                <p>
                Já possui uma conta? Faça o {" "}
                <Link to={'/login'} className="text-center text-primary">login</Link>
                </p>
                </form>
                
            </div>
        </AuthTemplate>
    )
}