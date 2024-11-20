import { Footer } from "../components/footer"

type AuthTemplateProps = {
    children: React.ReactElement |  React.ReactElement[]
}

export function AuthTemplate(props: AuthTemplateProps){
    return(
        <div className="flex flex-col min-h-screen">
            <div className="bg-primary flex justify-between items-center p-2">
                <h1 className="text-white text-[30px] font-bold">Unybay</h1>
            </div>

            <div className="flex flex-1 items-center justify-center">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}