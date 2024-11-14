import { Usrtemplate } from "../templates/usr-template";
import missao from "../assets/missão.jpg"
import historia from "../assets/história.jpg"

export function QuemSomos(){
    return(
        <Usrtemplate>
            <div className="flex flex-col gap-5">
                <h1 className="text-center text-3xl font-bold">Sobre nós</h1>
                <p className="text-center">Somos um marketplace para pessoas que querem vender seus produtos de forma fácil e rápida </p>

                <div className="grid grid-cols-2 mt-8 relative animate-entradaEsquerda">
                    <div className="text-justify flex flex-col gap-5">
                        <h1 className="text-3xl font-bold">Nossa Missão</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna neque, vehicula ac cursus non, consequat ut nisl. Donec consequat placerat ante, et vulputate orci imperdiet ut. Ut semper quam id molestie hendrerit. Proin ultrices tincidunt eleifend. Donec faucibus interdum fermentum. Vestibulum posuere ac arcu id congue. Etiam ultricies est ac enim facilisis blandit. Vivamus neque nibh, volutpat eget viverra id, fringilla ac tellus. Pellentesque at nisi felis. Etiam finibus lobortis pharetra. Morbi convallis, ipsum eu egestas mollis, tortor nulla posuere ipsum, et eleifend eros magna non augue. Duis bibendum sem posuere tristique accumsan.</p>
                    </div>
                    <div className="px-5 flex items-center justify-center">
                        <img src={missao}/>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-8 relative animate-entradaDireita">
                    <div className="px-5 flex items-center justify-center">
                        <img src={historia}/>
                    </div>
                    <div className="text-justify flex flex-col gap-5">
                        <h1 className="text-3xl font-bold">Nossa história</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna neque, vehicula ac cursus non, consequat ut nisl. Donec consequat placerat ante, et vulputate orci imperdiet ut. Ut semper quam id molestie hendrerit. Proin ultrices tincidunt eleifend. Donec faucibus interdum fermentum. Vestibulum posuere ac arcu id congue. Etiam ultricies est ac enim facilisis blandit. Vivamus neque nibh, volutpat eget viverra id, fringilla ac tellus. Pellentesque at nisi felis. Etiam finibus lobortis pharetra. Morbi convallis, ipsum eu egestas mollis, tortor nulla posuere ipsum, et eleifend eros magna non augue. Duis bibendum sem posuere tristique accumsan.</p>
                    </div>
                    
                </div>
            </div>
        </Usrtemplate>
    )
}