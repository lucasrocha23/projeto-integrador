import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Modal from "./modal"
import { useState } from "react"

export function HeaderAdm(){
    const [modalVisivel, setModalVisivel] = useState(false)
    const navigate = useNavigate()
    const {logout} = useAuth()

    return(
        <div className="bg-primary flex justify-between items-center p-2">
            <Link to={"/"}>
                <h1 className="text-white text-[30px] font-bold">Unybay</h1>
            </Link>

            <ul className="flex gap-5 items-center text-white">
                <Link to={'/'}>Home</Link>
                <Link to={'/quem-somos'}>Quem somos?</Link>
                <button onClick={() => setModalVisivel(true)} >Sair</button>
                <li>
                    <Link to={'/anuncios'} className="bg-white px-8 py-2 transition-all rounded-md hover:bg-white-600 text-secondary">Anunciar</Link>
                </li>
            </ul>

            <Modal visivel={modalVisivel} setVisivel={setModalVisivel}>
                <div className="bg-white p-10 rounded-xl">
                    <h1>Deseja realmente sair da conta?</h1>
                        <div className=" flex items-center justify-center gap-2 mt-5">
                            <button type="button" className="bg-primary text-white px-5 py-2 rounded-md" 
                            onClick={() => {
                                setModalVisivel(false)
                                logout()
                                navigate('/')
                            }}>
                                Sim
                            </button>
                            <button type="button" className="px-5 py-2 rounded-md border-2 border-primary text-primary" onClick={() => setModalVisivel(false)}>
                                Não
                            </button>
                        </div>                        
                </div>
            </Modal>
        </div>
    )
}