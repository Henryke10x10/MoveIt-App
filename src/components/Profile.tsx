import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/henryke10x10.png" alt="Jedson Henrique" />
            <div>
                <strong>Jedson Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}