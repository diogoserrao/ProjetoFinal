import React, { useState } from 'react'
import styles from "./login.module.css"
import { useNavigate } from "react-router-dom";

export function Login () {
    var [email,setemail] = useState("")
    var [senha,setsenha] = useState("")
    const navigate = useNavigate();

    function fazerlogin(){
        if ( (email == "diogo23") && (senha == "123")){
            console.log("Login feito com sucesso")
            localStorage.setItem("logado", "true")
            navigate("/");
        }
    }
   
    return (
        <div className={styles.mainContainer}>
            <div className={styles.alinhar}>
                <span className='title'>Login</span>
                        <div><input type='email' value={email} onChange={e => setemail(e.currentTarget.value)} placeholder='Digite o seu email'/></div>
                        <div><input type='password' value={senha} onChange={e => setsenha(e.currentTarget.value)} placeholder='Digite a sua senha'/></div>
                        <button onClick={fazerlogin}>Login</button>
            </div>
        </div>
    )
}
