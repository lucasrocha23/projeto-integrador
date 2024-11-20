import { Link } from "react-router-dom"

export function HeaderAdm(){
    return(
        <div className="bg-primary flex justify-between items-center p-2">
            <Link to={"/"}>
                <h1 className="text-white text-[30px] font-bold">Unybay</h1>
            </Link>

            <ul className="flex gap-5 items-center text-white">
                <Link to={'/'}>Home</Link>
                <Link to={'/quemSomos'}>Quem somos?</Link>
                <Link to={'/'}>Sair</Link>
                <li>
                    <Link to={'/anuncios'} className="bg-white px-8 py-2 transition-all rounded-md hover:bg-white-600 text-secondary">Anunciar</Link>
                </li>
            </ul>
        </div>
    )
}