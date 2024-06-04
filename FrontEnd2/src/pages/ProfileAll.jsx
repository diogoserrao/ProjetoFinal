import { Tweet } from '../components/Tweet';
import styles from './profileall.module.css';
import React, { useState, useEffect } from 'react';


const tweets = [
    { text: "Primeiro tweet!", date: "01 Jan 2024", likes: 10 },
    { text: "Segundo tweet!", date: "02 Jan 2024", likes: 20 },
];

export function ProfileAll () {
    const [users, setUsers] = useState([]);
    console.log(users)
  const getUsers = () => {
    fetch("http://localhost:3000/users") // Substitua pela URL real da API
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
    
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
                    <span>{tweets.date}</span>
                    <div>Tweets </div>
                    <div>Repost {tweets.likes}</div>
                    <div>Likes {tweets.likes}</div>
            </div>
        </div>
    );
};
