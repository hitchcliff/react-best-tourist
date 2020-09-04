import React, { useEffect, useState } from 'react'
import styles from './Nav.module.scss';

import cx from 'classnames'
import Desktop from './Desktop/Desktop';
import Tablet from './Tablet/Tablet';

const Nav = () => {

    const [isSticky, setIsSticky] = useState(false)
    const [scroll, setScroll] = useState(0)

    window.addEventListener('scroll', (e) => setScroll(window.scrollY));

    useEffect(() => {
        if(scroll >= 50) {
            setIsSticky(true);
        } else if(scroll < 10) {
            setIsSticky(false);
        } else {
            setIsSticky(false);
        }
    }, [scroll])


    return (
        <nav className={isSticky ? cx(styles.container, styles.active) : styles.container}>
            <Desktop isSticky={isSticky}/>
            <Tablet isSticky={isSticky}/>
        </nav>
    )
}

export default Nav
