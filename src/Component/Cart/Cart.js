import React from 'react'
import classes from './Carts.module.css'
import Adpng from './../../assets/ad.png'
export const Cart = () => {
    return <>
        <div className={classes.CARTWRAPPER}>
            <div className={classes.PARENT}>
                <div className={classes.IMGDIV}> <img src={Adpng} className={classes.CARTIMG} alt="" /></div>
            </div>
            <div className={classes.DESCRIPION}><p>Shoes gkdckxkc xc x cxxc vxc  vxc vc v c vxcv xc v  vc  v f bfbvnj njnjnj njnnjn jnnnnnin  v v f vf v fvfvff</p></div>
            <div className={classes.PRICE}>1000$</div>
            <div className={classes.OPERATORS}><button>+</button><p>34$</p><button>-</button></div>
        </div>
        <div className={classes.BUTTON}><button>Purchase</button></div>
    </>
}
