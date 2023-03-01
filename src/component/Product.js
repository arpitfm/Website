import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const Product = () => {
    const data = useSelector((state) => state.productreducer.product);
    return (
        <div className='cardgroup'>
            {
                data?.map((element) => {
                    const { id } = element;
                    return (
                        <Card
                            key={id}
                            {...element}
                        />
                    )
                })
            }
        </div>
    )
}

export default Product
