import React from 'react'
import makeStyles from './style'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from '@material-ui/core'
import CarouselItem from 'react-bootstrap/esm/CarouselItem'

function FeatureHead() {

    const classes = makeStyles()

    const featuredItems = [
        { img: 'https://cdn.discordapp.com/attachments/822281280615219211/937770426380214282/Free_Shipping.jpg', href: '/shop', description: 'Promotional Products Banner'},
        { img: 'https://cdn.discordapp.com/attachments/822281280615219211/937770426606682152/Promo_Caps.jpg', href: '#', description: 'The Average Man Owns 8 Promotional Caps'},
        { img: 'https://cdn.discordapp.com/attachments/822281280615219211/937770426833186876/Promo_Products.jpg', href: '#', description: 'Promotional Products'},
        { img: 'https://cdn.discordapp.com/attachments/822281280615219211/937770427038699600/Bundle_Up.jpg', href: '#', description: 'Bundle Up in Your Brand'}
    ]

    return (
        <div>
            <Carousel className={ classes.carouselContainer }>
                    {featuredItems.map((item) => (
                        <Carousel.Item interval={5000}>
                            <Link to={item.href}>
                                <img src={item.img} alt={item.description}  className='w-100' />
                            </Link>
                        </Carousel.Item>
                        ))}
            </Carousel>
        </div>
    )
}

export default FeatureHead