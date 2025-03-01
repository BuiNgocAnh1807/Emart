import React, {useEffect,useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import Skeleton from "react-loading-skeleton";
const ProductId  = () => {
    const {id} = useParams()
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const getProduct = async () => {
        setLoading(true)
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        console.log(res)
        setProduct(await res.json())
        setLoading(false)
    }
    useEffect(() => {
        getProduct()
    },[])
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                <Skeleton height = {400}/>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className = 'col-md-6'>
                    <img src={product.image} 
                    height="400px" width="400px"
                    />
                </div>
                <div className = 'col-md-6'>
                    <h4 className = 'text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className = 'display-5'>{product.title}</h1>
                    <p className='lead'>
                        Rating1 {product.rating && product.rating.rate}<i class="bi bi-star ms-1"></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p className='lead'>
                        {product.description}
                    </p>
                    <button type="button" className="btn btn-outline-dark me-2">Add to cart</button>
                    <Link to={'/cart'} className="btn btn-dark me-2">Go to cart</Link>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className="container home-margin-top-product mb-3">
            <div className="row">
                {loading ? <Loading /> : <ShowProduct/>}
            </div>
        </div>

    </div>
  )
}
export default ProductId
