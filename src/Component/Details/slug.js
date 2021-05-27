import React from 'react'
import DATA from '../JSON/data.json'
import classes from './slug.module.css'
export const Details = ({ match }) => {
  let Product = DATA.find(item => parseInt(match.params.slug) === item.id)
  return (
    <div className={classes.WRAPPER}>
      <div className={classes.FCOL} >
        <div className={classes.FCOLCHILD}><img src={Product.img} alt="" /></div>
      </div>
      <div className={classes.SCOL}><h2>{Product.name}</h2 >
        <p>{Product.price}/Rs</p>
        <p className={classes.DESCRIPTION}>{Product.description}</p>
      </div>
    </div>
  )
}
