import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/Layout"
import Search from "../components/Search"
import UploadInput from "../components/UploadInput"

import upload_style from "../styles/Upload.module.sass"

import { useRef, useState } from "react"

const Upload = () => {
    const inputParameters = [
        { title: 'Nome', type: 'text' },
        { title: 'Descrição', type: 'description' }
    ]

    const imageInput = useRef<any>(null)
    const [thumb, setThumb] = useState<any | null>(null)

    function openImageInput () {
        if (imageInput.current)
            imageInput.current.click()
    }
    
    return (
        <>
            <Layout
                title="Carregar - Kingdom Arcade" 
                keywords="upload, criar, kingdom arcade" 
                description="Página de carregamento de jogos da Kingdom Arcade. Utilizadores podem inserir os jogos que criaram para aprovação de um moderador." 
            />

            <div className={upload_style.container}>
                <span className={upload_style.title}>Carregamento de Jogos</span>
                <section className={upload_style.description}>
                    <p>Esta divisão permite o carregamento de jogos para a Kingdom Arcade</p>
                    <p>Os ficheiros que carregar requerem a revisão de um moderador antes de serem publicados</p>
                </section>

                <form method="POST" className={upload_style.form}>
                    { inputParameters.map(el =>
                        <UploadInput 
                            key={inputParameters.indexOf(el)} 
                            title={el.title} 
                            type={el.type}
                        />
                    ) }

                    <div className={upload_style.categories}>
                        <section className={upload_style.form_title}>Categoria</section>
                        <Search color="#272226"/>
                    </div>

                    <div className={upload_style.files}>
                        <section className={upload_style.form_title}>Ficheiros</section>
                        <input type="file" />
                    </div>

                    <div className={upload_style.images}>
                        <section className={upload_style.form_title}>Thumbnail (18 x 10)</section>
                        
                        <div className={upload_style.img_input} onClick={openImageInput} style={{backgroundImage: 'url(' + thumb + ')', backgroundSize: 'cover'}}>
                            <div className={upload_style.icon}>
                                <FontAwesomeIcon icon={faCirclePlus}/>
                            </div>
                        </div>

                        <input 
                            ref={imageInput}
                            type="file" 
                            accept="image/png, image/jpeg, image/gif" 
                            onChange={ e => setThumb((URL.createObjectURL(e.target.files![0]))) }
                            hidden
                        />
                    </div>

                    <button className={upload_style.submit}>Carregar</button>
                </form>

            </div>
        </>
    )
}

export default Upload