import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
// import products from '../data/data.js'
import '../css/SingleItem.css'
// import { Link } from 'react-router-dom'
import InfoBanner from './InfoBanner.jsx'
// import cart from '../data/cartData.js'
import { useEffect } from 'react'


const SingleItem = () => {


    let { _id } = useParams();

    const [item, setItem] = useState([]);

    const addToCart = async () => {
        const res = await fetch(`http://localhost:80/api/atc/${_id}`, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            credentials: 'include'

        })
       
    }

    const getProduct = async () => {

        const res = await fetch("http://localhost:80/browse", {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            credentials: 'include'

        })

        const data = await res.json();
        // setProduct(data)
        const temp = data.filter(e => e._id === _id)
        console.log(temp)
        setItem(temp)

    }

    useEffect(() => {
        getProduct();
        window.scrollTo(0, 0)

    }, [])

    return (
        <>
            <InfoBanner />

            <br />
            <br />
            <br />

            {item.map(e => {
                return (
                    <>
                        <section className='container d-flex'>

                            <div id='itemleft' className='text-center'>
                                <img src={e.image} alt='...' className='w-50' />
                            </div>

                            <div id='itemright' className='container'>

                                <span className='smol'>JUST IN</span><br />
                                <span className='big'>{e.brand}</span><br />
                                <span className='smol'>{e.desc}</span>
                                <br />
                                <br />
                                <h6>${e.price}</h6>
                                <br />
                                <p className='smol'>Color: {e.color}</p>
                                <br />
                                <span className='smol'>Select a size</span>
                                <br />
                                <button className='btns'>US 2</button>
                                <button className='btns'>US 4</button>
                                <button className='btns'>US 6</button>
                                <button className='btns'>US 8</button>
                                <br />
                                <br />
                                <br />
                                <button className='col-11' id='add2cart' onClick={addToCart}>Add To Bag</button>
                                <br />
                                <button className='col-11' id='add2wish'>Add To Wish List</button>

                            </div>


                        </section>
                    </>
                )
            })

            }

         

        </>
    )
}

export default SingleItem