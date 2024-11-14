import { Link } from "react-router-dom"

export function Header(){
    return(
        <div className="bg-primary flex justify-between items-center p-2">
            <Link to={"/"}>
                <h1 className="text-white text-[30px] font-bold">Unybay</h1>
            </Link>

            <ul className="flex gap-5 items-center text-white">
                <Link to={'/'}>Home</Link>
                <Link to={'/quemSomos'}>Quem somos?</Link>
                <li>
                    <button className="bg-secondary px-8 py-2 transition-all rounded-md hover:bg-orange-600">Entrar</button>
                </li>
            </ul>
        </div>
    )
}