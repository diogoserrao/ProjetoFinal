import React from 'react';
import styles from'./tweet.module.css';

const Tweet = ({ tweet }) => {
    return (
        <div className={styles.tweet}>
            <p>{tweet.text}</p>
            <div className={styles.tweet-info}>
                <span>{tweet.date}</span>
                <span>Likes: {tweet.likes}</span>
            </div>
        </div>
    );
};

export default Tweet;
