import { Link } from "react-router-dom"

type ProdutoProps = {
    id: string
    nome: string
    marca: string
    img: string
    preco: number
}


export function CardProduto(props: ProdutoProps){
    return(
        <Link to={`/detalhes/${props.id}`} className="shadow-md rounded-md p-8 flex flex-col justify-center items-center min-w-[200px] hover:bg-slate-50">
            <h1 className="text-center">{props.nome}</h1>

            <img src={props.img} alt="imagem produto" className="w-[100px] mt-2"/>

            <p className="w-full mt-3">{props.marca}</p>
            <p className="w-full text-[25px]">R$ {props.preco}</p>
        </Link>
    )
}