import React, { useContext } from 'react'
import classes from '../Cards/cards.module.css'
import DATA from '../JSON/data.json'
import { GlobalContext } from '../../Context/GlobalState'
import { Link } from 'react-router-dom'
export const Cards = () => {
    const { handleClick } = useContext(GlobalContext)
    let CARDS = DATA.map((item) => {
        return <div className={classes.Child} key={item.id}><Link to={`/items/${item.id}`}>  <div className={classes.IMGDIV}> <img className={classes.ChildImg} src={item.img} alt="" /></div></Link>
            <div className={classes.CardFooter}><p>{item.name}</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>

        </div>
    })
    return (
        <div className={classes.MainWrapper}>
            {CARDS}
        </div>


    )
}
