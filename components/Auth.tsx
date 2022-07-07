import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

import auth_style from "../styles/Auth.module.sass"

import Image from "next/image"
import { useRef, useState } from "react"

type UserType = {
    name: String,
    username: String,
    email: String,
    password: String,
}

async function registerUser (user: UserType) {
    const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(user)
    })

    if (!res.ok) 
        throw new Error(res.statusText)

    return await res.json()
}

const Auth = () => {

    const [is_signin, setIsSignIn] = useState(true)
    const [password_shown, setPasswordShown] = useState(false)

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fileInput = useRef<any>(null)

    function openFileInput () {
        fileInput.current.click()
    }

    function toggleAuth () {
        setIsSignIn(!is_signin)
        setPasswordShown(false)
    }

    function handleSubmit (e: any) {
        e.preventDefault()
    }

    return (
        <div className={auth_style.modal_content}>
            <div className={auth_style.modal_content_close}>
                <FontAwesomeIcon className= {auth_style.modal_content_close_i} icon={faXmark} />
            </div>

            <div className={auth_style.auth}>
                <h3 className={auth_style.auth_title}>{!is_signin ? 'Criar Conta' : 'Iniciar Sessão'}</h3>

                <div className={auth_style.auth_user_displayer}>
                    <div className={auth_style.picture_input} onClick={openFileInput}>
                        <div className={auth_style.picture_input_img}><Image src="/img/default-profile.svg" layout="fill"/></div>
                        <div className={auth_style.add_img}><FontAwesomeIcon icon={faCirclePlus}/></div>
                    
                        <input ref={fileInput} type="file" accept="image/png, image/jpeg, image/gif" hidden/>
                    </div>

                    <div className={auth_style.auth_user_data}>
                        <span>{ name === '' ? 'Novo utilizador' : name }</span>
                        <small>{ username === '' ? '@username' : '@' + username }</small>
                    </div>
                </div>

                <form className={auth_style.auth_form} onSubmit={handleSubmit}>

                    { !is_signin ? 
                    <input 
                        type="text" 
                        className={auth_style.auth_form_input} 
                        placeholder="Nome" 
                        autoComplete="off" 
                        onChange={e => setName(e.target.value)} 
                        required
                    /> : <></> }

                    <input 
                        type="text" 
                        className={auth_style.auth_form_input} 
                        placeholder="Username" 
                        autoComplete="off" 
                        onChange={e => setUsername(e.target.value)} 
                        required
                    />
                    
                    { !is_signin ? 
                    <input 
                        type="email" 
                        className={auth_style.auth_form_input} 
                        placeholder="Email" 
                        autoComplete="off" 
                        onChange={e => setEmail(e.target.value)} 
                        required
                    /> : <></> }
                
                    <div className={`${auth_style.auth_form_input} ${auth_style.auth_form_password}`}>
                        <input 
                            type={ !password_shown ? 'password' : 'text'} 
                            placeholder="Password" 
                            autoComplete="off"
                            onChange={e => setPassword(e.target.value)} 
                            required
                        />
                        
                        <div className={auth_style.auth_form_password_img} onClick={() => setPasswordShown(!password_shown)}>
                            <Image src={`/img/${!password_shown ? 'blind-' : ''}eye-icon.svg`} layout="fill"/>
                        </div>
                    </div>

                    <button className={auth_style.auth_form_submit} type="submit">Submeter</button>

                    <p className={auth_style.auth_form_toggle_msg}>
                        { is_signin ? 'Ainda não tem conta?' : 'Já tem conta criada?'}&nbsp;
                        <a className={auth_style.current_msg} onClick={toggleAuth}>{ is_signin ? 'Crie Conta' : 'Inicie sessão'}</a>.   
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Auth
