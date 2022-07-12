import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import about_style from "../styles/AboutUs.module.sass"

const AboutUs = () => {
    const [videoSize, setVideoSize] = useState({
        width: 576,
        height: 324
    })

    function handleResize () {
        if (window.innerWidth <= 480) {
            setVideoSize({
                width: 384,
                height: 216,
            }) 
        } else setVideoSize({
            width: 576,
            height: 324,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            removeEventListener('resize', handleResize)
        }
    })

    return (
        <>
            <Layout
                title="Sobre Nós - Kingdom Arcade"
                keywords="sobre nós, informações, kingdom arcade"
                description="Página de apresentação da Kingdom Arcade aos utilizadores."
            />

            <div className={about_style.page}>
                <h4>Sobre Nós</h4>

                <div className={about_style.content}>
                    <div className={about_style.text}>
                        <p>Bem vindo à Kingdom Arcade!</p> 
                        <p>Este website foi criado no âmbito da Prova de Aptidão Profissional do curso de Plano Próprio de Informática do Colégio de São Miguel.</p>
                        <p>
                            Kingdom Arcade é um website destinado a videojogos 
                            que permite aos utilizadores que estejam registados na plataforma jogar jogos em tempo real, 
                            sem ter de sair do navegador de Internet. 
                        </p>
                        <p>Foi desenvolvida durante o ano letivo de 2021/2022.</p>
                        <span className={about_style.sign}>Miguel Carreira 12º F</span>
                    </div>
                </div>
            
                <video width={videoSize.width} height={videoSize.height} src="/../videos/trailer.mp4" autoPlay muted loop></video>
            
            </div>
        </>
    )
}

export default AboutUs