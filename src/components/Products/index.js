import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {Link} from "react-router-dom"
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products/");
    setData(await res.clone().json());
    setFilter(await res.json());
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
    console.log("test")
  }, []);

  const filterProducts = (name) => {
    const updateProducts = data.filter(products => products.category === name)
    setFilter(updateProducts);
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5" key={2}>
          <button type="button" className="btn btn-outline-dark me-2" 
          onClick={() => setFilter(data)}
          >
            All
          </button>
          <button type="button" className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button type="button" className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button type="button" className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("jewelery")}
          >
            Jewelers's Clothing
          </button>
          <button type="button" className="btn btn-outline-dark me-2"
          onClick={() => filterProducts("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((products) => {
          return (
            <>
            <div className = 'col-md-3 mb-4' key={products.id}>
              <div className="card h-100 text-center p-4">
                <img src= {products.image} className="card-img-top" alt="..." height="250px" />
                <div className="card-body">
                  <h5 className="card-title">{products.title.substring(0,11)}</h5>
                  <p className="card-text lead fw-bold">
                    ${products.price}
                  </p>
                  <Link to={`/products/${products.id}`} className="btn btn-outline-dark">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            </>
          );
        })}
      </>
    );
  };
  const Loading = () => {
    return (
        <>
            <div className = 'col-md-3'>
            <Skeleton height={350}/>
            </div>
            <div className = 'col-md-3'>
            <Skeleton height={350}/>
            </div>
            <div className = 'col-md-3'>
            <Skeleton height={350}/>
            </div>
            <div className = 'col-md-3'>
            <Skeleton height={350}/>
            </div>
        </>
    )
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bold text-center"> Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Products;
