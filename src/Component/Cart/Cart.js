import React, { useContext } from 'react'
import classes from './Carts.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '../../Context/GlobalState'
export const Cart = ({ history }) => {
    const { cartData, handleIncrement, handleDecrement, handleClear } = useContext(GlobalContext);
    const notify = () => {
        handleClear([])
        toast.success('Thanks For Purchase!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        if (cartData.length !== 0) {
            history.push('/')
        }
    }
    return <>
        {cartData && cartData.length !== 0 ? cartData.map((item, i) => {
            return <div className={classes.CARTWRAPPER} key={i}>
                <div className={classes.PARENT}>
                    <div className={classes.IMGDIV}> <img src={item.img} className={classes.CARTIMG} alt="" /></div>
                </div>
                <div className={classes.DESCRIPION}><p>{item.description}</p></div>
                <div className={classes.PRICE}>{item.price * item.counter}/Rs</div>
                <div className={classes.OPERATORS}><button onClick={() => handleIncrement(item)}>+</button><p>{item.price * item.counter}/Rs</p><button onClick={() => handleDecrement(item)}>-</button></div>
            </div>
        }) : <h2 style={{ textAlign: 'center' }}>No Product in Cart</h2>}

        {cartData.length !== 0 && <div className={classes.BUTTON}><button onClick={notify}>Purchase</button></div>}
        <ToastContainer />
    </>
}
