import Image from "next/image"
import score_style from "../styles/Score.module.sass"

const Score = () => {
    return (
        <div className={score_style.score}>
            <div className={score_style.score_position}>1</div>

            <div className={score_style.score_info}>
                <div className={score_style.score_info_profile}>
                    <Image src="/../img/default-profile.svg" layout="fill"/>
                </div>

                <div className={score_style.score_info_names}>
                    <span>Utilizador 1</span>
                    <small>@utilizador1</small>
                </div>

                <div className={score_style.score_info_score}>3476</div>
            </div>
        </div>
    )
}

export default Score