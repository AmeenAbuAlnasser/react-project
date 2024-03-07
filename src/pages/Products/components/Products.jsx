import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loder from "../../Loader/Loder";

function Products() {
  const params = useParams().id;
  const [products, setProducts] = useState([]);
  const [loder, setLoder] = useState(true);
  const getAllProducts = async () => {
    try{
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/category/${params}`
    );
    setProducts(data.products);
    setLoder(false);
    }catch(error){
        setLoder(false);
    }
  };
  console.log(products);
  useEffect(() => {
    getAllProducts();
  }, []);

  if (loder) {
    return <Loder />;
  }
  return (
    <>
      {/* <div>
        {products.map((product) => (
            <div key={product._id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Stock: {product.stock}</p>
            </div>
        ))}
    </div> */}
      {products.length > 0
        ? products.map((product) => (
            <div
              className="container"
              style={{ height: "500px" }}
              key={product._id}
            >
              <div className="row gx-3">
                {products.map((product) => (
                  <div className="col my-2" key={product._id}>
                    <div
                      className="overflow-auto"
                      style={{ maxHeight: "300px" }}
                    >
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          className="card-img-top"
                          src={product.mainImage.secure_url}
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        : "no category on this item"}
    </>
  );
}

export default Products;
