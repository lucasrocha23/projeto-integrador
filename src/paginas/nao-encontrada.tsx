import { Template } from "../templates/template";

export function NaoEncontrada(){
    return(
        <Template>
            <div className="flex flex-1 items-center justify-center">
                <h1 className=" text-[20px] mt-10">Página não encontrada</h1>
            </div>
        </Template>
    )
}