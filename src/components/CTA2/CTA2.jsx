import React from 'react'
import styles from './CTA2.module.scss'
import Button from '../Button/Button'

const CTA2 = () => {
    
    return (
        <div className={styles.container}>
            <h4>Visit this country</h4>
            <div>
                <Button link="#visit"/>
            </div>
        </div>
    )
}

export default CTA2
