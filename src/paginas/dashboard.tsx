import { LuGamepad2 } from "react-icons/lu";
import { CardProduto } from "../components/card-produto";
import { AdmTemplate } from "../templates/adm-template";
import { PiCarSimple, PiPants } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { IoFastFoodOutline } from "react-icons/io5";
import { GrGift } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const categItens = [
    {
        id:0,
        titulo: 'Jogos',
        icone: <LuGamepad2/>
    },
    {
        id:1,
        titulo: 'Roupas',
        icone: <PiPants/>
    },
    {
        id:2,
        titulo: 'Veículos',
        icone: <PiCarSimple/>
    },
    {
        id:2,
        titulo: 'Ferramentas',
        icone: <VscTools/>
    },
    {
        id:3,
        titulo: 'Comidas',
        icone: <IoFastFoodOutline/>
    },
    {
        id:4,
        titulo: 'Presentes',
        icone: <GrGift/>
    },
    {
        id:5,
        titulo: 'Outros',
        icone: <BsThreeDots/>
    }

]


export function Dashboard(){
    return(
        <AdmTemplate>
            <h2 className="mt-16">Itens recentes</h2>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8">
                <CardProduto/>
            </div>
            <p>Ver mais</p>

            <div className="bg-primary rounded-xl p-6 mt-16">
                <h2 className="text-white">Categorias</h2>
                <div className="px-[5%] flex justify-between mt-6">
                    {categItens.map( (cat) => (
                        <Link to={'/resultado'} key={cat.id}>
                            <div  className="flex flex-col items-center">
                                <div className="rounded-full bg-white flex items-center justify-center w-[70px] h-[70px] text-2xl text-gray-900">
                                    {cat.icone}
                                </div>
                                <p className="text-white text-center mt-2">{cat.titulo}</p>
                            </div>
                        </Link>
                    )
                    )}
                </div>
            </div>

            <h2 className="mt-16">Anúncios</h2>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8 ">
                <CardProduto/>
                <CardProduto/>
            </div>
            <p>Ver mais</p>
        </AdmTemplate>
    )
}