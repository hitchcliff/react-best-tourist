import React from 'react'
import Logo from '../../../svgr/Logo';
import styles from './Desktop.module.scss'
import cx from 'classnames';
const Desktop = ({isSticky}) => {
    return (
        <div className={isSticky ? cx(styles.container, styles.active) : styles.container}>
            <div className={styles.nav}>
                <div className={styles.logo__container}>    
                    <Logo color={isSticky ? '#ffffff' : '#3B5441'}/>
                </div>
                <ul className={styles.nav__container}>
                    <li>
                        <a href="google.com" target="_blank" rel="noopener noreferrer">Home</a>
                    </li>
                    <li>
                        <a href="google.com" target="_blank" rel="noopener noreferrer">About</a>
                    </li>
                    <li>
                        <a href="google.com" target="_blank" rel="noopener noreferrer">Contact</a>
                        </li>
                    <li>
                        <a href="google.com" target="_blank" rel="noopener noreferrer">Places</a>
                    </li>
                    <li className={styles.nav__login}>
                        <a href="google.com" target="_blank" rel="noopener noreferrer">Login</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Desktop
