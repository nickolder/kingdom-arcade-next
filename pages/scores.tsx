import Layout from "../components/Layout"
import Search from "../components/Search"
import Score from "../components/Score"

import scores_style from "../styles/Scores.module.sass"

const Scores = () => {
    return (
        <>

        <Layout
            title="Recordes - Kingdom Arcade"
            keywords="recordes, melhores pontuações, kingdom arcade"
            description="Página de apresentação de melhores pontuações da Kingdom Arcade."
        />

        <div className={scores_style.scores}>
            <div className={scores_style.scores_title}>Recordes</div>
            <Search/>

            <div>
                { Array(5).fill(<Score/>) }
            </div>
        </div>

        </>
    )
}

export default Scores