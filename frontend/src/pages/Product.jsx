import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
//components
import ProductHd from '../components/ProductHd'
import ProductDisplay from '../components/ProductDisplay'
import ProductDescription from '../components/ProductDescription'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product Not Found</div>
    }

    return (
        <section className='max-padd-container'>
            <div className='max-padd-container bg-primary rounded-3xl py-20'>
                <ProductHd product={product} />
                <ProductDisplay product={product} />
                <ProductDescription />
                <RelatedProducts />
            </div>
        </section>
    )
}

export default Product