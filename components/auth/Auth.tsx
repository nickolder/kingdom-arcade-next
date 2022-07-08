import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

import auth_style from "../../styles/Auth.module.sass"

import Image from "next/image"
import { useRef, useState } from "react"
import AuthInput from "./AuthInput"

type UserType = {
    name: string,
    username: string,
    email: string,
    password: string,
}

async function registerUser (user: UserType) {
    const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(user),
        
    }).then(res => res.json())
}

const Auth = () => {

    const [is_signin, setIsSignIn] = useState(true)
    const [password_shown, setPasswordShown] = useState(false)

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fileInput = useRef<any>(null)

    const authInputsData = [
        {
            type: 'text',
            placeholder: 'Nome',
            value: name,
            userDataType: 'name',
            condition: !is_signin,
        },

        {
            type: 'text',
            placeholder: 'Username',
            value: username,
            userDataType: 'username',
            condition: true,
        },

        {
            type: 'email',
            placeholder: 'Email',
            value: email,
            userDataType: 'email',
            condition: !is_signin,
        },
    ]

    function openFileInput () {
        if (fileInput.current)
            fileInput.current.click()
    }

    function toggleAuth () {
        setIsSignIn(!is_signin)
        setPasswordShown(false)
    }

    function updateUserData (userDataType: string, e: any) {
        switch (userDataType) {
            case 'name':
                setName(e.target.value)
                break

            case 'username':
                setUsername(e.target.value)
                break

            case 'email':
                setEmail(e.target.value)
                break
        }
    }

    function handleSubmit (e: any) {
        e.preventDefault()

        if (!is_signin) {

            const user = {
                name: name,
                username: username,
                email: email,
                password: password,
            }
    
            registerUser(user)  
        }
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
                        <div className={auth_style.picture_input_img} data-clickable={!is_signin}><Image src="/img/default-profile.svg" layout="fill"/></div>
                        { !is_signin ? <div className={auth_style.add_img}><FontAwesomeIcon icon={faCirclePlus}/></div> : <></> }
                    
                        { !is_signin ? <input ref={fileInput} type="file" accept="image/png, image/jpeg, image/gif" hidden/> : <></> }
                    </div>

                    <div className={auth_style.auth_user_data}>
                        <span>{ name === '' || is_signin ? 'Novo utilizador' : name }</span>
                        <small>{ username === '' || is_signin ? '@username' : '@' + username }</small>
                    </div>
                </div>

                <form className={auth_style.auth_form} onSubmit={handleSubmit}>

                    { authInputsData.map((data) => {
                        return (
                            <AuthInput
                                key={data.userDataType} 
                                type={data.type} 
                                placeholder={data.placeholder}
                                userDataType={data.userDataType}
                                condition={data.condition}
                                updateUserData={updateUserData}
                                value={data.value}
                            />
                        )
                    }) }
                
                    <div className={`${auth_style.auth_form_input} ${auth_style.auth_form_password}`}>
                        <input 
                            type={ !password_shown ? 'password' : 'text'} 
                            placeholder="Password" 
                            autoComplete="off"
                            value={password}
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
                        <a href="javascript:void(0)" className={auth_style.current_msg} onClick={toggleAuth}>{ is_signin ? 'Crie Conta' : 'Inicie sessão'}</a>.   
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Auth