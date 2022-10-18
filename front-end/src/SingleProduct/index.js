import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProduct() {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    const getProduct = async () => {
        const res = await axios.get(`http://localhost:5000/api/allProducts/product/${id}`);
        if (res.status == 200) {
            setProduct(res.data)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    return <>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }}>
            {
                product.map((product) => {
                    return <div style={{
                        width: 300,
                        height: 600
                    }} >
                        <img
                            src={product.image}
                            style={{
                                width: "100%",
                                height: 400
                            }} />
                        <h3>{product.name}</h3>
                        <h3>{product.price}</h3>

                    </div>
                })
            }
        </div>
    </>
}

export default SingleProduct;