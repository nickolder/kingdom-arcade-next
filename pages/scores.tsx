import Layout from "../components/Layout"
import Search from "../components/Search"
import Score from "../components/Score"

import Image from "next/image"

import scores_style from "../styles/Scores.module.sass"

const Scores = () => { 

    return (
        <>

        <Layout
            title="Recordes - Kingdom Arcade"
            keywords="recordes, melhores pontuações, kingdom arcade"
            description="Página de apresentação de melhores pontuações da Kingdom Arcade."
        />

        <div className={scores_style.page}>
            <div className={scores_style.title}>Recordes</div>
            <Search color="#f1f0ea"/>

            <div className={scores_style.content}>
                <div className={scores_style.content_scores}>
                    { Array(5).fill(<Score/>) }
                </div>

                <div className={scores_style.content_games}>
                    <div className={scores_style.content_games_thumb}>
                        <Image src="/../public/img/stock.jpg" layout="fill"/>
                    </div>

                    <div className={scores_style.content_games_header}>
                        <span className={scores_style.content_games_header_title}>Title</span>
                        <section className={scores_style.content_games_header_category}>Category</section>
                    </div>

                    <div className={scores_style.content_games_description}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}

export default Scores