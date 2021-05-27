import React, { useContext } from 'react'
import classes from './header.module.css'
import LOGO from '../../assets/sneaker.png'
import { GlobalContext } from '../../Context/GlobalState'
import {
    Link
} from 'react-router-dom'
export const Head = () => {
    const { cartData } = useContext(GlobalContext)
    return <>
        <div className={classes.MainWrapper}>
            <Link to="/"> <img style={{ width: '38px', height: 'auto' }} src={LOGO} alt="" /></Link>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/cart"> <li>Cart <span className={classes.ITEMSCOUNT}>{cartData && cartData ? cartData.length : 0}</span></li></Link>
            </ul>
        </div>
    </>
}
