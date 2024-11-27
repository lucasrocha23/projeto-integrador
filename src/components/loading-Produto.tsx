import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"

export function LoadingProduto(){
    return(
        <div>
            <Skeleton height={40}/>
            <div className="flex mt-10 gap-10 justify-center">

                <Skeleton height={"32vw"} width={"30vw"}/>
                <div className="flex flex-col gap-5">
                    <Skeleton height={140} width={300}/>
                    <Skeleton height={60} width={300}/>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-5">
                <Skeleton height={35} />
                <Skeleton height={200} />                
            </div>
        </div>
    )
}