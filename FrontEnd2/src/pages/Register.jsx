import React from 'react';
import styles from "./register.module.css"

export function Register () {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.alinhar}>
                <span className='title'>Registro</span>
                        <div><input type='text' placeholder='Digite o seu usernme'/></div>
                        <div><input type='email' placeholder='Digite o seu email'/></div>
                        <div><input type='password' placeholder='Digite a sua senha'/></div>
                        <button>Registrar</button>
                    <a href='/login'>Já tem uma Conta? Login</a>
            </div>
        </div>
    )
}

