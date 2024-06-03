import React from 'react';
import styles from './profileall.module.css';

const tweets = [
    { text: "Primeiro tweet!", date: "01 Jan 2024", likes: 10 },
    { text: "Segundo tweet!", date: "02 Jan 2024", likes: 20 },
];

export function ProfileAll () {
    return (
        <div className={styles.profilepage}>
                <div className={styles.profileheader}>
                <img className={styles.banner} src="banner-url.jpg" alt="Banner" />
                <div className={styles.profileinfo}>
                    <img className={styles.profilepicture} src="profile-picture-url.jpg" alt="Profile" />
                    <div className={styles.nameandhandle}>
                        <h1>Nome do Usuário</h1>
                        <h2>@usuario</h2>
                    </div>
                </div>
            </div>
            <div className={styles.profiledetails}>
                <p>Bio do usuário. Descrição breve sobre o usuário.</p>
                <div className={styles.stats}>
                    <span><strong>500</strong> Following</span>
                    <span><strong>1000</strong> Followers</span>
                </div>
            </div>
            <div className={styles.tweet}>
                <p>{tweets.text}</p>
                <div className={styles.tweetinfo}>
                    <span>{tweets.date}</span>
                    <span>Likes: {tweets.likes}</span>
                </div>
            </div>
        </div>
    );
};
