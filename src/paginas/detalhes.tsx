import { Carousel } from "react-responsive-carousel";
import { Usrtemplate } from "../templates/usr-template";

import imagem1 from "../assets/attack-shark-x11.jpg"
import imagem2 from "../assets/attack-shark-x11-2.jpg"
import imagem3 from "../assets/attack-shark-x11-3.jpg"

export function Detalhes(){
    return(
        <Usrtemplate>
            <p className="text-[30px]">Attack Shark x11</p>

            <div className="flex mt-10 gap-10 justify-center">

                <div className="w-[30%]">
                    <Carousel >
                        <div>
                            <img src={imagem1} />
                        </div>
                        <div>
                            <img src={imagem2} />
                        </div>
                        <div>
                            <img src={imagem3} />
                        </div>
                    </Carousel>
                </div>

                <div>
                    <div className="shadow-sm bg-white px-10 py-2">
                        <p>Informações do vendedor</p>
                        <p>Lucas Rocha </p>
                        <p>Campina Grande PB</p>
                        <p>Email: lucasrochadoo123@gmail.com</p>
                        <p>(83) 9 9381-2704</p>
                    </div>

                    <div className="shadow-sm bg-white px-10 py-2">
                        <p className="text-[30px]">R$130,00</p>
                    </div>
                </div>
            </div>

            <h3 className="mt-10 text-[25px]" >Detalhes do produto</h3>

            <div className="mt-3 text-justify">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper, tellus sed placerat pretium, ante felis condimentum lorem, eu ultrices dui ipsum elementum urna. Cras nibh dui, laoreet ut arcu et, aliquam posuere lorem. Quisque condimentum diam sed efficitur sagittis. Sed rutrum tincidunt ante ut luctus. Aenean at facilisis odio, sit amet vulputate nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget libero ut felis cursus gravida vel eget lorem. Vestibulum at facilisis turpis. In diam urna, porta eu leo quis, facilisis eleifend magna. Suspendisse vel dolor mattis, tempus nulla eu, varius lectus. Vestibulum elit est, eleifend nec hendrerit quis, cursus at libero. Vivamus consectetur purus at risus pulvinar rutrum. Nullam vitae aliquet magna. Curabitur fermentum aliquet quam in vulputate.
                </p>

                <p className="mt-3">
                    Aenean ultrices elementum viverra. In pretium libero tellus, et pretium erat pellentesque id. Donec scelerisque eleifend turpis quis consequat. Vivamus tristique orci eget nisi scelerisque, tristique vestibulum velit ultricies. Duis et fermentum arcu, vitae vestibulum est. Praesent convallis dui libero, eu placerat ligula mollis et. Suspendisse sollicitudin dui in feugiat molestie. Mauris rutrum ipsum tincidunt, tristique risus pulvinar, dictum sapien. Proin placerat vehicula porttitor. Praesent a neque maximus, rutrum neque ut, mattis augue. In arcu neque, dapibus consectetur tincidunt quis, sagittis sed enim. Curabitur feugiat tempor tortor ac sollicitudin. Fusce sed lacus nec neque elementum ornare. Aliquam erat volutpat. Curabitur ullamcorper ullamcorper urna, eu vulputate elit. Mauris lorem massa, finibus at scelerisque ut, venenatis efficitur erat.
                </p>
            </div>

        </Usrtemplate>
    )
}