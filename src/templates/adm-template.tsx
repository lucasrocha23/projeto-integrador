import { Footer } from "../components/footer"
import { HeaderAdm } from "../components/header-adm"

type AdmTemplateProps = {
    children: React.ReactElement | React.ReactElement[]
}

export function AdmTemplate(props: AdmTemplateProps){
    return(
        <div className="flex flex-col min-h-screen">
            <HeaderAdm/>

            <div className="flex flex-1 flex-col px-[10%] py-[30px]">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}