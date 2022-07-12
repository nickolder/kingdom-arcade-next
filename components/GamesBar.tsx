import games_style from "../styles/GamesBar.module.sass"

import Image from "next/image"
import { useEffect, useState } from "react"

type GamesBarType = {
    title: string,
    icon :string,
}

const GamesBar = ({title, icon}: GamesBarType) => {
    const [renderedItems, setRenderedItems] = useState(6)

    function handleResize() {
        if (window.innerWidth > 768) {
            setRenderedItems(
                Math.round(
                    document.getElementById('container')!.clientWidth / 290
                )
            )
        } else setRenderedItems(3)
    }


    useEffect(() => {
        handleResize()
        
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className={games_style.bar}>
            <div className={games_style.bar_title}>
                <div className={games_style.bar_title_img}><Image src={`/../img/${icon}.svg`} layout="fill"/></div>
                {title}
            </div>

            <section className={games_style.bar_games} id="container">
                { Array(renderedItems).fill(
                    <div className={games_style.bar_games_box}> 
                        <Image src="/../public/img/stock.jpg" layout="fill"/>
                    </div>
                )}
            </section>

        </div>
    )
}

export default GamesBar