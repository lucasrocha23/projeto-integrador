import { useForm } from "react-hook-form";
import * as Yup from "yup" 

import { AuthTemplate } from "../templates/auth-template";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type LoginForm = {
    email: string,
    senha: string,
}

const schemaValidation = Yup.object().shape(
    {
        email: Yup.string().email("O E-mail precisa ser um E-mail válido").required("O campo é obrigatório"),
        senha: Yup.string().min(4,"A senha precisa ter ao menos 4 caracteres").required()
    }
)

export function Login(){
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginForm>({resolver:yupResolver(schemaValidation)})

    const {msg} = useParams()

    useEffect(() =>{
        if (msg === "conta-criada"){
            toast("Conta criada com sucesso", {type:"success"})
        }
    },[msg])

    function logar(dados: LoginForm){
        console.log(dados);
    }
    return(
        <AuthTemplate>
            <ToastContainer/>
            <form onSubmit={handleSubmit(logar)} className="flex flex-col p-16 shadow-md rounded-xl w-[500px] gap-5">
                <h1 className="text-primary text-[30px] font-bold text-center">Unybay</h1>
                <p className="text-center">Acesse sua conta</p>
                
                <div>
                    <input {...register("email")}  className="border-2 rounded-md w-full h-[40px] px-2 mt-8" placeholder="Digite seu email"/>
                    {errors.email && 
                        <span className="text-red-700">{errors.email?.message}</span>
                    }
                </div>

                <div>
                    <input type="password" {...register("senha")} className="border rounded-md w-full h-[40px] px-2" placeholder="Digite sua senha"/>
                    {errors.senha && 
                        <span className="text-red-700">{errors.senha?.message}</span>
                    }
                </div>

                <button type="submit" className="bg-primary text-white w-full rounded-md h-[40px] mt-8">Entrar</button>

                <p>
                Não possui uma conta? {" "}
                <Link to={'/registrar'} className="text-center text-primary">Cadastre-se</Link>
                </p>
                
            </form>
        </AuthTemplate>
    )
}