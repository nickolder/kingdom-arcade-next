import React, { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import ShortcutsDisplayer from "./ShortcutsDisplayer"

import nav_style from "../../styles/Nav.module.sass"
import modal_style from "../../styles/Modal.module.sass"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import Modal from "../Modal"
import ModalContext from "../../contexts/ModalContext"

const Nav = () => {
    const [auth_on, setAuthOn] = useState(false)

    const Auth = require('../auth/Auth').default

    function clickAnywhere (e :any) {
        if (e.target.className === modal_style.modal) {
            setAuthOn(false)
        }
    }

    return (
        <>

        <nav className={nav_style.nav}>
            <Link href="/">
                <div className={nav_style.logo}>
                    <div className={nav_style.logo_container}>
                        <Image src="/../img/logo_ka_1.svg" layout="fill"/>
                    </div>

                    <span>Kingdom Arcade</span>
                </div>
            </Link>

            <ShortcutsDisplayer/>

            <div className={nav_style.buttons}>
                <div className={nav_style.search_icon}><Image src="/../img/search-icon.svg" layout="fill"/></div>
                <button className={nav_style.buttons_sign_in} onClick={() => setAuthOn(!auth_on)}>Entrar</button>
                <div className={nav_style.buttons_alt_sign_in} onClick={() => setAuthOn(!auth_on)}>
                    <FontAwesomeIcon icon={faUserCircle}/>
                </div>
            </div>
        </nav>

        { auth_on ? 
            <ModalContext.Provider value={[auth_on, setAuthOn]}>
                <Modal ModalContent={Auth} clickAnywhere={clickAnywhere}></Modal> 
            </ModalContext.Provider>
        : <></> }

        </>
    )
}

export default Nav