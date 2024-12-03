import { useLocation } from "react-router-dom"
import { Footer } from "../components/footer"
import { HeaderAdm } from "../components/header-adm"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { Header } from "../components/header"

type TemplateProps = {
    children: React.ReactElement | React.ReactElement[]
}

export function Template(props: TemplateProps){
    const {pathname} = useLocation()
    const {token} = useAuth()

    useEffect(() => {
        window.scrollTo(0,0)
    },[pathname])
    return(
        <div className="flex flex-col min-h-screen">
            {token ?
                <HeaderAdm/>
                :
                <Header/>
            }
            <div className="flex flex-1 flex-col px-[10%] py-[30px]">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}