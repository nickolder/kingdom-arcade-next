import authInput_style from "../../styles/AuthInput.module.sass"  

type AuthInputType = {
    type: string,
    placeholder: string,
    userDataType: string,
    condition: boolean,
    updateUserData :any,
    value: string,
}

const AuthInput = ({type, placeholder, userDataType, condition, updateUserData, value}: AuthInputType) => {
    if (condition) {
        return (
            <input 
                type={type} 
                className={authInput_style.input} 
                placeholder={placeholder} 
                autoComplete="off"
                onChange={e => updateUserData(userDataType, e)} 
                value={value}
                required
            />
        )
    } else return <></>
}

export default AuthInput
