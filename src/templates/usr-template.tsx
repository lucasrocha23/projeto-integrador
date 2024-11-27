import { useLocation } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useEffect } from "react";

type UsrtemplateProps = {
    children: React.ReactElement | React.ReactElement[];
}

export function Usrtemplate(props: UsrtemplateProps){
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    },[pathname])
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-1 flex-col px-[10%] py-[30px]">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}