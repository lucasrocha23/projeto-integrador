import { Template } from "../templates/template";
import * as y from "yup" 
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type FaleConoscoForm = {
    nome: string;
    email: string;
    msg: string;
}

export function FaleConosco(){

    const schemaValidacao = y.object().shape({
        nome: y.string().min(4,"Nome muito Curto").required("Campo Obrigatório"),
        email: y.string().email("Digite um E-mail válido").required("Campo obrigatório"),
        msg: y.string().min(5,"Mensagem muito curta").required("Campo obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FaleConoscoForm>({resolver: yupResolver(schemaValidacao)})

    function enviarMsg(dados: FaleConoscoForm){
        console.log(dados);
    }

    return(
        <Template>
            <div className="flex flex-col flex-1 items-center justify-center">
                <form onSubmit={handleSubmit(enviarMsg)} className="flex flex-col p-16 shadow-md rounded-xl w-[500px] gap-5">
                <h1 className="text-primary text-[30px] font-bold text-center">Unybay</h1>

                <p className="text-center">Fale conosco através do fomrmulário abaixo</p>

                <div className="mt-8">
                    <input {...register("nome")} placeholder="Nome completo" className="border-2 rounded-md w-full h-[40px] px-2"/>
                    {errors.nome &&
                        <span className="text-red-600">{errors.nome.message}</span>
                    }
                </div>
                <div>
                    <input {...register("email")} placeholder="E-mail" className="border-2 rounded-md w-full h-[40px] px-2"/>
                    {errors.email &&
                        <span className="text-red-600">{errors.email.message}</span>
                    }
                </div>
                <div>
                    <textarea {...register("msg")} placeholder="Digite sua mensagem"   className="border-2 rounded-md w-full h-[200px] px-2 resize-none">
                    </textarea>
                    {errors.msg &&
                        <span className="text-red-600">{errors.msg.message}</span>
                    }
                </div>

                <button type="submit" className="bg-primary text-white w-full rounded-md h-[40px]">
                    Enviar
                </button>
                </form>
            </div>
            
        </Template>
    )
}