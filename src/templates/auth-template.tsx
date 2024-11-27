import { Link } from "react-router-dom"
import { Footer } from "../components/footer"

type AuthTemplateProps = {
    children: React.ReactElement |  React.ReactElement[]
}

export function AuthTemplate(props: AuthTemplateProps){
    return(
        <div className="flex flex-col min-h-screen">
            <div className="bg-primary flex justify-between items-center p-2">
                <Link to={"/"} className="text-white text-[30px] font-bold">Unybay</Link>
            </div>

            <div className="flex flex-1 items-center justify-center">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}