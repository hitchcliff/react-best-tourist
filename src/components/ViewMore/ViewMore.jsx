import React from 'react'
import styles from './ViewMore.module.scss'
const ViewMore = ({link}) => {

    return (
        <button className={styles.viewMore}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                View more
            </a>
        </button>
    )
}

export default ViewMore
