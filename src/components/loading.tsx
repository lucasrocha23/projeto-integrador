import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"

export function Loading(){
    return (
        Array.from({length:5}).map((_,index) => (
            <div className="shadow-md rounded-md p-8 flex flex-col justify-center items-center min-w-[200px] hover:bg-slate-50" key={index}>
                <Skeleton width={150}/>

                <Skeleton width={150} height={130} className="mt-2"/>

                <Skeleton width={150}/>
                <Skeleton width={150} height={40}/>
            </div>
        ))
    )
}