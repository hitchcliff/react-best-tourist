import React from 'react'
import styles from './Cards.module.scss'
const Cards = ({props}) => {
    console.log(props)
    const mapCardProps = props.map((item, index) => (
        <div key={index} className={styles.card__content}>
            {item.icon}
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            
        </div>
    ))
    return (
        <div className={styles.container}>
            {props.length ? mapCardProps : null}
        </div>
    )
}

export default Cards
