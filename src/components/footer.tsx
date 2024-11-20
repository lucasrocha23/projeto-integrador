import { BsLinkedin, BsFacebook } from "react-icons/bs"
import { Link } from "react-router-dom"

export function Footer(){
    return(
        <footer className="bg-primary text-white py-10 px-10 ">
            <div className="flex justify-between mb-5">
                <h2 className="text-[22px] font-bold ">Unybay</h2>
                <Link to={'/fale-conosco'} className="border rounded-md bg-white text-primary items-center justify-center px-5 py-2">Fale conosco</Link>
            </div>

            <p className="text-center">Unyleya Educacional | Todos os direitos reservados</p>

            <div className="flex justify-center gap-2 mt-[20px]">
                <BsLinkedin/>
                <BsFacebook/>
            </div>
        </footer>
    )
}