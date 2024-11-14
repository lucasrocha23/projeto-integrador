import { Link } from "react-router-dom"
import prod_img from "../assets/attack-shark-x11.jpg"




export function CardProduto(){
    return(
        <Link to='/detalhes' className="shadow-md rounded-md p-8 flex flex-col justify-center items-center min-w-[200px] hover:bg-slate-50">
            <h1 className="text-center">Nome produto</h1>

            <img src={prod_img} alt="imagem produto" className="w-[100px] mt-2"/>

            <p className="w-full mt-3">Attack Shark x11</p>
            <p className="w-full text-[25px]">R$ 130,00</p>
        </Link>
    )
}