import React from 'react'
import styles from './Showcase.module.scss'
import Cards from '../Cards/Cards'
import ViewMore from '../ViewMore/ViewMore';
import CTA2 from '../CTA2/CTA2';
const Showcase = ({cards, props}) => {
    const { subheading, heading, description, image } = props; 
    return (
        <div className={styles.container}>
            <Cards props={cards}/>
            <div className={styles.showcase}>
                <div className={styles.showcase__content}>
                    <div className={styles.showcase__contentDetails}>
                        <h6>{subheading}</h6>
                        <h2>{heading}</h2>
                        <p>{description}</p>
                        <ViewMore link="#showcase"/>
                    </div>
                    <div className={styles.showcase__contentImage}>
                        <img src={image} alt={heading}/>
                    </div>
                </div>
            </div>
            <CTA2/>
        </div>
    )
}

export default Showcase
