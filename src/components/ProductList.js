import React from "react";
import { Link } from "react-router-dom";


const ProductList = ({ p_id, p_price, p_name }) => {
    return (
        <li>
            <Link to={`/detailView/${p_id}`}>
                <img src={`images/product${p_id}.jpg`} alt={p_id} height={200} />
                <h3>{p_name}</h3>
                <p>{p_price}원</p>
                <p>간단한 설명</p>
            </Link>
        </li>
    );
};

export default ProductList;