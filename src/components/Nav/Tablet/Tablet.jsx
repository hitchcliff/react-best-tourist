import React from 'react'
import styles from './Tablet.module.scss'
import Logo from '../../../svgr/Logo'
import { useState } from 'react'
import cx from 'classnames';
const Tablet = ({isSticky}) => {
    const [state, setState] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.logo__container}>    
                    <Logo color={isSticky ? '#ffffff' : '#3B5441'}/>
                </div>
                <div className={isSticky ? cx(styles.burger, styles.active) : styles.burger} onClick={e => setState(!state)}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>
                <ul className={state ? cx(styles.mobile__dropdown, styles.active) : styles.mobile__dropdown}>
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

export default Tablet
