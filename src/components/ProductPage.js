import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../main/mainPage.css'
import axios from "axios";

const ProductPage = () => {
    const { p_id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/items-for-sale/findOne/${p_id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product details: ', error));
    }, [p_id]);

    if (!product) return <div>Loading...</div>
    else console.log(p_id);

    return (
        <div className="productDetail">
            <h2>상품이름</h2>
            <div className="productImg">
                <img src={`images/product${p_id}.jpg`} alt={product.item_name} height={400} />
            </div>
            <div>
                <h2>{product.item_name}</h2>
                <p>가격 : {product.item_price}</p>
                <p>{product.item_info}</p>
            </div>
        </div>
    );
};

export default ProductPage;
