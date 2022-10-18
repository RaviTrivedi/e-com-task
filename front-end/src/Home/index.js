import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Drawer } from 'antd';
import axios from "axios";

function Home() {

    const [products, setProducts] = useState([]);
    const [cartData, setCartData] = useState([]);
    const history = useNavigate();

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const getAllProducts = async () => {
        const res = await axios.get("http://localhost:5000/api/allProducts/getAllProducts");
        if (res.status == 200) {
            setProducts(res.data)
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    const handleClick = (data) => {
        setCartData([...cartData, data]);
    }
    const handleRemoveClick = (data) => {

        let filteredCartData = cartData.filter((cartItem) => cartItem.id != data.id)
        setCartData(filteredCartData);

    }

    const priceCalc = () => {

        let totalPrice = 0;

        cartData.forEach(element => {
            totalPrice += element.price
        });

        return totalPrice;

    }


    return <>  <Button type="primary" onClick={showDrawer}>
        Cart
    </Button>
        <Drawer title="Cart Items" placement="right" onClose={onClose} open={open}>
            {
                cartData.map((cartItem) => {
                    return <div style={{
                        borderStyle: "solid",
                        borderWidth: 1
                    }} >
                        <h3>{cartItem.name}</h3>
                        <h3>Price :- {cartItem.price}</h3>
                    </div>
                })
            }
            Sub Total :- {priceCalc()}
        </Drawer>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }}>
            {
                products.map((product) => {
                    return <div style={{
                        width: 300,
                        height: 600
                    }} >
                        <img
                            src={product.image}
                            style={{
                                width: "100%",
                                height: 400
                            }}

                        />
                        <h3 onClick={() => history(`/product/${product.id}`)}>{product.name}</h3>
                        <h3>{product.price}</h3>
                        {
                            cartData.map((data) => data.id).includes(product.id) ?
                                <Button
                                    type="primary"
                                    danger
                                    size="large"
                                    onClick={(e) => handleRemoveClick(product)}
                                >
                                    Remove From Cart
                                </Button>
                                :
                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={(e) => handleClick(product)}
                                >
                                    Add To Cart
                                </Button>}
                    </div>
                })
            }
        </div>
    </>
}

export default Home;