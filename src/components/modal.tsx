interface ModalProps {
    children: React.ReactNode
    visivel: boolean
}

function Modal({children, visivel}: ModalProps){
    const estilo = visivel? {display: 'flex'} : {display: 'none'}

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/60 opacity-100 items-center justify-center'  style={estilo}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Modal