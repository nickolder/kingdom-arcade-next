import Image from "next/image"
import Link from "next/link"

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
                    <Link href="#">
                        <button className={welcome_style.hyperlink_button}>Explorar</button>
                    </Link>

                    <Link href="/create">
                        <button className={welcome_style.hyperlink_button}>Carregar</button>
                    </Link>
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