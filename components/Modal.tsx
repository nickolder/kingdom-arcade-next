import modal_style from "../styles/Modal.module.sass"

const Modal = ({ModalContent, clickAnywhere}: {ModalContent: any, clickAnywhere :any}) => {

    return (
        <div className={modal_style.modal} onClick={clickAnywhere}><ModalContent /></div>
    )
}

export default Modal