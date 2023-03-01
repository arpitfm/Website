import React from 'react'
import FormatPrice from './Formatprice'

const Card = ({ image, price, category }) => {
    return (
        <div className='card'>
            <div className="image">
                <img src={image} alt="#" />
            </div>
            <div className="content">
                <div className="category">
                    <h5>{category}</h5>
                </div>
                <div className="price">
                    <h5><FormatPrice price={price
                    } /></h5>
                </div>
            </div>
        </div>
    )
}

export default Card
