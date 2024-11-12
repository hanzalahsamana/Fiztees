
import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { useDispatch } from 'react-redux'
import { setCartData } from '@/Redux/CartData/cartDataSlice'
import { setError, setLoading, setProductData } from '@/Redux/Products/productDataSlice'
import { fetchProducts } from '@/Apis/FetchProducts'

const Layout = ({ chidren }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCartData(localStorage.getItem('cartId')))
        const getProducts = async () => {
            dispatch(setLoading(true));
            try {
              const data = await fetchProducts();
              dispatch(setProductData(data));
            } catch (err) {
              dispatch(setError(err.message));
            } finally {
              dispatch(setLoading(false));
            }
          };
      
          getProducts();
    }, [dispatch])
    return (
        <div className='flex flex-col items-center'>
            <Header />
            {chidren}
            <Footer />
        </div>
    )
}

export default Layout