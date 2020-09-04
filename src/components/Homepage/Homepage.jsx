import React from 'react'
import styles from './Homepage.module.scss';

import Banner from '../Banner/Banner'
import { HomeBannerContent, HomeBannerImageShowcase } from './content/HomeBanner.content.js'

import About from '../About/About';
import { HomeAboutContent } from './content/HomeAbout.content.js';

import Showcase from '../Showcase/Showcase';
import { HomeCardsContent } from './content/HomeCards.content.js';
import { HomeShowcaseContent } from './content/HomeShowcase.content.js'

const Homepage = () => {
    return (
        <div className={styles.container}>
            <Banner props={HomeBannerContent} showcase={HomeBannerImageShowcase} />
            <About props={HomeAboutContent}/>
            <Showcase props={HomeShowcaseContent} cards={HomeCardsContent}/>
        </div>
    )
}

export default Homepage
