import { Link } from "react-router-dom"

type ProdutoProps = {
    id: string
    nome: string
    marca: string
    img: string
    preco: number
}


export function CardProduto(props: ProdutoProps){
    function formatarPreco(preco: number){
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(preco)
    }

    return(
        <Link to={`/detalhes/${props.id}`} className="shadow-md rounded-md p-8 flex flex-col justify-center items-center min-w-[200px] hover:bg-slate-50">
            <h1 className="text-center">{props.nome}</h1>

            <div className="flex mt-2 w-[142px] h-[142px] items-center justify-center">
                <img src={props.img} alt="imagem produto" className="max-h-full max-w-full" />
            </div>

            <p className="w-full mt-3">{props.marca}</p>
            <p className="w-full text-[25px]">{formatarPreco(props.preco)}</p>
        </Link>
    )
}