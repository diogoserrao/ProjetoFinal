import React from 'react';
import styles from './profileheader.module.css';

export function ProfileHeader  ()  {
    return (
        <div className={styles.profileheader}>
            <img className={styles.banner} src="banner-url.jpg" alt="Banner" />
            <div className={styles.profile-info}>
                <img className={styles.profilepicture} src="profile-picture-url.jpg" alt="Profile" />
                <div className={styles.name-and-handle}>
                    <h1>Nome do Usuário</h1>
                    <h2>@usuario</h2>
                </div>
            </div>
        </div>
    );
};

