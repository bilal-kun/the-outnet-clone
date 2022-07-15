import React from 'react'
import { useState } from 'react';
import trash from '../images/delete.png'
import cart from '../data/cartData';
import { ToastContainer, toast } from 'react-toastify';
import { cssTransition } from 'react-toastify';
import 'animate.css'
import 'react-toastify/dist/ReactToastify.css';
import '../css/CartItem.css'

const CartItem = ({ product }) => {

    let [amount, setAmount] = useState(1)

    const bounce = cssTransition({
        enter: "animate__animated animate__wobble",
        exit: "animate__animated animate__wobble"
    })

    const test = () => {
        toast.dark("This is how toast works!", {
            transition: bounce
        });
    }


    let increment = () => {
        if (amount >= 1) {
            setAmount(amount + 1);
        }
    }

    let decrement = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }

    }

    const delItem = () => {
        cart = cart.filter(product.id)
    }

    return (
        <>
            <div className='testLeft ' key={product.id}>
                <img src={product.image} className='cartImg' alt='...' />
                <div className='cartInfo'>
                    <h6>{product.brand}</h6>
                    <p>{product.desc}</p>
                    <p>Color&emsp;|&emsp;{product.color}</p>
                    <p id='prodPrice'>${product.price}</p>
                    <button className='inline amountBtns' id='subBtn' onClick={decrement}>-</button>
                    &emsp;
                    <p className='inline smol' id='amount'>{amount}</p>
                    &emsp;
                    <button className='inline amountBtns' id='addBtn' onClick={increment}>+</button>
                    &emsp;&emsp;<button><img src={trash} alt="..." onClick={test} /></button>
                    <ToastContainer limit={1} position="bottom-right" transition={bounce}/>
                </div>

            </div>

        </>
    )
}

export default CartItem