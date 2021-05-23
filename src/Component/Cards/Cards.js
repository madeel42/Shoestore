import React from 'react'
import classes from '../Cards/cards.module.css'
import DATA from '../JSON/data.json'
import { Link } from 'react-router-dom'
export const Cards = () => {
    let CARDS = DATA.map(({ id, name, img }) => {
        return <div className={classes.Child} key={id}><Link to={`/items/${id}`}>  <div className={classes.IMGDIV}> <img className={classes.ChildImg} src={img} alt="" /></div></Link>
            <div className={classes.CardFooter}><p>{name}</p>
                <button>Add to Cart</button>

            </div>

        </div>
    })
    return (
        <div className={classes.MainWrapper}>
            {CARDS}
        </div>


    )
}
