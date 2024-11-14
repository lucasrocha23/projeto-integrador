import { Footer } from "../components/footer";
import { Header } from "../components/header";

type UsrtemplateProps = {
    children: React.ReactElement[];
}

export function Usrtemplate(props: UsrtemplateProps){
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