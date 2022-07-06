import Image from "next/image"
import welcome_style from "../styles/Welcome.module.sass"

const Welcome = () => {
    return (
        <div className={welcome_style.welcome}>
            <div className={welcome_style.welcome_info}>
                <h3>O Reino dos Melhores Jogos</h3>

                <div className={welcome_style.welcome_info_description}>
                    Jogue os melhores jogos,<br />
                    comunique com outros jogadores,<br /> 
                    crie e compartilhe as suas criações.<br/> 
                    Aqui, na <b>Kingdom Arcade</b>.
                </div>

                <div className={welcome_style.welcome_info_buttons}>
                    <button className={welcome_style.hyperlink_button}>Explorar</button>
                    <button className={welcome_style.hyperlink_button}>Criar</button>
                </div>
            </div>

            <div className={welcome_style.welcome_divisor}></div>

            <div className={welcome_style.welcome_image}>
                <Image src="/../img/king-welcome-page.svg" layout="fill"/>
            </div>

        </div>
    )
}

export default Welcome