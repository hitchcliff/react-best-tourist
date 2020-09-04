import React from 'react'
import styles from './Banner.module.scss'
import CTA from '../CTA/CTA'
import ViewMore from '../ViewMore/ViewMore'

const Banner = ({props, showcase}) => {

    const mapContentProps = props.map((item, index) => (
        <div key={index} className={styles.banner__content}>
            <div className={styles.banner__showcaseContent}>
                {item.title.length ? item.title.map((title, i) => <div key={i}>
                    <h4>{title}</h4></div>) : item.title}
                <ViewMore link={item.link}/>
            </div>

            <div className={styles.banner__showcaseImage}>
                <img src={item.showcase} alt={item.title}/>
            </div>    
        </div>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.banner_container}>
                <div className={styles.banner__image}>
                    <img src={showcase.showcase} alt={showcase.alt} />
                    <div>
                        <h3> {showcase.subheading}</h3>
                        <h1 className="home-heading">{showcase.heading}</h1>
                    </div>
                </div>
                <div className={styles.banner__details}>
                    {mapContentProps}
                    <CTA link={showcase.link}/>
                </div>
            </div>
        </div>
    )
}

export default Banner
