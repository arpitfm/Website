import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setproducts } from '../redux/action/action'
import Product from '../component/Product'

const Home = () => {
    const disptach = useDispatch();
    const api = "https://api.pujakaitem.com/api/products";
    const data = {
        name: "Fake Web",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorum.",
        image: "./image/image1.png",
    }
    const getproducts = async (url) => {
        try {
            const data = await axios.get(url);
            disptach(setproducts(data.data));
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getproducts(api);
    }, [])
    return (
        <div className='container'>
            <Hero {...data} />
            <Product />
        </div>
    )
}

export default Home
