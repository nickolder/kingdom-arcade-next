import Shortcut from "./Shortcut"
import shortcuts_style from "../../styles/ShortcutsDisplayer.module.sass"
import Link from "next/link"

const ShortcutsDisplayer = () => {
    const shortcuts = [
        {
           name: 'Explorar',
           path: 'explore', 
           route: '/explore',
        },

        {
            name: 'Carregar',
            path: 'upload',
            route: '/upload',
        },

        {
            name: 'Recordes',
            path: 'scores',
            route: '/scores',
        },

        {
            name: 'Sobre Nós',
            path: 'about-us',
            route: '/about-us',
        },
    ]

    return (
        <div className={shortcuts_style.shortcuts}>
            { shortcuts.map((shortcut) => { 
                return (
                    <Link href={shortcut.route} key={shortcuts.indexOf(shortcut)}>
                        <a><Shortcut {...shortcut}/></a>
                    </Link>
                )
            })}
        </div>
    )

}

export default ShortcutsDisplayer