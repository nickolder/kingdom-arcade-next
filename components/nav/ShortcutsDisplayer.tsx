import Shortcut from "./Shortcut"
import shortcuts_style from "../../styles/ShortcutsDisplayer.module.sass"

const ShortcutsDisplayer = () => {
    const shortcuts = [
        {
           'name': 'Início',
           'path': 'home', 
        },

        {
            'name': 'Categorias',
            'path': 'categories',
        },

        {
            'name': 'Sobre Nós',
            'path': 'about-us',
        },

        {
            'name': 'Ajuda',
            'path': 'help',
        },
    ]

    return (
        <div className={shortcuts_style.shortcuts}>
            { shortcuts.map((shortcut) => <Shortcut {...shortcut} key={shortcuts.indexOf(shortcut)}/>) }
        </div>
    )

}

export default ShortcutsDisplayer