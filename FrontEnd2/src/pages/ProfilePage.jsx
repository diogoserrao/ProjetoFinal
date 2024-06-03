import React from 'react';
import ProfileDetails from './ProfileDetails';
import ProfileHeader from './ProfileHeader';
import Tweet from './Tweet';
import styles from './profile.css?inline';

const tweets = [
    { text: "Primeiro tweet!", date: "01 Jan 2024", likes: 10 },
    { text: "Segundo tweet!", date: "02 Jan 2024", likes: 20 },
];

export function ProfilePage () {
    return (
        <div className={stylesprofile-page}>
            <ProfileHeader />
            <ProfileDetails />
            <div className={styles.tweets}>
                {tweets.map((tweet, index) => (
                    <Tweet key={index} tweet={tweet} />
                ))}
            </div>
        </div>
    );
};

