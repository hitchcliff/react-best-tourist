import React from 'react'
import styles from './About.module.scss'
import Button from '../Button/Button'
const About = ({props}) => {
    const {subheading, heading, description, link, image} = props;
    return (
        <div className={styles.container}>
            <div className={styles.about__details}>
                <h6 className="about-subheading">{subheading}</h6>
                <h2 className="about-heading">{heading}</h2>
                <p className="about-paragraph">{description}</p>
                <div>
                    <Button link={link}/>
                </div>
            </div>
            <div className={styles.about__image}>
                <img src={image} alt={heading}/>
            </div>
        </div>
    )
}

export default About
