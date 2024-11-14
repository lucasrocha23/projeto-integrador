import { CardProduto } from "../components/card-produto";
import { Usrtemplate } from "../templates/usr-template";


export function ResultadoPesquisa(){
    return(
        <Usrtemplate>
            <h1>Resultado de pesquisa</h1>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-8">
                {Array.from({length:14}).map((val,index) =>(
                    <CardProduto key={`_${index}`}/>
                ))}
            </div>

            <p>total de 4 itens</p>
        </Usrtemplate>
    )
}