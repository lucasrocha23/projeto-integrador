import { Link } from "react-router-dom";
import { AdmTemplate } from "../templates/adm-template";
import { CardProdutoAdm } from "../components/card-produto-adm";
import { useState } from "react";
import Modal from "../components/modal";


export function UsrAnuncios(){
    const [modalVisivel, setModalVisivel] = useState(false)
    
    return(
        <AdmTemplate>
            <div className="flex justify-between items-center">
                <h1>Anúncios</h1>

                <Link to={'/form-produto'} className="bg-secondary px-8 py-2 transition-all rounded-md hover:bg-orange-600 text-white">Criar Anúncio</Link>
            </div>

            <div className="mt-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8">
                {Array.from({length:4}).map((val,index) =>(
                    <CardProdutoAdm setModalVisivel={setModalVisivel} key={`_${index}`}/>
                ))}
            </div>

            <p className="text-right mt-5">Total: 4 itens</p>

            <Modal visivel={modalVisivel}>
                <div className="bg-white p-10 rounded-xl">
                    <h1>Deseja realmente excluir esse anúncio?</h1>
                    <div className=" flex items-center justify-center gap-2 mt-5">
                        <button type="button" className="bg-primary text-white px-5 py-2 rounded-md" onClick={() => setModalVisivel(false)}>
                            Sim
                        </button>
                        <button type="button" className="px-5 py-2 rounded-md border-2 border-primary text-primary" onClick={() => setModalVisivel(false)}>
                            Não
                        </button>
                    </div>
                </div>
            </Modal>
        </AdmTemplate>
    )
}