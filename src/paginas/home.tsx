import { LuGamepad2 } from "react-icons/lu";
import { CardProduto } from "../components/card-produto";
import { Usrtemplate } from "../templates/usr-template";
import { PiCarSimple, PiPants } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { GrGift } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
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

export function Home(){
    return(
        <Usrtemplate>
            
            <div  className="max-w-[80%] self-center" >
                <Carousel showThumbs={false} autoPlay>
                    <div>
                        <img src={banner1} />
                    </div>
                    <div>
                        <img src={banner2} />
                    </div>
                    <div>
                        <img src={banner3} />
                    </div>
                </Carousel>

                <div className="flex flex-row border-2 h-[45px] rounded-md items-center mt-10">
                    <input className="flex-1 h-full p-3" placeholder="Estou buscado por..."/>
                    <Link to={'/resultado'} className="px-2">
                        <IoSearch size={30} />
                    </Link>
                </div>
            </div>


            <h2 className="mt-16">Itens recentes</h2>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8">
                <CardProduto/>
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
        </Usrtemplate>
    )
}