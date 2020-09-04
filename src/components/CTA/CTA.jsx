import React from 'react'
import styles from './CTA.module.scss'
import Button from '../Button/Button'

const CTA = ({link}) => {
    

    return (
        <div className={styles.container}>
            <h2 className="home-subheading">Get me a tour guide</h2>
            <p className="home-cta-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Awesom place to visit is in the Philippines.</p>
            <Button link={link}/>   
        </div>
    )
}

export default CTA
