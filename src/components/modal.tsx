import { useEffect, useState } from "react"

interface ModalProps {
    children: React.ReactNode
    visivel: boolean
    setVisivel:  React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({children, visivel, setVisivel}: ModalProps){
    const tipo = () => visivel? {display: 'flex'} : {display: 'none'}

    const [estilo, setEstilo] = useState(tipo())

    useEffect(() => {
        setEstilo(tipo())
    },[visivel])

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/60 opacity-100 items-center justify-center' onClick={() => setVisivel(false)} style={estilo}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Modal