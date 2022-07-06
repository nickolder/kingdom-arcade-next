import Image from "next/image"
import { useContext } from "react"

import shortcut_style from "../../styles/Shortcut.module.sass"

const Shortcut = ({shortcut}: {shortcut: any}) => {
    return (
        <li className={shortcut_style.shortcut}>
            <div className={shortcut_style.shortcut_img}>
                <Image src={`/../img/${shortcut.path}.svg`} layout="fill"/>
            </div>

            <span>{shortcut.name}</span>
        </li>
    )
}

export default Shortcut