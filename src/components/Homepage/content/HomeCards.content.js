import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain, faHelicopter } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'

export const HomeCardsContent = [
    {
        icon: <FontAwesomeIcon icon={faEye} />,
        title: 'Best places for Sigtseeing',
        description: 'Fusce vel lorem vel nunc facilisis porttitor sit amet at quam. Proin id porta mauris. Donec iaculis tincidunt ante in auctor.',
        hasCta: false
    },
    {
        icon: <FontAwesomeIcon icon={faHelicopter} />,
        title: 'Free Helicopter Rides',
        description: 'Fusce vel lorem vel nunc facilisis porttitor sit amet at quam. Proin id porta mauris. Donec iaculis tincidunt ante in auctor.',
        hasCta: true
    },
    {
        icon: <FontAwesomeIcon icon={faMountain} />,
        title: 'Tons of Mountains',
        description: 'Fusce vel lorem vel nunc facilisis porttitor sit amet at quam. Proin id porta mauris. Donec iaculis tincidunt ante in auctor.',
        hasCta: false
    }
]