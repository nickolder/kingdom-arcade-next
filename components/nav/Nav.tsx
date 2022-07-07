import React, { useState, createContext, useEffect } from "react"

import Image from "next/image"

import ShortcutsDisplayer from "./ShortcutsDisplayer"

import nav_style from "../../styles/Nav.module.sass"
import modal_style from "../../styles/Modal.module.sass"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import Modal from "../Modal"

const Nav = () => {
    const [auth_modal_on, setAuthModalOn] = useState(false)
    const Auth = require('../Auth').default

    function clickAnywhere (e :any) {
        if (e.target.className === modal_style.modal) {
            setAuthModalOn(false)
        }
    }

    return (
        <>

        <nav className={nav_style.nav}>
            <div className={nav_style.logo}>
                <div className={nav_style.logo_container}><Image src="/../img/logo_ka_1.svg" layout="fill"/></div>
                <span>Kingdom Arcade</span>
            </div>

            <ShortcutsDisplayer/>

            <div className={nav_style.buttons}>
                <div className={nav_style.search_icon}><Image src="/../img/search-icon.svg" layout="fill"/></div>
                <button className={nav_style.buttons_sign_in} onClick={() => setAuthModalOn(!auth_modal_on)}>Entrar</button>
                <div className={nav_style.buttons_alt_sign_in}><FontAwesomeIcon icon={faUserCircle}/></div>
            </div>
        </nav>

        { auth_modal_on ? <Modal ModalContent={Auth} clickAnywhere={clickAnywhere}></Modal> : <></> }

        </>
    )
}

export default Nav