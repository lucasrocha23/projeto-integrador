import { Link } from "react-router-dom"
import prod_img from "../assets/attack-shark-x11.jpg"
import { FiEdit3, FiTrash } from "react-icons/fi"
import { useState } from "react"

type CardProps = {
    setModalVisivel: React.Dispatch<React.SetStateAction<boolean>>
}

export function CardProdutoAdm(props: CardProps){
    return(
        <Link to={"/detalhes"}  className="shadow-md rounded-md p-3 flex flex-col justify-center items-center min-w-[200px] hover:bg-slate-50">
            <h1 className="text-center">Nome produto</h1>

            <img src={prod_img} alt="imagem produto" className="w-[100px] mt-2"/>

            <div className="flex mt-3 w-full justify-between">
                <div>
                    <p className="w-full">Attack Shark x11</p>
                    <p className="w-full text-[25px]">R$ 130,00</p>
                </div>

                <div className="flex flex-col justify-between">
                    <Link to={"/form-produto"}>
                        <FiEdit3 className="text-[25px] font-bold"/>
                    </Link>
                    <button type="button" 
                        onClick={(event) => {
                            event.preventDefault()
                            props.setModalVisivel(true)
                        }}
                    >
                        <FiTrash className="text-[25px]"/>
                    </button>
                </div>
            </div>

        </Link>
    )
}