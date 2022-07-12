import explore_style from "../styles/Explore.module.sass"

import Layout from "../components/Layout"
import Search from "../components/Search"

const Explore = () => {
    return (
        <>
            <Layout
                title="Explorar - Kingdom Arcade"
                keywords="explorar, jogos, categorias, kingdom arcade"
                description="Página de apresentação dos jogos, dividos em categorias da Kingdom Arcade."
            />

            <div className={explore_style.page}>
                <div className={explore_style.title}>Explorar</div>

                <div>
                    <div>Categorias</div>
                    
                </div>
            </div>
        </>
    )
}

export default Explore