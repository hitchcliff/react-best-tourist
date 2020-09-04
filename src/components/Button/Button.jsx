import React from 'react'
import styles from './Button.module.scss'
const Button = ({link}) => {
    return (
        <button className={styles.button}>
            <a href={link ? link : "#default.com"} target="_blank" rel="noopener noreferrer">
                Book now
            </a>
        </button>
    )
}

export default Button
