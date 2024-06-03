import React from 'react';
import styles from "./profiledetails.module.css"

export function ProfileDetails  ()  {
    return (
        <div className={styles.profile-details}>
            <p>Bio do usuário. Descrição breve sobre o usuário.</p>
            <div className={styles.stats}>
                <span><strong>500</strong> Following</span>
                <span><strong>1000</strong> Followers</span>
            </div>
        </div>
    );
};


