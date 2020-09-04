import React from 'react'
import styles from './Footer.module.scss'
import Button from '../Button/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.footer__details}>
                    <h6>philippines</h6>
                    <h2>Book one of our best tourist destinations...</h2>
                    <Button/>
                </div>  
                <div className={styles.footer__additional}>
                    <ul className={styles.footer__additionalList}>
                        <li className={styles.footer__additionalListItem}>
                            <span>Call Us</span>
                            <p>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                +98 123 4567 891
                            </p>
                        </li>
                        <li className={styles.footer__additionalListItem}>
                            <span>Address</span>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                Philippines, 9200, Iligan City

                            </p>
                        </li>
                        <li className={styles.footer__additionalListItem}>
                            <span>Email Us</span>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                hitchcliff1@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
