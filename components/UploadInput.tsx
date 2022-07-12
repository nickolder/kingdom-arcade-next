import upload_style from "../styles/UploadInput.module.sass"

type UploadInputType = {
    title: string,
    type: string,
}

const UploadInput = ({title, type}: UploadInputType) => {
    return (
        <div className={upload_style.input}>
            <section>{title}</section>
            <input type={type} required/>
        </div>
    )
}

export default UploadInput