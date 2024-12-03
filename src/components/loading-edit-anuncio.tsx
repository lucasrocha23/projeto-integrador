import Skeleton from "react-loading-skeleton";
// @ts-ignore
import "react-loading-skeleton/dist/skeleton.css"

export function LoadingEditAnuncio(){
    return(
        <div className="w-[800px] flex flex-col p-16 shadow-md rounded-xl gap-5">
            <p>Preencha os campos abaixo:</p>
            
            <div className="flex gap-5">
                <Skeleton height={40} width={326}/>
                <Skeleton height={40} width={326}/>
            </div>

            <div className="flex gap-5">
                <Skeleton height={40} width={326}/>
                <Skeleton height={40} width={326}/>
            </div>

            <div className="flex gap-5">
                <Skeleton height={40} width={326}/>
                <Skeleton height={40} width={326}/>
            </div>

            <Skeleton height={200} width={672}/>
            
            <div className="flex gap-5 justify-end">
                <Skeleton height={40} width={90}/>
                <Skeleton height={40} width={90}/>
            </div>

        </div>
    )
}