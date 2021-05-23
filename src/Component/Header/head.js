import React from 'react'
import classes from './header.module.css'
import {
    Link
} from 'react-router-dom'
export const Head = () => {
    return <>
        <div className={classes.MainWrapper}>
            <p>Icon</p>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/cart"> <li>Cart</li></Link>
            </ul>
        </div>
    </>
}
