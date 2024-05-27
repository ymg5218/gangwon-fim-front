import React from "react";
import { useParams } from "react-router-dom";
import '../main/index.css'

const ProductPage = () => {
    const { p_id } = useParams();

    return (
        <div className="productDetail">
            <h2>상품이름</h2>
            <div className="productImg">
                <img src={`images/product${p_id}.jpg`} alt="" />
            </div>
            <div>
                <p>맛있는 양파</p>
                <p>야무진 양파</p>
                <p>가격 : 1000원</p>
            </div>
        </div>
    );
};

export default ProductPage;
